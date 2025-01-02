from django.db import models
from django.http import JsonResponse
# from .models import ProjectPost

# Create your models here.

class ProjectPost(models.Model):
    PROJECT_TYPE_CHOICES = [
        ('FPV', 'FPV'),
        ('SD', 'SD'),
    ]

    project_title = models.TextField(max_length=50, default="Drone Project")
    image = models.ImageField(upload_to='project_images/')
    video = models.URLField(blank=True, null=True)
    description = models.TextField()
    project_type = models.CharField(max_length=3, choices=PROJECT_TYPE_CHOICES)

    def __str__(self):
        return self.project_title


class About(models.Model):
    title = models.CharField(max_length=500)
    image = models.ImageField(upload_to='about_images/')
    description = models.TextField()

    def __str__(self):
        return self.title

# def project_posts_list(request):
#     # Query all ProjectPost objects and convert to a list of dictionaries
#     project_posts = list(ProjectPost.objects.values(
#         'project_title', 'image', 'video', 'description', 'project_type'
#     ))
#     return JsonResponse(project_posts, safe=False)  # Return as JSON