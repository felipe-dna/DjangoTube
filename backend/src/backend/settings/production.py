from .base import *

DEBUG = False

ALLOWED_HOSTS = []

CACHES = {}

# Banco de Dados.
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'database-name',
        'USER': 'database-user',
        'PASSWORD': 'database-password',
        'HOST': 'host',
        'PORT': 'port',
    }
}

# IMPORTANTE: utilize variáveis ambiente nas configurações do banco de dados.