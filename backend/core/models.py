"""
Database models
"""
from django.conf import settings
from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
import calendar
from datetime import date, datetime

from django_extensions.db.fields import AutoSlugField

from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify

from mptt.models import MPTTModel, TreeForeignKey

import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw

from .manager import UserManager


##########################################################################################################



class CitizenStatus(models.TextChoices):
    Permanent = "Permanent resident"
    Temporaire = "Temporary resident"
    Canadien = "Canadian citizen"
    Refugie = "Refugie"

class MaritalStatus(models.TextChoices):
    Single = "Single"
    Married = "Married"
    Divorced = "Divorced"

class TitleStatus(models.TextChoices):
    Secretary = "Secretary"
    Technician = "Technician"
    Controller = "Controller"
    Seller = "Seller"
    Employee = "Employee"



class User(AbstractBaseUser, PermissionsMixin):
    """User in the system"""

    # Identification of user
    username = models.CharField(max_length=255, default="username")
    first_name = models.CharField(max_length=255, blank = False,)
    last_name = models.CharField(max_length=255, blank = False,)
    email = models.EmailField(max_length=255, unique=True, blank = False)
    phone = models.CharField(max_length=155, unique=True, blank=False)
    birth_date = models.CharField(max_length=155)
    birth_location = models.CharField(max_length=155)

    title = models.CharField(
        max_length = 50,
        choices = TitleStatus.choices,
        default = TitleStatus.Employee,
        blank=True,
        null = True
    )

    social_number = models.CharField(
        max_length=50,
        unique=True,
        null = True,
        blank = True
    )
    driving_license = models.CharField(
        max_length=50,
        unique=True,
        blank=True,
        null = True
    )

    citizen_status = models.CharField(
        max_length = 50,
        choices = CitizenStatus.choices,
        default = CitizenStatus.Permanent,
        blank=True,
        null = True
    )
    marital_status = models.CharField(
        max_length = 50,
        choices = MaritalStatus.choices,
        default = MaritalStatus.Single,
        blank=True,
        null = True
    )
    profile_image = models.ImageField(
        upload_to ='uploads/UserImage',
        null = True,
        blank = True,
        default ="noimage"
    )

    # Full Adress of user
    street_number = models.CharField(
        max_length = 10,
        blank=True,
        null = True
    )
    street_name = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )
    postal_code = models.CharField(
        max_length=155,
        blank=True,
        null = True
    )
    metro_location = models.CharField(
        max_length=155,
        blank = False,
    )
    town = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Montréal"
    )
    province = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Québec"
    )
    country = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )

    email_verified = models.BooleanField(default=False)

    accept_tnc = models.BooleanField(default=True)

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    last_login = models.DateTimeField(verbose_name = "last login", blank=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return str(self.id) + "--" + self.email

    def get_full_name(self):
        return f'{self.first_name}-{self.last_name}'

#---------------------------------------------------------------------------------------


class Customer(models.Model):
    # Identity
    name = models.CharField(
        max_length = 200,
        blank=False
    )
    email = models.EmailField(
        max_length = 100,
        default="example@gmail.com"

    )

    gender = models.CharField(
        max_length = 10,
        null = True,
        blank = True,
        default="Male"
    )

    phone = models.CharField(
        max_length=50,
        null = True,
        blank = True,
        default="xxx xxxx xxx"
    )
    profile_image = models.ImageField(
        upload_to ='uploads/images/customers',
        null = True,
        blank = True
    )

    # Full Adress of customers
    street_number = models.CharField(
        max_length = 10,
        blank=True,
        null = True,
        default="00000"
    )
    street_name = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )
    postal_code = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default="ABC DEF"
    )
    metro_location = models.CharField(
        max_length=155,
        blank=True,
        null = True
    )
    town = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Montréal"
    )
    province = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Québec"
    )
    country = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )

    created_at = models.DateField(auto_now = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.name


############################    PROVIDER    ######################################


class Provider(models.Model):
    # Identity
    name = models.CharField(max_length = 200, blank=False)
    email = models.EmailField(max_length = 100, blank=False)
    phone = models.CharField(max_length=50,null = True, blank = True)
    brand = models.CharField(max_length = 200)
    image = models.ImageField(
        upload_to ='uploads/images/providers',
        null = True,
        blank = True
    )

    # Full Adress of user
    street_number = models.CharField(
        max_length = 10,
        blank=True,
        null = True
    )
    street_name = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )
    postal_code = models.CharField(
        max_length=155,
        blank=True,
        null = True
    )
    metro_location = models.CharField(
        max_length=155,
        blank=True,
        null = True
    )
    town = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Montréal"
    )
    province = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Québec"
    )
    country = models.CharField(
        max_length=155,
        blank=True,
        null = True,
        default = "Canada"
    )

    created_at = models.DateField(auto_now = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.name


############################   TYPE    ###########################################

class ProductType(models.Model):
    """Model of Type of a unique product type."""

    user = models.ForeignKey(
        User,
        on_delete = models.SET_NULL,
        null = True
    )

    name = models.CharField(max_length=50)
    description = models.CharField(
        max_length=50,
        default="xxxxxx"
    )

    is_active = models.BooleanField(
        default = True,
        verbose_name = "status of type"
    )
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.name


################################   CATEGORY   ####################################

class Category(MPTTModel):
    """Category of the job."""

    user = models.ForeignKey(
        User,
        on_delete = models.SET_NULL,
        null = True
    )

    parent = TreeForeignKey(
        'self',
        blank=True,
        null=True,
        related_name="child",
        on_delete=models.CASCADE
    )

    name = models.CharField(
        max_length=155,
        blank = False,
        verbose_name = "Category Name"
    )

    description = models.CharField(
        max_length=155,
        blank = True,
        null = True,
        verbose_name = "Description",
        default="XXXXXX"
    )

    slug = AutoSlugField(
        populate_from=["name"]
    )

    thumbnail = models.ImageField(
        upload_to ='uploads/images/categories',
        null = True,
        blank = True
    )

    is_active = models.BooleanField(
        default = True,
        verbose_name = "status"
    )

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class MPTTMeta:
        order_insertion_by = ["name"]

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.name


################################   PRODUCT   ####################################

class Product(models.Model):
    """Products Model."""

    user = models.ForeignKey(
        User,
        on_delete = models.SET_NULL,
        null = True
    )

    product_type = models.ForeignKey(
        ProductType,
        on_delete=models.RESTRICT,
        related_name="productOfType",
        null=True,
        blank=True
    )

    category = models.ForeignKey(
        Category,
        related_name="productsOfCategory",
        on_delete=models.PROTECT
    )

    # Images
    qr_code = models.ImageField(
        upload_to="images/products/qr_codes",
        blank=True,
        null=True
    )

    bar_code = models.ImageField(
        upload_to="images/products/bar_codes",
        blank=True,
        null=True
    )

    # strings
    slug = AutoSlugField(
        populate_from=["name"]
    )

    name = models.CharField(max_length=50, unique=True, blank=False, null=False)
    brand = models.CharField(max_length=50, default="xxxxx" )
    code = models.CharField(max_length=50, default="xxxxx")
    reference = models.CharField(max_length=50, default="xxxxx")
    description = models.TextField(max_length=200, default="xxxxxxx")
    reviews = models.TextField(max_length=200, default =  "xxxxx")
    refund_policy = models.TextField(max_length=200, default="xxxxxx")
    wrapping_type = models.CharField(max_length=200, default="xxxxxx")

    # numbers
    stock = models.IntegerField(default=0)
    reviews_num = models.IntegerField(default=0)
    price = models.DecimalField(
        max_digits=50,
        decimal_places=2,
        default=0
    )

    shipping_rate = models.DecimalField(
        max_digits=50,
        decimal_places=2,
        default=0
    )

    rating = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        default=0
    )

    # dates
    created_at = models.DateField(auto_now = True)
    updated_at = models.DateField(auto_now = True)

    # boolean
    is_active = models.BooleanField(default = True)

    class Meta:
        ordering = ("-created_at",)
        verbose_name = ("Product")
        verbose_name_plural = ("Products")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Create qr code
        qrcode_img = qrcode.make(self.name)
        canvas = Image.new('RGB',(290,290), 'white')
        #draw = ImageDraw(canvas)
        canvas.paste(qrcode_img)
        file_name = f'qr_code-{self.name}' + '.png'
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(file_name, File(buffer), save = False)
        canvas.close()
        super().save(*args, **kwargs)


