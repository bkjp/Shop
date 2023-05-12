import graphene
# from category.schema import  CategoryQuery, CategoryMutation
# from coupon.schema import CouponQuery, CouponMutation
# from products.schema import ProductQuery
from schemas.users_schema import UserQueries, UserMutations
from schemas.category_schema import CategoryQueries, CategoryMutations
from schemas.coupon_schema import CouponQueries, CouponMutations
from schemas.auth_schema import AuthenticationMutations
from schemas.product_schema import ProductQueries, ProductMutations
from schemas.productType_schema import ProductTypeQueries, ProductTypeMutations
from schemas.tag_schema import TagQueries, TagMutations
from schemas.order_schema import OrderQueries, OrderMutations


class Query(
    UserQueries,
    CategoryQueries,
    CouponQueries,
    ProductQueries,
    ProductTypeQueries,
    TagQueries,
    OrderQueries,
    graphene.ObjectType
):
    pass


class Mutation(
    UserMutations,
    AuthenticationMutations,
    CategoryMutations,
    CouponMutations,
    ProductMutations,
    ProductTypeMutations,
    TagMutations,
    OrderMutations,
    graphene.ObjectType

):
    pass


schema = graphene.Schema(query=Query, mutation = Mutation)