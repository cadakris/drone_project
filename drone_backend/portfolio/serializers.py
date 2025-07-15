from rest_framework import serializers
from .models import ProjectPost
from .models import About
from .models import Services

class ProjectPostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProjectPost
        fields = ['id','project_title_en', 'project_title_fr', 'video', 'description_en', 'description_fr','project_type']

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ['id','tagline_en', 'tagline_fr', 'large_description_en','large_description_fr']

class ServicesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Services
        fields = ['id','image', 'title_en', 'title_fr', 'description_en,', 'description_fr']
        