class Tag(models.Model):
    """Tag for product."""

    user = models.ForeignKey(
        User,
        on_delete = models.SET_NULL,
        null = True
    )

    product = models.ManyToManyField(
        Product,
        related_name="tagsOfProduct",
    )

    name = models.CharField(max_length=255)
    description = models.CharField(
        max_length=255,
        default = "xxxxx"
    )

    is_active = models.BooleanField(
        default = True,
        verbose_name = "status of tag"
    )

    # Dates
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.name


class ProductSpecification(models.Model):
    """Model of all specifications for a unique type of product."""

    name = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)


    def __str__(self):
        return self.name


class ProductSpecificationValue(models.Model):
    """Model of all specifications value for a unique product."""

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="specificationsvaluesOfProduct",
    )
    specification = models.ForeignKey(
        ProductSpecification,
        on_delete=models.CASCADE,
        related_name= "valuesOfSpecification",
    )

    value = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.value


#--------------------------------------------------------------------------

class ProductImage(models.Model):
    """Model of all images for a unique product."""

    product = models.ForeignKey(
        Product,
        related_name="imagesOfProduct",
        on_delete = models.SET_NULL,
        null= True
    )

    image = models.ImageField(
        upload_to ='uploads/images/products',
        verbose_name = "image of product",
        blank=False
    )

    alt_text = models.CharField(
        max_length = 50,
        default = "sample image"
    )

    is_feature = models.BooleanField(default = False)

    # dates
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Product image"
        verbose_name_plural = "Products images"


