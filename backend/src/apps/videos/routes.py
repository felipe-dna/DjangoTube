from rest_framework import routers

from .views import VideoViewSet


# router
router = routers.DefaultRouter()


# registro de rotas
router.register('videos', VideoViewSet)