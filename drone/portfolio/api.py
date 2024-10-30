from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ProjectPost
from .serializers import ProjectPostSerializer 

@api_view(['GET'])
def project_post_list(request):
    print("API view called")
    posts = ProjectPost.objects.all() #fetch all posts
    if not posts.exists():
        return Response({"message": "No project posts found."}, status=404)
    serializer = ProjectPostSerializer(posts, many=True)
    print("Data to be returned:", serializer.data)  # Debug line
    return Response(serializer.data)






    # serializer = ProjectPostSerializer(posts, many = True) #Serialize the data
    # return Response(serializer.data) #Return JSON Response