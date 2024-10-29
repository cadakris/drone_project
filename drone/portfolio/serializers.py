from rest_framework import serializers
from .models import ProjectPost

class ProjectPostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProjectPost
        fields = '_all_' # You can specify the fields you want to include