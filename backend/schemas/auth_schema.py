import graphene
import graphql_jwt
import random
import logging
from graphene import relay
#from graphql_auth import mutations
#from graphql_auth.schema import UserQuery, MeQuery
from graphene_django.filter import DjangoFilterConnectionField
from graphql_jwt.shortcuts import get_payload, get_token, create_refresh_token
from django.contrib.auth import get_user_model
from graphql_relay import from_global_id
from django.contrib.auth.models import Group
from graphene.types.generic import GenericScalar
from graphql import GraphQLError
from graphene_django import DjangoObjectType
from core.models import User
from django.core.cache import cache
from datetime import datetime
from core.utils.send_emails import send_custom_mail

logger = logging.getLogger(__name__)

#######################################################################################################

class AuthMutation(graphene.ObjectType):
    #register = mutations.Register.Field()
    # verify_account = mutations.VerifyAccount.Field()
    # resend_activation_email = mutations.ResendActivationEmail.Field()
    # send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    # password_reset = mutations.PasswordReset.Field()
    # password_change = mutations.PasswordChange.Field()
    # archive_account = mutations.ArchiveAccount.Field()
    # delete_account = mutations.DeleteAccount.Field()
    # update_account = mutations.UpdateAccount.Field()
    # send_secondary_email_activation = mutations.SendSecondaryEmailActivation.Field()
    # verify_secondary_email = mutations.VerifySecondaryEmail.Field()
    # swap_emails = mutations.SwapEmails.Field()

    #django-graphql-jwt inheritances
    #token_auth = mutations.ObtainJSONWebToken.Field()
    #verify_token = mutations.VerifyToken.Field()
    #refresh_token = mutations.RefreshToken.Field()
    #revoke_token = mutations.RevokeToken.Field()

    #  Graphql_jwt
    # token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    # verify_token = graphql_jwt.Verify.Field()
    # refresh_token = graphql_jwt.Refresh.Field()
    # revoke_token = graphql_jwt.Revoke.Field()

    token_auth = graphql_jwt.relay.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.relay.Verify.Field()
    refresh_token = graphql_jwt.relay.Refresh.Field()

class Reset_Password_Mutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        user_email = graphene.String(required = True)
        new_password1 = graphene.String(required = True)
        new_password2 = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            user_email = kwargs["user_email"]
            new_password1 = kwargs["new_password1"]
            new_password2 = kwargs["new_password2"]

            # Get the user with this email
            if User.objects.filter(email = user_email).exists():
                user = User.objects.get(email = user_email)

                if new_password1 == new_password2:
                    # set the new password and save
                    user.set_password(new_password1)
                    user.save()

                    return Reset_Password_Mutation(
                        success = True,
                        feedbackResponse = "Password changed successfully.",
                    )

                else:
                    return Reset_Password_Mutation(
                        success = False,
                        feedbackResponse = "Passwords do not match."
                    )

            else:
                return Reset_Password_Mutation(
                    success = False,
                    feedbackResponse = "User with this email does not exists.",
                )

        except Exception as e:
            print(e)

class Send_Mail_To_Reset_Password_Mutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        user_email = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        user_email = kwargs["user_email"]

        # Check if the user exists.
        if User.objects.filter(email = user_email).exists():
            # Get the user with this email
            user = User.objects.get(email = user_email)

            # Generate otp to send
            otp = random.randint(1000, 9999)

            # Construct mail and send.
            subject = "Reset Password code"
            message = "password_reset_mail.html"
            receivers  = [user_email, "betfien_jules@yahoo.fr"]
            context = {
                "date": datetime.today().date,
                "email": user_email,
                "name": user.first_name,
                "code": otp,
                "exp": 5
            }

            has_sent = send_custom_mail(
                subject = subject,
                receivers = receivers,
                template = message,
                context = context
            )

            if has_sent:
                # Save otp to the redis cache
                identifier = {
                    "email": user_email,
                    "code": str(otp)
                }
                cache.set("user_identifier", identifier, timeout = 300)

                return Send_Mail_To_Reset_Password_Mutation(
                    success = True,
                    feedbackResponse = "Mail has sent to reset password. please check your email account.",
                )

            else:
                return Send_Mail_To_Reset_Password_Mutation(
                    success = False,
                    feedbackResponse = "Error occurs when sending mail. Please try again later",
                )

        else:
            return Send_Mail_To_Reset_Password_Mutation(
                success = False,
                feedbackResponse = "User with this email does not exists."
            )

