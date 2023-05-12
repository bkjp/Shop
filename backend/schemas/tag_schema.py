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


class TagQueries(graphene.ObjectType):
    tags = DjangoFilterConnectionField(types.TagNode)
    tag = graphene.Field(types.TagNode, tag_id = graphene.ID(required = True))


    def resolve_tags(parent, info):
        tags = models.Tag.objects.all()
        return tags


    def resolve_tag(parent, info, tag_id):

        # We retrieve the global id and convert to natural model id in the db.
        converted_id = from_global_id(tag_id)[1]

        # Checking the value of id.
        if not converted_id:
            raise Exception("Invalid Id.")

        tag = models.Tag.objects.get(id = converted_id)

        return tag


##################################    Mutations    #######################################

class TagCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    tag = graphene.Field(types.TagNode)
    created_by = graphene.Field(types.UserNode)

    class Input:
        name = graphene.String(required = True)
        description = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):

        try:
            # We retrieve the authorized user
            user = info.context.user

            if not user.is_authenticated:
                return TagCreateMutation(
                    success = False,
                    feedbackResponse = "Please Login.",
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
                    return TagCreateMutation(
                        success = False,
                        feedbackResponse = f"We cannot create this coupon.Please provides a {key}."
                    )

            # We check if the tag already exists.
            if models.Tag.objects.filter(name = name).exists():
                return TagCreateMutation(
                    success = False,
                    feedbackResponse = "Tag already exists.Please create new one."
                )

            # We create Tag instance
            tag = models.Tag.objects.create(
                user = user,
                name = name,
                description = description,
            )

            # We check if tag has been created successfully.
            if models.Tag.objects.filter(name = name).exists():

                return TagCreateMutation(
                    success = True,
                    feedbackResponse = "Tag created jules.",
                    tag = tag,
                    created_by = user
                )
            else:
                return TagCreateMutation(
                    success = False,
                    feedbackResponse = "Error occurs when creating coupon."
                )

        except Exception as e:
            print(e)


class TagUpdateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    updated_by = graphene.Field(types.UserNode)
    tag = graphene.Field(types.TagNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        tag_id = graphene.ID(required = True)
        name = graphene.String(required = True)
        description = graphene.String(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the authorized user
            user = info.context.user

            if not user.is_authenticated:
                return TagCreateMutation(
                    success = False,
                    feedbackResponse = "Please Login.",
                )

            # Get the global id and convert to natural model id in the db.
            tag_id = kwargs["tag_id"]
            converted_id = from_global_id(tag_id)[1]

            # Checking the value of id.
            if not converted_id:
                return TagUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking if tag exists.
            if not models.Tag.objects.get(id = converted_id):
                return TagUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification.",
                )

            # We get the user and other datas.
            name = kwargs["name"]
            description = kwargs["description"]

            # We check if we do not have empty values for our incoming datas.
            datas_dict = {
                "name": name,
                "description": description
            }
            for key in datas_dict:
                if not datas_dict[key]:
                    return TagUpdateMutation(
                        success = False,
                        feedbackResponse = f"You must provide a new {key} or the old one."
                    )

            # Retrieve the tag
            tag = models.Tag.objects.get(id = converted_id)

            # update and save the coupon.
            tag.name = name
            tag.description = description

            tag.save()

            return TagUpdateMutation(
                success = True,
                feedbackResponse = "Tag updated successfully.",
                tag = tag,
                updated_by = user
            )

        except Exception as e:
            print(e)


class TagDeleteMutation(relay.ClientIDMutation):

    # fields to return in the response
    tag_name = graphene.String()
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    deleted_by = graphene.Field(types.UserNode)

    class Input:
        tag_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the authorized user
            user = info.context.user

            if not user.is_authenticated:
                return TagCreateMutation(
                    success = False,
                    feedbackResponse = "Please Login.",
                )

            # We retrieve the global id and convert to natural model id in the db.
            tag_id = kwargs["tag_id"]
            converted_id = from_global_id(tag_id)[1]

            # Checking the value of id.
            if not converted_id:
                return TagDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of the tag we want to delete.
            if not models.Tag.objects.filter(id = converted_id).exists():
                return TagDeleteMutation(
                    success = False,
                    feedbackResponse = "Tag with this Id  does no longer exists."
                )

            # get and delete the tag.
            tag = models.Tag.objects.get(id = converted_id)
            tag_name = tag.name
            tag.delete()

            # Check if the tag has been deleted successfully
            if models.Tag.objects.filter(id = converted_id).exists():

                return TagDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting coupon.",
                )

            return TagDeleteMutation(
                success = True,
                feedbackResponse = "Tag deleted successfully.",
                tag_name = tag_name,
                deleted_by = user
            )

        except Exception as e:
            print(e)


class TagMutations(graphene.ObjectType):
    # Auth user inherit from AuthMutation

    # Managing user
    create_tag = TagCreateMutation.Field()
    update_tag = TagUpdateMutation.Field()
    delete_tag = TagDeleteMutation.Field()



