import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Channel(models.Model):
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner       = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name="Dono")
    name        = models.CharField(max_length=200, verbose_name="Nome")
    created_at  = models.DateTimeField(auto_now_add=True, verbose_name="Data de Criação")


    # returns the channel owner
    def get_channel_author(self):
        return self.owner


    def __str__(self):
        return self.name

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# class ChannelProfile(models.Model):
#     id         = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     channel    = models.OneToOneField(Channel, on_delete=models.CASCADE)

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Subscription(models.Model):
    id            = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    subscriber    = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Inscrito") 
    channel       = models.ForeignKey(Channel, on_delete=models.CASCADE, verbose_name="Canal")
    subscribed_at = models.DateTimeField(auto_now_add=True, verbose_name="Data de inscrição")

    def __str__(self):
        return "{} inscrito em {} desde {}".format(
            self.subscriber, self.channel, self.subscribed_at
        )
        