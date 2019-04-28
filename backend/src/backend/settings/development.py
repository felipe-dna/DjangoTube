# contém as configurações de pertinentes ao ambiente de desenvolvimento.

from .base import *

DEBUG = True

INSTALLED_APPS += []

MIDDLEWARE += []

ALLOWED_HOSTS = ["*"]

# Django Cors Headers settings
CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = ()


# Banco de Dados.
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}