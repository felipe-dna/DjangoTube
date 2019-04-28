from django.shortcuts import render

from rest_framework import viewsets

from .models import Video
from .serializers import VideoSerializer


class VideoViewSet(viewsets.ModelViewSet):
    # API endpoint that allows videos to be viewed or edited
    queryset = Video.objects.all().order_by('-uploaded_at')
    serializer_class = VideoSerializer