###################################   ORDER OU LIVRAISON   ####################################


class Order(models.Model):
    user = models.ForeignKey(User,
        on_delete = models.SET_NULL,
        null=True
    )

    payement_method = models.CharField(
        max_length=50,
        blank = False
    )

    status = models.CharField(
        max_length=50,
        blank = False
    )

    # Images
    qr_code = models.ImageField(
        upload_to="images/orders/qr_codes",
        null=True,
        blank=True
    )

    bar_code = models.ImageField(
        upload_to="images/orders/bar_codes",
        null=True,
        blank=True
    )

    reference = models.CharField(
        max_length=50,
        null = True,
        blank = True
    )

    # Number
    sub_total_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        blank = False
    )
    total_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        blank = False
    )

    shipping_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    coupon_rate = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    coupon_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    tax_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    is_delivered = models.BooleanField(default = False)
    is_paid = models.BooleanField(default = False)

    # Date
    paid_at = models.DateField(auto_now_add = False, null=True, blank=True)
    delivered_at = models.DateField(auto_now_add = False, null=True, blank=True)

    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)


    def __str__(self):
        return str(self.created_at)

    def save(self, *args, **kwargs):
        # Create qr code
        qrcode_img = qrcode.make(self.user)
        canvas = Image.new('RGB',(290,290), 'white')
        # draw = ImageDraw(canvas)
        canvas.paste(qrcode_img)
        file_name = f'qr_code-{self.reference}' + '.png'
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(file_name, File(buffer), save = False)
        canvas.close()
        super().save(*args, **kwargs)


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        related_name="orderItemsOf",
        on_delete = models.SET_NULL,
        null = True
    )

    product = models.ForeignKey(
        Product,
        on_delete = models.SET_NULL,
        null = True
    )

    # Strings
    name = models.CharField(max_length = 100)

    # Number
    price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    qty = models.IntegerField()

    # Date
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)


    def __str__(self):
        return self.name


