from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ProjectPost
from .serializers import ProjectPostSerializer


class ProjectPostListView(APIView):
    def get(self, request):
        project_posts = ProjectPost.objects.all()
        serializer = ProjectPostSerializer(project_posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)