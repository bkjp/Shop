"""
Django admin customization
"""

from django.contrib import admin
#from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from core import models
from mptt.admin import MPTTModelAdmin
from django.apps import apps

# class UserAdmin(BaseUserAdmin):
#     """Define the admin pages for users."""

#     ordering = ['id']
#     list_display = ['email', 'first_name', 'last_name']
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         (_('Personal Info'), {'fields': ('first_name', 'last_name', 'phone', 'profile_image', 'street_number', 'address', 'postal_code', 'town', 'province', 'country', 'isWorker', 'isJobOwner',)}),
#         (
#             _('Permissions'),
#             {
#                 'fields': (
#                     'is_active',
#                     'is_staff',
#                     'is_superuser',
#                 )
#             }
#         ),
#         (_('Important dates'), {'fields': ('last_login',)}),
#     )
#     readonly_fields = ['last_login']
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': (
#                 'email',
#                 'password1',
#                 'password2',
#                 'first_name',
#                 'last_name',
#                 'is_active',
#                 'is_staff',
#                 'is_superuser',
#             ),
#         }),
#     )


admin.site.register(models.User)
admin.site.register(models.Customer)
admin.site.register(models.Provider)
admin.site.register(models.Category, MPTTModelAdmin)
admin.site.register(models.ProductImage)

admin.site.register(models.Tag)
admin.site.register(models.Order)
admin.site.register(models.DeliveryAddress)
admin.site.register(models.BillingAddress)
admin.site.register(models.Bill)
admin.site.register(models.ProductType)
admin.site.register(models.Coupon)
admin.site.register(models.Taxe)
admin.site.register(models.ProductSpecification)
#admin.site.register(models.OrderItems)

# app = apps.get_app_config('graphql_auth')

# for model_name, model in app.models.items():
#     admin.site.register(model)

#----------------------------------------------------------------

# class ProductSpecificationInline(admin.TabularInline):
#     model = models.ProductSpecification

# @admin.register(models.ProductType)
# class ProductTypeAdmin(admin.ModelAdmin):
#     # This model or table will be nested inside the Product table
#     # in Admin page.
#     inlines = [
#         ProductSpecificationInline
#     ]

#-----------------------------------------------------------------

class ProductSpecificationValueInline(admin.TabularInline):
    model = models.ProductSpecificationValue

class ProductImageInline(admin.TabularInline):
    model = models.ProductImage

@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    # These models or tables will be nested inside the Product table
    # in Admin page.
    inlines = [
        ProductSpecificationValueInline,
        ProductImageInline
    ]

#-------------------------------------------------------------------