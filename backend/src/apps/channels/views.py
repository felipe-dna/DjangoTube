from django.shortcuts import render

from django.views.generic import DetailView



class ChannelDetailView(DetailView):
    template_name = 'channels/channel-detail.html'