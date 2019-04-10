from django.urls import path
from . import views

app_name = "videos"

urlpatterns = [
    path('<uuid:pk>/', views.watchVideo, name="watch"),
    path('<uuid:pk>/like/', views.likeVideo, name="leave-like"),
    path('upload/', views.uploadVideo, name="upload"),
]