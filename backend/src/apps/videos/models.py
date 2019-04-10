import uuid
from django.db import models
from django.utils.text import slugify

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

from apps.channels.models import Channel

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
def video_path(instance, filename):
    """ retorna o caminho para salvar o vídeo """
    # channels/<nome-do-canal>/videos/<id-do-video>/thumbanil/<arquivo> 
    return "{}/videos/{}/video/{}".format(     
            instance.channel,
            instance.id,
            filename
        )

def thumb_path(instance, filename):
    """ retorna o caminho para salvar a thumbnail do video """
    # channels/<nome-do-canal>/videos/<id-do-video>/thumbanil/<arquivo> 
    return "{}/videos/{}/thumbanil/{}".format(   
            instance.channel,
            instance.id,
            filename
        )



class Video(models.Model):
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    slug        = models.SlugField(unique=True, blank=True, null=True)
    
    # channel
    channel     = models.ForeignKey(Channel, on_delete=models.CASCADE)

    # video details
    name        = models.CharField(max_length=100, verbose_name="Nome")
    description = models.TextField(max_length=500, verbose_name="Descrição")

    # video file
    video_file  = models.FileField(upload_to=video_path, verbose_name="Arquivo de vídeo")

    # thumbnail
    video_thumb = models.ImageField(upload_to=thumb_path, verbose_name="Capa do vídeo")
    thumbnail = ImageSpecField(
                            source='video_thumb',
                            processors=[ResizeToFill(300, 200)],
                            format='JPEG',
                            options={'quality': 60}
    )

    # video after details
    likes       = models.IntegerField(default=0)
    views       = models.IntegerField(default=0)

    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name="Upload feito em")


    # returns an slugfied field
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        
        self.video_file.upload_to = "videos/{}/videos/{}/video/".format(
            self.channel,
            self.name
        )

        self.video_thumb.upload_to = "videos/{}/videos/{}/thumnail/".format(
            self.channel,
            self.name
        )

        super(Video, self).save(*args, **kwargs)


    def __str__(self):
        return '{} upado em {} por {}'.format(
                                            self.name, 
                                            self.uploaded_at, 
                                            self.channel
        )

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 