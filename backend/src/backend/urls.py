from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

# rest framework
from rest_framework import routers

# routers
from apps.videos.routes import router as videoRouter

urlpatterns = [
    # app admin
    path('admin/', admin.site.urls),

    # api
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(videoRouter.urls))
]


if settings.DEBUG:

    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )

    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )