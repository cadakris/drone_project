from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ProjectPost
from .serializers import ProjectPostSerializer
from django.core.mail import send_mail
from django.conf import settings


class ProjectPostListView(APIView):
    def get(self, request):
        project_posts = ProjectPost.objects.all()
        serializer = ProjectPostSerializer(project_posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ContactFormView(APIView):
    def post(self, request):
        name=request.data.get('name')
        email=request.data.get('email')
        message=request.data.get('message')

        if not all([name, email, message]):
            return Response({"Error":"All fields are required."}, status=status.HTTP_400_BAD_REQUEST)
        
        full_message = f"Message from {name} ({email}):\n\n{message}"

        send_mail(
            subject='New Contact Message',
            message=full_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['kriscadacio@gmail.com'],  # Update this to your client's email
            fail_silently=False
        )

        return Response({"success":"Message sent successfully!"}, status=status.HTTP_200_OK)