class DeliveryAddress(models.Model):
    """Model to save shipping address in the db."""

    user = models.ForeignKey(User,
        on_delete = models.SET_NULL,
        null=True
    )

    order = models.OneToOneField(
        Order,
        related_name="deliveryAddressOf",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    first_name = models.CharField(max_length=150, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)
    phone_number = models.CharField(max_length=150, null=True, blank=True)
    email = models.EmailField(max_length=150, null=True, blank=True)

    town = models.CharField(max_length=150, null=True, blank=True)
    province = models.CharField(max_length=150, null=True, blank=True)
    country = models.CharField(max_length=150, null=True, blank=True)

    address = models.CharField(max_length=150, null=True, blank=True)
    zip_code = models.CharField(max_length=150, null=True, blank=True)
    unit_number = models.DecimalField(
        max_digits=50,
        decimal_places=2,
        null=True,
        blank=True
    )

    shipping_price = models.DecimalField(
        max_digits=4,
        decimal_places=2,
        null=True,
        blank=True
    )

    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.address


class BillingAddress(models.Model):
    """Model to save shipping address in the db."""

    user = models.ForeignKey(User,
        on_delete = models.SET_NULL,
        null=True
    )

    order = models.OneToOneField(
        Order,
        related_name="billingAddressOf",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    first_name = models.CharField(max_length=150, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)
    phone_number = models.CharField(max_length=150, null=True, blank=True)
    email = models.EmailField(max_length=150, null=True, blank=True)

    town = models.CharField(max_length=150, null=True, blank=True)
    province = models.CharField(max_length=150, null=True, blank=True)
    country = models.CharField(max_length=150, null=True, blank=True)

    address = models.CharField(max_length=150, null=True, blank=True)
    zip_code = models.CharField(max_length=150, null=True, blank=True)
    unit_number = models.DecimalField(
        max_digits=50,
        decimal_places=2,
        null=True,
        blank=True
    )

    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.address


#############################    Factures    #############################


class RawProduct(models.Model):
    """model of raw products."""

    # Strings
    name = models.CharField(max_length=50)

    # Images
    qr_code = models.ImageField(
        upload_to="images/rawProducts/qr_codes"
    )

    bar_code = models.ImageField(
        upload_to="images/rawProducts/bar_codes"
    )

    code = models.CharField(
        max_length=50,
        null = True,
        blank = True
    )
    reference = models.CharField(
        max_length=50,
        null = True,
        blank = True
    )

    description = models.CharField(
        max_length=200,
        null = True,
        blank = True
    )

    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)
        verbose_name = ("Raw Product")
        verbose_name_plural = ("Raw Products")

    def __str__(self):
        return self.name


class Bill(models.Model):
    user = models.ForeignKey(
        User,
        on_delete = models.
        SET_NULL,
        null = True
    )
    provider = models.ForeignKey(
        Provider,
        on_delete = models.
        SET_NULL,
        null = True
    )

    # Images
    qr_code = models.ImageField(
        upload_to="images/bills/qr_codes"
    )

    bar_code = models.ImageField(
        upload_to="images/bills/bar_codes"
    )

    # Strings
    code = models.CharField(
        max_length=50,
        null = True,
        blank = True
    )
    reference = models.CharField(
        max_length=50,
        null = True,
        blank = True
    )

    # Number
    total_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    # Date
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    register_date = models.DateField()
    is_delivered = models.BooleanField(default = False)

    def __str__(self):
        return self.reference


class BillItem(models.Model):
    bill = models.ForeignKey(
        Bill,
        related_name="billItemsOfBill",
        on_delete = models.SET_NULL,
        null = True
    )

    raw_product = models.ForeignKey(
        RawProduct,
        on_delete = models.
        SET_NULL,
        null = True
    )

    # Strings
    raw_product_name = models.CharField(max_length = 100)

    # Number
    price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    qty = models.IntegerField()

    total_price = models.DecimalField(
        max_digits=100,
        decimal_places=2,
        null = True,
        blank = True
    )

    # Dates
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    register_date = models.CharField(max_length=50)



    def __str__(self):
        return self.raw_product_name


################################   COUPON AND TAXES   #############################

class Coupon(models.Model):
    """Coupon of order"""

    name = models.CharField(
        max_length=155,
        blank = False,
        unique=True,
        verbose_name = "Coupon Name"
    )

    description = models.CharField(
        max_length=155,
        blank = True,
        null = True,
        verbose_name = "Description",
        default="XXXXXX"
    )

    is_active = models.BooleanField(
        default = True,
        verbose_name = "status"
    )

    coupon_rate = models.DecimalField(
        max_digits=5,
        blank=False,
        decimal_places=2,
        default=0
    )

    start_date = models.CharField(
        max_length=155,
        blank = False,
        verbose_name = "Start date",
        default="2023-02-27"
    )

    end_date = models.CharField(
        max_length=155,
        blank = False,
        verbose_name = "End date date",
        default="2023-02-27"
    )

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.name

class Taxe(models.Model):
    """Model of taxes applied to each order."""

    user = models.ForeignKey(User,
        on_delete = models.SET_NULL,
        null=True
    )

    name = models.CharField(
        max_length=155,
        blank = False,
        unique=True,
        verbose_name = "Taxes"
    )

    country = models.CharField(
        max_length=155,
        blank = False,
        verbose_name = "Country",
        default="Canada"
    )

    description = models.CharField(
        max_length=155,
        blank = True,
        null = True,
        verbose_name = "Description",
        default="XXXXXX"
    )

    is_active = models.BooleanField(
        default = True,
        verbose_name = "status"
    )

    taxe_percentage = models.DecimalField(
        max_digits=5,
        blank=False,
        decimal_places=2,
        default=0
    )

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.name
