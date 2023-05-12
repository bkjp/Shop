import os
from pathlib import Path
from datetime import timedelta


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'changeme-for-production')
DEBUG = os.environ.get('DJANGO_DEBUG', False)


ALLOWED_HOSTS = []
ALLOWED_HOSTS.extend(
    filter(
        None,
        os.environ.get('ALLOWED_HOSTS', '').split(' '),
    )
)

# The split means that when you'll write your different ALLOWED_HOSTS you must
# separate them by a comma "," without space. like this
# DJANGO_ALLOWED_HOSTS=localhost,0.0.0.0
# If you remove "," inside split and have something like this split(""), you'll
# separate your different ALLOWED_HOSTS by a spce like this
# DJANGO_ALLOWED_HOSTS=localhost 0.0.0.0

#---------------------------------------------------------------------------------

# Django applications
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# Third party apps
THIRD_PARTY_APPS = [
    "corsheaders",
    'django_filters',
    'storages',
    'mptt',
    'django_extensions',
    'graphene_django',
    'graphql_jwt.refresh_token.apps.RefreshTokenConfig',
    #'graphql_auth',
]

# local apps
LOCAL_APPS = [
    'core',
]

# Applications definition
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

#-------------------------------------------------------------------------------

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'appconf.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'appconf.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': os.environ.get("DB_ENGINE"),
        'HOST': os.environ.get('DB_HOST'),
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASS'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'




#######################################################################################
################################   CUSTOM CONFIGURATIONS  #############################
AUTH_USER_MODEL = 'core.User'

#ADMIN_URL = os.environ.get('ADMIN_URL')
ADMIN_URL = "secret/"

# Email configurations
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587 # use 465 if EMAIL_USE_SSL = True
EMAIL_HOST_USER = "jbetfiendev@gmail.com"
EMAIL_HOST_PASSWORD = "hxbqngkxgignonyp"
EMAIL_USE_TLS = True
# EMAIL_USE_SSL = False

# EMAIL_TIMEOUT =
# EMAIL_SSL_KEYFILE =
# EMAIL_SSL_CERTFILE =
# APPLICATION_EMAIL =
# DEFAULT_FROM_EMAIL =
# RECIPIENTS_ADDRESS =


# Caching configurations and connection with caching service container
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redis:6379/",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient"
        },
    }
}


STATIC_URL = '/django_static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
MEDIA_URL = '/django_media/'
MEDIA_ROOT = BASE_DIR / 'mediafiles'


AUTHENTICATION_BACKENDS = [
    #'graphql_auth.backends.GraphQLAuthBackend',
    'graphql_jwt.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]

GRAPHENE = {
    "SCHEMA": "core.schema.schema",
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}

GRAPHQL_JWT = {
    "JWT_VERIFY_EXPIRATION": True,
    "JWT_LONG_RUNNING_REFRESH_TOKEN": True,
    "JWT_EXPIRATION_DELTA": timedelta(minutes=60),
    "JWT_REFRESH_EXPIRATION_DELTA": timedelta(days=7),
    "JWT_REFRESH_EXPIRED_HANDLER": lambda orig_iat, context: False,
    #'JWT_PAYLOAD_HANDLER': 'core.utils.jwt_payload',
    # 'JWT_AUTH_HEADER_PREFIX': 'Bearer',
    #'JWT_SECRET_KEY': os.environ['DJANGO_SECRET'],
    #'JWT_ALGORITHM': 'HS256',
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://frontend:3000",
]

# CORS_ORIGIN_WHITELIST = (
#     'http://localhost',
#     'http://localhost:3000',
# )

