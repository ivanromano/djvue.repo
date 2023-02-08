from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer

# Create your views here.
class BlogListView(APIView):
  def get(self, request, *args, **kwargs):
    posts = Post.postobjects.all()
    serializer = PostSerializer(posts,many=True)
    return Response(serializer.data)