from django.shortcuts import render
from django.urls import reverse_lazy

from django.views.decorators.http import require_POST

from .models import Video
from .forms import VideoUploadForm



# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
def watchVideo(request, pk):
    template_name = 'videos/watch-video.html' 
    
    # find the video
    video = Video.objects.get(id=pk)

    # add 1 more views to him
    video.views += 1
    video.save()

    context = {"video": video}
    
    return render(request, template_name, context)


def likeVideo(request, pk):

    video_instance = Video.objects.get(pk=pk)
    
    video_instance.likes += 1
    video_instance.save()

    return reverse_lazy("watchVideo", kwargs={"pk":pk})

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# => root/videos/upload/
def uploadVideo(request):
    template_name = 'upload-video.html'
    context = {}
    
    # formulário enviado
    if request.method == "POST":
        name = request.POST["name"]
        video = request.FILES["video"]

        if name and video:
            new_video = Video(
                name=name, video=video
            )

            new_video.save()

            success_message = "Video upado com sucesso"
            context["success_message"] = success_message
        
        else:
            error_message = "Aconteceu um erro, tente novamente"
            context["error_message"] = error_message


    return render(request, template_name, context)

