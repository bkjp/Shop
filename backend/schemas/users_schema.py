import graphene
import random
import graphql_jwt
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
from core.models import User
from django.core.cache import cache
from datetime import datetime
from core.utils.send_emails import send_custom_mail
from core.types import UserNode



##############################    Qieries   ######################################

# class UsersNode(UserQuery, MeQuery, graphene.ObjectType):
#     pass

class UserQueries(graphene.ObjectType):
    #users = graphene.List(UserNode)
    users = DjangoFilterConnectionField(UserNode)
    #user = graphene.Field(UserNode, user_id = graphene.Int())
    user = graphene.Field(UserNode, user_id = graphene.ID(required = True))


    def resolve_users(parent, info):
        users = get_user_model().objects.all().order_by("-id")
        return users


    def resolve_user(parent, info, user_id):
        converted_id = from_global_id(user_id)[1]
        user = get_user_model().objects.get(id = converted_id)

        # Test sending email
        email = user.email
        print("#####################################################")
        print(email)
        from core.utils.send_emails import send_otp_to_reset_password_via_email
        send_otp_to_reset_password_via_email("jbetfien@gmail.com")


        return user


########################    Mutations ########################################


class UserInput(graphene.InputObjectType):
    username = graphene.String()
    email = graphene.String()
    first_name = graphene.String()
    last_name = graphene.String()
    phone = graphene.String()

    password_1 = graphene.String()
    password_2 = graphene.String()

    marital_status = graphene.String()
    profile_image = graphene.String()

    birth_date = graphene.String()
    birth_location = graphene.String()
    title = graphene.String()
    social_number = graphene.String()
    driving_license = graphene.String()
    citizen_status = graphene.String()

    street_number = graphene.String()
    street_name = graphene.String()
    postal_code = graphene.String()
    metro_location = graphene.String()
    town = graphene.String()
    province = graphene.String()
    country = graphene.String()

class UserCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    user = graphene.Field(UserNode)
    access_token = graphene.String()
    refresh_token = graphene.String()
    payload = GenericScalar()


    class Input:
        input = UserInput(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, input):

        if input.password_1 == input.password_2:

            if len(input.password_1) >= 8:

                # We check if the user already exists in the database.
                if not get_user_model().objects.filter(email = input.email).exists():

                    # We create a user
                    user = get_user_model().objects.create_user(
                        username = input.username,
                        email = input.email,
                        first_name = input.first_name,
                        last_name = input.last_name,
                        phone = input.phone,
                        password = input.password_1
                    )

                    # We check if the user just created is well in database.
                    if get_user_model().objects.filter(email = input.email).exists():

                        # Get token, refresh token and payload
                        token = get_token(user)
                        refresh_token = create_refresh_token(user)
                        payload = get_payload(token)

                        # We send a mail to verify the user account.
                        # Generate otp to send
                        otp = random.randint(1000, 9999)
                        subject = "Email verification"
                        message = "verify_email.html"
                        receivers  = [input.email, "betfien_jules@yahoo.fr"]
                        context = {
                            "date": datetime.today().date,
                            "email": input.email,
                            "name": input.first_name,
                            "code": otp,
                            "exp": 5 # in minutes
                        }

                        has_sent = send_custom_mail(
                            subject = subject,
                            receivers = receivers,
                            template = message,
                            context = context
                        )

                        # Check if mail has been sent.
                        if has_sent:
                            # Save otp to the redis cache
                            identifier = {
                                "email": input.email,
                                "code": str(otp)
                            }
                            cache.set("user_identifier", identifier, timeout = 300)

                            # return object of response
                            return UserCreateMutation(
                                success = True,
                                feedbackResponse = "User created successfully.",
                                user = user,
                                access_token = token,
                                refresh_token = refresh_token,
                                payload = payload,
                            )

                        else:
                            return UserCreateMutation(
                                success = True,
                                feedbackResponse = "User created successfully but mail failed to be sent.",
                                user = user,
                                access_token = token,
                                refresh_token = refresh_token,
                                payload = payload,
                            )

                    else:
                        return UserCreateMutation(
                            success = False,
                            feedbackResponse = "Problem occurs when creating user in the db.",
                            payload = {}
                        )

                else:
                    return UserCreateMutation(
                        success = False,
                        feedbackResponse = "Email already exists",
                        #payload = {}
                    )
                    #raise GraphQLError("A user with this email already exists")

            else:
                return UserCreateMutation(
                    success = False,
                    feedbackResponse = "password must be at least 8 character of length",
                    payload = {}
                )

                #raise Exception("password must be at least 8 character of length")
        else:
            return UserCreateMutation(
                success = False,
                feedbackResponse = "Passwords do not match",
                payload = {}
            )
            #raise Exception("passwords do not match")


class UserUpdateMutation(relay.ClientIDMutation):
    user = graphene.Field(UserNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        input = UserInput(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, input):
        try:
            # Get the global id and convert to natural model id in the db.
            user_id = input.user_id
            converted_id = from_global_id(user_id)[1]

            # Retrieve the user
            user = get_user_model().objects.get(id = converted_id)

            if not user:
                raise Exception("User does not exist.")

            else:
                # We update user.
                user.username = input.username
                user.first_name = input.first_name
                user.last_name = input.last_name
                user.email = input.email
                user.phone = input.phone
                user.birth_date = input.birth_date
                user.birth_location = input.birth_location
                user.title = input.title
                user.social_number = input.social_number
                user.driving_license = input.driving_license
                user.citizen_status = input.citizen_status
                user.marital_status = input.marital_status
                user.profile_image = input.profile_image
                user.street_number = input.street_number
                user.street_name = input.street_name
                user.postal_code = input.postal_code
                user.metro_location = input.metro_location
                user.town = input.town
                user.province = input.province
                user.country = input.country

                user.save()

                return UserUpdateMutation(
                    success = True,
                    feedbackResponse = "User updated successfully.",
                    user = user
                )


        except get_user_model().DoesNotExist as e:
            user = None

class UserDeleteMutation(relay.ClientIDMutation):
    user_email = graphene.String()
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        user_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            # We retrieve the global id and convert to natural model id in the db.
            user_id = kwargs["user_id"]
            converted_id = from_global_id(user_id)[1]

            # Checking the value of id.
            if not converted_id:
                return UserDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of the user we want to delete.
            if not get_user_model().objects.filter(id = converted_id).exists():
                return UserDeleteMutation(
                    success = False,
                    feedbackResponse = "User with this Id  does no longer exists."
                )

            # Getting and deleting the user.
            user = get_user_model().objects.get(id = converted_id)
            user_email = user.email
            user.delete()

            # Check if the user has been deleted successfully
            if get_user_model().objects.filter(id = converted_id).exists():

                return UserDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting user.",
                )

            return UserDeleteMutation(
                success = True,
                feedbackResponse = "User deleted successfully.",
                user_email = user_email
            )

        except Exception as e:
            print(e)


class UserMutations(graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    create_user = UserCreateMutation.Field()
    update_user = UserUpdateMutation.Field()
    delete_user = UserDeleteMutation.Field()



