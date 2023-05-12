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


class CategoryQueries(graphene.ObjectType):
    categories = DjangoFilterConnectionField(types.CategoryNode)

    categories_jules = graphene.List(types.CategoryNode)

    children_of_category = DjangoFilterConnectionField(types.CategoryNode, category_id = graphene.ID(required = True) )
    category = graphene.Field(types.CategoryNode, category_id = graphene.ID(required = True))
    error = graphene.Field(types.ErrorNodeType)


    def resolve_categories_jules(parent, info):
        categories = models.Category.objects.all()
        return categories

    def resolve_categories(parent, info):
        print("###################  PUTAIN DE BORDEL #################")
        categories = models.Category.objects.all()
        return categories


    def resolve_category(parent, info, category_id):
        # We retrieve the global id and convert to natural model id in the db.
        converted_id = from_global_id(category_id)[1]

        # Checking the value of id.
        if not converted_id:
            raise Exception("Invalid Id.")
        category = models.Category.objects.get(id = converted_id)
        return category

    def resolve_children_of_category(parent, info, category_id):
        try:
            # We retrieve the global id and convert to natural model id in the db.
            converted_id = from_global_id(category_id)[1]

            print("###########################################")
            print(converted_id)

            # Checking the value of id.
            if not converted_id:
                error = {
                    "success":False,
                    "feedbackResponse":"Invalid identification"
                }

                return error

            # We check if the category exists in the db
            if models.Category.objects.filter(id = converted_id ).exists():

                # We get the category instance
                category = models.Category.objects.get(id = converted_id )

                # We get all children of the category instance
                children_of_category = category.get_children()

                return children_of_category

            else:
                raise Exception("The main category does not exists.")

        except Exception as e:
            print(e)




##################################    Mutations    #######################################

class CategoryCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    category = graphene.Field(types.CategoryNode)

    class Input:
        parent = graphene.String()
        name = graphene.String(required = True)
        description = graphene.String(required = True)
        thumbnail = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            # We get the user and other datas.
            user = info.context.user
            parent = kwargs["parent"]
            name = kwargs["name"]
            description = kwargs["description"]
            thumbnail = kwargs["thumbnail"]

            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "user":user,
                "parent": parent,
                "name": name,
                "description": description,
                "thumbnail": thumbnail
            }

            # We check if the category already exists.
            if models.Category.objects.filter(name = name).exists():
                return CategoryCreateMutation(
                    success = False,
                    feedbackResponse = "Category already exists.Please create new one."
                )

            if parent:

                for key in datas_dict:
                    if not datas_dict[key]:
                        return CategoryCreateMutation(
                            success = False,
                            feedbackResponse = f"We cannot create this coupon.Please provides a {key}."
                        )

                # We create category instance
                category = models.Category.objects.create(
                    user = user,
                    parent = parent,
                    name = name,
                    description = description,
                    thumbnail = thumbnail
                )

                # We check if category has been created successfully.
                if models.Category.filter(name = name).exists():

                    return CategoryCreateMutation(
                        success = True,
                        feedbackResponse = "Category created.",
                        category = category
                    )
                else:
                    return CategoryCreateMutation(
                        success = False,
                        feedbackResponse = "Error occurs when creating category.",
                        category = category
                    )

            # We create category without parent
            for key in datas_dict:
                if not datas_dict[key]:
                    return CategoryCreateMutation(
                        success = False,
                        feedbackResponse = f"We cannot create this coupon.Please provides a {key}."
                    )

                # We create category instance
                category = models.Category.objects.create(
                    user = user,
                    name = name,
                    description = description,
                    thumbnail = thumbnail
                )

                # We check if category has been created successfully.
                if models.Category.filter(name = name).exists():

                    return CategoryCreateMutation(
                        success = True,
                        feedbackResponse = "Category created.",
                        category = category
                    )
                else:
                    return CategoryCreateMutation(
                        success = False,
                        feedbackResponse = "Error occurs when creating category.",
                        category = category
                    )

        except Exception as e:
            print(e)


class CategoryUpdateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        category_id = graphene.ID(required = True)
        name = graphene.String(required = True)
        description = graphene.String(required = True)
        thumbnail = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # Get the global id and convert to natural model id in the db.
            category_id = kwargs["category_id"]
            converted_id = from_global_id(category_id)[1]

            # Checking the value of id.
            if not converted_id:
                return CategoryUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking if category exists.
            if not models.Category.objects.get(id = converted_id):
                return CategoryUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification.",
                )

            # We get the user and other datas.
            user = info.context.user
            parent = kwargs["parent"]
            name = kwargs["name"]
            description = kwargs["description"]
            thumbnail = kwargs["thumbnail"]

            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "user":user,
                "parent": parent,
                "name": name,
                "description": description,
                "thumbnail": thumbnail
            }

            # We check if the category already exists.
            if models.Category.objects.filter(name = name).exists():
                return CategoryCreateMutation(
                    success = False,
                    feedbackResponse = "Category already exists.Please create new one."
                )


            # Retrieve the category
            category = models.Category.objects.get(id = converted_id)

            # update and save category.
            category.name = name
            category.description = description
            category.thumbnail = thumbnail
            category.save()

            return CategoryUpdateMutation(
                success = True,
                feedbackResponse = "Category updated successfully.",
                category = category
            )


        except Exception as e:
            print(e)

class CategoryDeleteMutation(relay.ClientIDMutation):
    user = graphene.Field(types.UserNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        category_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the global id and convert to natural model id in the db.
            category_id = kwargs["category"]
            converted_id = from_global_id(category_id)[1]

            # Checking the value of id.
            if not converted_id:
                return CategoryDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of category we want to delete
            if not models.Category.objects.get(id = converted_id):
                return CategoryDeleteMutation(
                    success = False,
                    feedbackresponse = "Invalid identification"
                )

            # Get and delete the category.
            category = models.Category.objects.get(id = converted_id)
            category.delete()

            # Check if the category has been deleted successfully
            if models.Category.objects.filter(id = converted_id).exists():

                return CategoryDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting coupon.",
                )

            return CategoryDeleteMutation(
                success = True,
                feedbackResponse = "Category deleted successfully.",
                category = category
            )

        except Exception as e:
            print(e)


class CategoryMutations(graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    create_category = CategoryCreateMutation.Field()
    update_category = CategoryUpdateMutation.Field()
    delete_category = CategoryDeleteMutation.Field()



