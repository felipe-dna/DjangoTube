# Generated by Django 2.2 on 2019-04-07 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
