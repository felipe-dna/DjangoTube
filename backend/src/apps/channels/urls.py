from django.urls import path
from . import views as channels

app_name = "channels"

urlpatterns = [
    path("<int:id>/", channels.ChannelDetailView.as_view(), name="channel-detail"),
    # path("")
]


"""
views and urls and actions {

    => www.DjangoTube.com/channels/<id>/ {
        - profile do canal
        - ChannelDetailView
    }


    => www.djangotube.com/channels/<id>/videos/ {
        - todos os videos
    }

}

"""