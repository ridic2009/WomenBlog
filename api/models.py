from typing import Iterable
from django.db import models
from django.template.defaultfilters import slugify
from django.db.models.signals import pre_save
from django.dispatch import receiver



class Post(models.Model):
    title = models.CharField(max_length=20)
    slug = models.SlugField(blank=True, null=True)
    text = models.TextField(blank=True)
    

    def __str__(self):
        return self.title
    
    def create_slug(instance, save=False):
        slug = slugify(instance.title)
        queryset = Post.objects.filter(slug=slug).exclude(id=instance.id)
        if queryset.exists():
            slug = f"{slug}-{queryset.count() + 1}"
        instance.slug = slug
        if save:
            instance.save()
        return instance

@receiver(pre_save, sender=Post)
def post_pre_save(sender, instance, *args, **kwargs):
    if instance.slug is None:
        instance.create_slug(save=False)

      
        
