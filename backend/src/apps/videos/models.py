import uuid

from django.db import models
from django.utils.text import slugify

""" retorna o diretório onde o vídeo deve ser salvo """
def get_video_path(instance, filename):
    url = "{}/videos/{}/video/{}".format(
        instance.channel, instance.id, filename
    )

    return url


""" retorna o diretório onde a thumb do vídeo deve ser salva  """
def get_thumb_path(instance, filename):
    url = "{}/videos/{}/thumbnail/{}".format(
        instance.channel, instance.id, filename
    )

    return url


class Video(models.Model):
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    slug        = models.SlugField(unique=True, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    # Todo: adicionar a que canal pertence
    channel     = models.CharField(max_length=100)

    title       = models.CharField(max_length=100)
    description = models.TextField(max_length=500)

    # file
    video_file = models.FileField(upload_to=get_video_path)

    # thumnail
    thumbnail  = models.ImageField(upload_to=get_thumb_path)

    likes      = models.IntegerField(default=0)
    views      = models.IntegerField(default=0)


    # chamado ao salvar uma nova instância
    def save(self, *args, **kwargs):
        # preenche o campo "slug"
        self.slug = slugify(self.title)

        return super(Video, self).save(*args, **kwargs)

    
    # retorna o nome do model
    def __str__(self):
        instance_string = "{} upado em {} por {}.".format(
            self.name, self.uploaded_at, self.channel
        )

