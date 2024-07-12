from django.db import models

class Post (models.Model):
    title = models.CharField(max_length=20)
    text = models.TextField(blank=True)
# Create your models here.
