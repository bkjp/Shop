import graphene
import traceback
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


class OrderQueries(graphene.ObjectType):
    orders = DjangoFilterConnectionField(types.OrderNode)
    order = graphene.Field(types.OrderNode, coupon_id = graphene.ID(required = True))


    def resolve_orders(parent, info):
        result = models.Order.objects.all()
        return result


    def resolve_order(parent, info, order_id):

        # We retrieve the global id and convert to natural model id in the db.
        converted_id = from_global_id(order_id)[1]

        # Checking the value of id.
        if not converted_id:
            raise Exception("Invalid Id.")

        result = models.Order.objects.get(id = converted_id)

        return result


##################################    Mutations    #######################################

class OrderCreateMutation(relay.ClientIDMutation):

    # Fields to return in the response
    success = graphene.Boolean()
    feedbackResponse = graphene.String()
    order = graphene.Field(types.OrderNode)

    class Input:
        payement_method = graphene.String(required = True),
        sub_total_price = graphene.Float(required = True),
        shipping_price = graphene.Float(required = True),
        tax_price = graphene.Float(required = True),
        coupon_rate = graphene.Float(required = True),
        coupon_price = graphene.Float(required = True),
        total_price = graphene.Float(required = True),
        #cartItems = graphene.List()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:

            user = info.context.user
            payement_method = kwargs["payementMethod"],
            sub_total_price = kwargs["subTotal"],
            shipping_price = kwargs["shippingPrice"],
            tax_price = kwargs["taxPrice"],
            coupon_rate = kwargs["couponRate"],
            coupon_price = kwargs["couponPrice"],
            total_price = kwargs["totalPrice"],

            if user:

                # We check if we do not have empty values for our incoming datas.
                datas_dict = {
                    "payement_method": payement_method,
                    "sub_total_price": sub_total_price,
                    "shipping_price ": shipping_price ,
                    "tax_price": tax_price,
                    "coupon_rate": coupon_rate,
                    "coupon_price": coupon_price,
                    "total_price": total_price
                }
                for key in datas_dict:
                    if not datas_dict[key]:
                        return OrderCreateMutation(
                            success = False,
                            feedbackResponse = f"We cannot create this coupon.Please provides a {key}."
                        )

                # We check if the order_items array is empty or not and send the response
                if kwargs["cartItems"] and len(kwargs["cartItems"]) == 0:
                    return OrderCreateMutation(
                            success = False,
                            feedbackResponse = "Your cart is empty."
                        )
                else:
                    # We create the order.
                    order = models.Order.objects.create(
                        user = user,
                        payement_method = kwargs["payementMethod"],
                        sub_total_price = kwargs["subTotal"],
                        shipping_price = kwargs["shippingPrice"],
                        tax_price = kwargs["taxPrice"],
                        coupon_rate = kwargs["couponRate"],
                        coupon_price = kwargs["couponPrice"],
                        total_price = kwargs["totalPrice"],
                    )

                    # We create delivery address
                    delivery_address = models.DeliveryAddress.objects.create(
                        user = user,
                        order = order,

                        first_name = kwargs["deliveryAddress"]["deliveryFirstName"],
                        last_name = kwargs["deliveryAddress"]["deliveryLastName"],

                        phone_number = kwargs["deliveryAddress"]["deliveryPhoneNumber"],
                        email = kwargs["deliveryAddress"]["deliveryEmail"],

                        town = kwargs["deliveryAddress"]["deliveryTown"],
                        province = kwargs["deliveryAddress"]["deliveryProvince"],
                        country = kwargs["deliveryAddress"]["deliveryCountry"],

                        address = kwargs["deliveryAddress"]["deliveryAddress"],
                        zip_code = kwargs["deliveryAddress"]["deliveryZipCode"],
                        unit_number = kwargs["deliveryAddress"]["deliveryUnitNumber"],

                        shipping_price = kwargs["shippingPrice"]
                    )

                    # We create billing address.
                    billing_address = models.BillingAddress.objects.create(
                        user = user,
                        order = order,

                        first_name = kwargs["billingAddress"]["billingFirstName"],
                        last_name = kwargs["billingAddress"]["billingLastName"],
                        phone_number = kwargs["billingAddress"]["billingPhoneNumber"],
                        email = kwargs["billingAddress"]["billingEmail"],

                        town = kwargs["billingAddress"]["billingTown"],
                        province = kwargs["billingAddress"]["billingProvince"],
                        country = kwargs["billingAddress"]["billingCountry"],

                        address = kwargs["billingAddress"]["billingAddress"],
                        zip_code = kwargs["billingAddress"]["billingZipCode"],
                        unit_number = kwargs["billingAddress"]["billingUnitNumber"],
                    )

                    # We create each element (item) of orderIitems. model.
                    for i in kwargs["cartItems"]:

                        # We retrieve the product instance
                        if not models.Product.objects.filter(id = i["id"]).exists():

                            return OrderCreateMutation(
                                success = False,
                                feedbackResponse = "Please choose a product.."
                            )

                        else:

                            product = models.Product.objects.get(id = i["id"])

                            # We create order item in db.
                            item = models.OrderItem.objects.create(
                                order = order,
                                product = product,
                                name = i["name"],
                                qty = i["qty"],
                                price = i["price"],
                            )

                            # We update stock of the product in the database
                            product.stock -= item.qty

                    # We serialize and return data to the client
                    return OrderCreateMutation(
                        success = True,
                        feedbackResponse = "La livraison a été enregistrée avec success",
                        order = order
                    )

            else:
                return OrderCreateMutation(
                    success = False,
                    feedbackResponse = "Please login"
                )

        except Exception as e:
            message = traceback.format_exc()
            print(message)




class OrderUpdateMutation(relay.ClientIDMutation):

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
                return OrderUpdateMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

        except Exception as e:
            print(e)

class OrderDeleteMutation(relay.ClientIDMutation):

    # fields to return in the response
    order = graphene.Field(types.OrderNode)
    success = graphene.Boolean()
    feedbackResponse = graphene.String()

    class Input:
        coupon_id = graphene.ID(required = True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            # We retrieve the global id and convert to natural model id in the db.
            order_id = kwargs["order_id"]
            converted_id = from_global_id(order_id)[1]

            # Checking the value of id.
            if not converted_id:
                return OrderDeleteMutation(
                    success = False,
                    feedbackResponse = "Invalid identification"
                )

            # Checking the existence of the coupon we want to delete.
            if not models.Order.objects.filter(id = converted_id).exists():
                return OrderDeleteMutation(
                    success = False,
                    feedbackResponse = "Order with this Id  does no longer exists."
                )

            # get and delete the oder.
            order = models.Order.objects.get(id = converted_id)

            # Delete first all the order items related to this order.
            # ..........

            # delete the order
            order.delete()

            # Check if the order has been deleted successfully.
            if models.Order.objects.filter(id = converted_id).exists():

                return OrderDeleteMutation(
                    success = False,
                    feedbackResponse = "Error occurs when deleting coupon.",
                )

            return OrderDeleteMutation(
                success = True,
                feedbackResponse = "Coupon deleted successfully.",
                order = order
            )

        except Exception as e:
            print(e)


class OrderMutations(graphene.ObjectType):

    # Managing Oder
    create_order = OrderCreateMutation.Field()
    update_order = OrderUpdateMutation.Field()
    delete_order = OrderDeleteMutation.Field()



