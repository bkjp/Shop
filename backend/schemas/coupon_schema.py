import graphene
from graphene import relay
from graphene_django.filter import DjangoFilterConnectionField
from django.contrib.auth import get_user_model
from graphql_relay import from_global_id
from django.contrib.auth.models import Group
from graphene.types.generic import GenericScalar
from graphql import GraphQLError
from django.core.cache import cache
from datetime import datetime
from core import types, models


##################################    Queries   ########################################


class CouponQueries(graphene.ObjectType):
    coupons = DjangoFilterConnectionField(types.CouponNode)
    coupon = graphene.Field(types.CouponNode, coupon_id = graphene.ID(required = True))


    def resolve_coupons(parent, info):
        coupons = models.Coupon.objects.all()
        return coupons


    def resolve_coupon(parent, info, coupon_id):

        # We retrieve the global id and convert to natural model id in the db.
        converted_id = from_global_id(coupon_id)[1]

        # Checking the value of id.
        if not converted_id:
            raise Exception("Invalid Id.")

        coupon = models.Coupon.objects.get(id = converted_id)

        return coupon


##################################    Mutations    #######################################

class CouponCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    coupon = graphene.Field(types.CouponNode)

    class Input:
        name = graphene.String(required = True)
        description = graphene.String(required = True)
        coupon_rate = graphene.Float(required = True)
        start_date = graphene.String(required = True)
        end_date = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            name = kwargs["name"]
            description = kwargs["description"]
            coupon_rate = kwargs["coupon_rate"]
            start_date = kwargs["start_date"]
            end_date = kwargs["end_date"]

            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "name": name,
                "description": description,
                "coupon_rate": coupon_rate,
                "start_date": start_date,
                "end_date": end_date
            }
            for key in datas_dict:
                if not datas_dict[key]:
                    return CouponCreateMutation(
                        success = False,
                        feedbackResponse = f"We cannot create this coupon.Please provides a {key}."
                    )

            # We check if the coupon already exists.
            if models.Coupon.objects.filter(name = name).exists():
                return CouponCreateMutation(
                    success = False,
                    feedbackResponse = "Coupon already exists.Please create new one."
                )

            # We create coupon instance
            coupon = models.Coupon.objects.create(
                name = name,
                description = description,
                coupon_rate = coupon_rate,
                start_date = start_date,
                end_date = end_date
            )

            # We check if coupon has been created successfully.
            if models.Coupon.objects.filter(name = name).exists():

                return CouponCreateMutation(
                    success = True,
                    feedbackResponse = "Coupon created.",
                    coupon = coupon
                )
            else:
                return CouponCreateMutation(
                    success = False,
                    feedbackResponse = "Error occurs when creating coupon."
                )

        except Exception as e:
            print(e)



class CouponUpdateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    coupon = graphene.Field(types.CouponNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        coupon_id = graphene.ID(required = True)
        name = graphene.String(required = True)
        description = graphene.String(required = True)
        coupon_rate = graphene.Float(required = True)
        start_date = graphene.String(required = True)
        end_date = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # Get the global id and convert to natural model id in the db.
            coupon_id = kwargs["coupon_id"]
            converted_id = from_global_id(coupon_id)[1]

            # Checking the value of id.
            if not converted_id:
                return CouponUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking if coupon exists.
            if not models.Coupon.objects.get(id = converted_id):
                return CouponUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification.",
                )

            # We get the user and other datas.
            #user = info.context.user
            name = kwargs["name"]
            description = kwargs["description"]
            coupon_rate = kwargs["coupon_rate"]
            start_date = kwargs["start_date"]
            end_date = kwargs["end_date"]

            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "name": name,
                "description": description,
                "coupon_rate": coupon_rate,
                "start_date": start_date,
                "end_date": end_date
            }
            for key in datas_dict:
                if not datas_dict[key]:
                    return CouponUpdateMutation(
                        success = False,
                        feedbackResponse = f"You must provide a new {key} or the old one."
                    )

            # Retrieve the coupon
            coupon = models.Coupon.objects.get(id = converted_id)

            # update and save the coupon.
            coupon.name = name
            coupon.description = description
            coupon.coupon_rate = coupon_rate
            coupon.start_date = start_date
            coupon.end_date = end_date
            coupon.save()

            return CouponUpdateMutation(
                success = True,
                feedbackResponse = "Coupon updated successfully.",
                coupon = coupon
            )

        except Exception as e:
            print(e)

class CouponDeleteMutation(relay.ClientIDMutation):

    # fields to return in the response
    coupon = graphene.Field(types.CouponNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        coupon_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the global id and convert to natural model id in the db.
            coupon_id = kwargs["coupon_id"]
            converted_id = from_global_id(coupon_id)[1]

            # Checking the value of id.
            if not converted_id:
                return CouponDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of the coupon we want to delete.
            if not models.Coupon.objects.filter(id = converted_id).exists():
                return CouponDeleteMutation(
                    success = False,
                    feedbackResponse = "Coupon with this Id  does no longer exists."
                )

            # get and delete the coupon.
            coupon = models.Coupon.objects.get(id = converted_id)
            coupon.delete()

            # Check if the coupon has been deleted successfully
            if models.Coupon.objects.filter(id = converted_id).exists():

                return CouponDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting coupon.",
                )

            return CouponDeleteMutation(
                success = True,
                feedbackResponse = "Coupon deleted successfully.",
                coupon = coupon
            )

        except Exception as e:
            print(e)


class CouponMutations(graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    create_coupon = CouponCreateMutation.Field()
    update_coupon = CouponUpdateMutation.Field()
    delete_coupon = CouponDeleteMutation.Field()



