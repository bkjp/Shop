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


class ProductTypeQueries(graphene.ObjectType):
    products_types = DjangoFilterConnectionField(types.ProductTypeNode)
    product_type = graphene.Field(types.ProductTypeNode, product_type_id = graphene.ID(required = True))


    def resolve_product_types(parent, info):
        results = models.ProductType.objects.all()
        return results


    def resolve_product_type(parent, info, product_type_id):

        # We retrieve the global id and convert to natural model id in the db.
        converted_id = from_global_id(product_type_id)[1]

        # Checking the value of id.
        if not converted_id:
            raise Exception("Invalid Id.")

        result = models.ProductType.objects.get(id = converted_id)

        return result


##################################    Mutations    #######################################

class ProductTypeCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    product_type = graphene.Field(types.ProductTypeNode)

    class Input:
        name = graphene.String(required = True)
        description = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            user = info.context.user

            if not user:
                return ProductTypeUpdateMutation(
                    success = False,
                    feedbackResponse = "You are not allow to do this.",
                )

            name = kwargs["name"]
            description = kwargs["description"]


            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "name": name,
                "description": description,
            }
            for key in datas_dict:
                if not datas_dict[key]:
                    return ProductTypeCreateMutation(
                        success = False,
                        feedbackResponse = f"We cannot create this type.Please provides a {key}."
                    )

            # We check if the type already exists.
            if models.ProductType.objects.filter(name = name).exists():
                return ProductTypeCreateMutation(
                    success = False,
                    feedbackResponse = "Coupon already exists.Please create new one."
                )

            # We create product type instance
            product_type = models.Coupon.objects.create(
                user = user,
                name = name,
                description = description,
            )

            # We check if coupon has been created successfully.
            if models.ProductType.objects.filter(name = name).exists():

                return ProductTypeCreateMutation(
                    success = True,
                    feedbackResponse = "Coupon created.",
                    product_type = product_type
                )
            else:
                return ProductTypeCreateMutation(
                    success = False,
                    feedbackResponse = "Error occurs when creating coupon."
                )

        except Exception as e:
            print(e)



class ProductTypeUpdateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    product_type = graphene.Field(types.ProductTypeNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        coupon_id = graphene.ID(required = True)
        name = graphene.String(required = True)
        description = graphene.String(required = True)


    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # Get the global id and convert to natural model id in the db.
            coupon_id = kwargs["coupon_id"]
            converted_id = from_global_id(coupon_id)[1]

            # Checking the value of id.
            if not converted_id:
                return ProductTypeUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking if type exists.
            if not models.ProductType.objects.get(id = converted_id):
                return ProductTypeUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification.",
                )

            # We get the user and other datas.
            user = info.context.user
            name = kwargs["name"]
            description = kwargs["description"]

            if not user:
                return ProductTypeUpdateMutation(
                    success = False,
                    feedbackResponse = "You are not allow to do this.",
                )


            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "name": name,
                "description": description,
            }
            for key in datas_dict:
                if not datas_dict[key]:
                    return ProductTypeUpdateMutation(
                        success = False,
                        feedbackResponse = f"You must provide a new {key} or the old one."
                    )

            # Retrieve the type.
            product_type = models.ProductType.objects.get(id = converted_id)

            # update and save the type.
            product_type.name = name
            product_type.description = description
            product_type.save()

            return ProductTypeUpdateMutation(
                success = True,
                feedbackResponse = "Type updated successfully.",
                product_type = product_type
            )

        except Exception as e:
            print(e)

class ProductTypeDeleteMutation(relay.ClientIDMutation):

    # fields to return in the response
    product_type = graphene.Field(types.ProductTypeNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        product_type_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the global id and convert to natural model id in the db.
            product_type_id = kwargs["product_type_id"]
            converted_id = from_global_id(product_type_id)[1]

            # Checking the value of id.
            if not converted_id:
                return ProductTypeDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of the type we want to delete.
            if not models.ProductType.objects.filter(id = converted_id).exists():
                return ProductTypeDeleteMutation(
                    success = False,
                    feedbackResponse = "Coupon with this Id  does no longer exists."
                )

            # get and delete the type.
            product_type = models.ProductType.objects.get(id = converted_id)
            product_type.delete()

            # Check if the coupon has been deleted successfully
            if models.ProductType.objects.filter(id = converted_id).exists():

                return ProductTypeDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting coupon.",
                )

            return ProductTypeDeleteMutation(
                success = True,
                feedbackResponse = "Coupon deleted successfully.",
                product_type = product_type
            )

        except Exception as e:
            print(e)


class ProductTypeMutations(graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    create_product_type = ProductTypeCreateMutation.Field()
    update_product_type = ProductTypeUpdateMutation.Field()
    delete_product_type = ProductTypeDeleteMutation.Field()



