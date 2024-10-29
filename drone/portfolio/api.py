from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ProjectPost
from .serializers import ProjectPostSerializer 

@api_view(['GET'])
def project_post_list(request):
    posts = ProjectPost.objects.all() #fetch all posts
    serializer = ProjectPostSerializer(posts, many = True) #Serialize the data
    return Response(serializer.data) #Return JSON Response