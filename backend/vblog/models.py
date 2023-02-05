from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from PIL import Image
from django.conf import settings
from django.core.files import File
from io import BytesIO

def user_directory_path(instance, filename):
  return 'blog/{0}/{1}'.format(instance.title, filename)

# ! Post
class Post(models.Model):

  class PostObjects(models.Manager):
    def get_queryset(self):
      return super().get_queryset()

  title = models.CharField(max_length=255)
  thumbnail = models.ImageField(upload_to='uploads/', blank=True, null=True)
  excerpt = models.TextField(null=True)
  content = models.TextField()
  slug = models.SlugField(max_length=255, null=False, unique=True)
  published = models.DateTimeField(default=timezone.now)
  objects = models.Manager
  postobjects = PostObjects()
 
  class Meta:
    ordering = ('published', )

  def __str__(self):
    return self.title



  def get_thumnail(self):
    if self.thumbnail:
      return 'http://127.0.0.1:8000' + self.thumbnail.url

