class Otp_Verification_To_Reset_Password_Mutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    email = graphene.String()

    class Input:
        user_email = graphene.String(required = True)
        user_otp = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            # Retrieve datas from the client
            user_email = kwargs["user_email"]
            user_otp = kwargs["user_otp"]

            if User.objects.filter(email = user_email).exists():

                # We check if the cache exists
                if cache.get("user_identifier"):

                    # We retrieve email and otp from the redis cache
                    identifier = cache.get("user_identifier")
                    email_from_cache = identifier["email"]
                    otp_from_cache = identifier["code"]

                    if email_from_cache  == user_email  and otp_from_cache == user_otp:

                        return Otp_Verification_To_Reset_Password_Mutation(
                            success = True,
                            feedbackResponse = "Code is valid. Please reset your password.",
                            email = user_email
                        )
                    else:
                        return Otp_Verification_To_Reset_Password_Mutation(
                            success = False,
                            feedbackResponse = "Invalid email address or wrong otp!"
                        )
                else:
                    return Otp_Verification_To_Reset_Password_Mutation(
                        success = False,
                        feedbackResponse = "Code expired!"
                    )

            else:
                return Otp_Verification_To_Reset_Password_Mutation(
                    success = False,
                    feedbackResponse = "User with this email does not exists."
                )

        except Exception as e:
            #logger.error(e)
            return Otp_Verification_To_Reset_Password_Mutation(
                success = False,
                feedbackResponse = f"{e}"
            )

class Email_verification_Mutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    email = graphene.String()

    class Input:
        user_email = graphene.String(required = True)
        user_otp = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            # Retrieve datas from the client
            user_email = kwargs["user_email"]
            user_otp = kwargs["user_otp"]

            if User.objects.filter(email = user_email).exists():

                # We check if the cache exists
                if cache.get("user_identifier"):

                    # We retrieve email and otp from the redis cache
                    identifier = cache.get("user_identifier")
                    email_from_cache = identifier["email"]
                    otp_from_cache = identifier["code"]

                    if email_from_cache  == user_email  and otp_from_cache == user_otp:

                        # Update user's email_verified to True.
                        user = User.objects.get(email = user_email)
                        user.email_verified = True
                        user.save()

                        return Otp_Verification_To_Reset_Password_Mutation(
                            success = True,
                            feedbackResponse = "Congratulations! Your email has been verified.",
                            email = user_email
                        )
                    else:
                        return Otp_Verification_To_Reset_Password_Mutation(
                            success = False,
                            feedbackResponse = "Invalid email address or wrong otp!"
                        )
                else:
                    return Otp_Verification_To_Reset_Password_Mutation(
                        success = False,
                        feedbackResponse = "Code expired!"
                    )

            else:
                return Otp_Verification_To_Reset_Password_Mutation(
                    success = False,
                    feedbackResponse = "User with this email does not exists."
                )

        except Exception as e:
            #logger.error(e)
            return Otp_Verification_To_Reset_Password_Mutation(
                success = False,
                feedbackResponse = f"{e}"
            )

class AuthenticationMutations(AuthMutation, graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    reset_password = Reset_Password_Mutation.Field()
    mail_reset_password = Send_Mail_To_Reset_Password_Mutation.Field()
    verify_otp_to_reset_password = Otp_Verification_To_Reset_Password_Mutation.Field()
    verify_email = Email_verification_Mutation.Field()

