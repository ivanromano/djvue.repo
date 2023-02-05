from django.urls import path
from .views import BlogListView
app_name='blog'

urlpatterns = [
    path('posts/', BlogListView.as_view()),
]