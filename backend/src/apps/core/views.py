from django.shortcuts import render
from apps.videos.models import Video


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
def home(request):
    template_name = "core/home.html"
    context = {}

    context['video_list'] = Video.objects.all()
    for video in Video.objects.all():
        print(video.thumbnail.url)

    return render(request, template_name, context)