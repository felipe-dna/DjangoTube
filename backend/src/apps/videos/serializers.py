from rest_framework import serializers

from .models import Video

class VideoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'slug', 'video_file', 'thumbnail', 'likes', 'views', 'uploaded_at', 'channel')