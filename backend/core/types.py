import graphene
from graphene_django import DjangoObjectType
from . import models

class ErrorNodeType(graphene.ObjectType):
    success = graphene.Boolean()
    feedbackResponse = graphene.String()


class UserNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.User
        fields = "__all__"
        filter_fields = ["email"]
        interfaces = (graphene.relay.Node,)

class CustomerNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Customer
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

class ProviderNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Provider
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

class CategoryNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Category
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

    def resolve_thumbnail(self, info):
        if self.thumbnail:
            self.thumbnail = info.context.build_absolute_uri(self.thumbnail)
        return self.thumbnail

class ProductTypeNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.ProductType
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

class ProductImagesNode(DjangoObjectType):

    class Meta:
        model = models.ProductImage
        fields = "__all__"
        filter_fields = []
        interfaces = (graphene.relay.Node,)

    def resolve_image(self, info, **kwargs):
        if self.image:
            self.image = info.context.build_absolute_uri(self.image)
        return self.image

class ProductNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Product
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

    def resolve_qr_code(self, info, **kwrags):
        # We build full absolute url of qr_code since it is an image.
        if self.qr_code:
            self.qr_code = info.context.build_absolute_uri(self.qr_code)
        return self.qr_code

class TagNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Tag
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

class ProductSpecificationNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.ProductSpecification
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)

class ProductSpecificationsValueNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.ProductSpecificationValue
        fields = "__all__"
        filter_fields = ["value"]
        interfaces = (graphene.relay.Node,)

###########################################################################################

class OrderNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Order
        fields = "__all__"
        filter_fields = ["reference"]
        interfaces = (graphene.relay.Node,)


class OrderItemNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.OrderItem
        fields = "__all__"
        filter_fields = ["name"]
        interfaces = (graphene.relay.Node,)


class DeliveryAddressNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.DeliveryAddress
        fields = "__all__"
        filter_fields = []
        interfaces = (graphene.relay.Node,)


class BillingAddressNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.BillingAddress
        fields = "__all__"
        filter_fields = []
        interfaces = (graphene.relay.Node,)


class CouponNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Coupon
        fields = "__all__"
        filter_fields = []
        interfaces = (graphene.relay.Node,)


class TaxeNode(DjangoObjectType):
    # if you don't want to obtain a global Id in your response query use this.
    #id = graphene.ID(source='pk', required=True)

    class Meta:
        model = models.Taxe
        fields = "__all__"
        filter_fields = []
        interfaces = (graphene.relay.Node,)