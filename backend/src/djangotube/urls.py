from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    # home 
    path('', include('apps.core.urls', namespace='core')),
    
    # channels
    path('', include('apps.channels.urls', namespace='channels')),
    
    # videos
    path('watch/', include('apps.videos.urls', namespace='videos')),

    # apps

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