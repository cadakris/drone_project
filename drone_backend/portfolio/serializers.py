from rest_framework import serializers
from .models import ProjectPost

class ProjectPostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProjectPost
        fields = ['project_title', 'image', 'video', 'description', 'project_type'] # You can specify the fields you want to include