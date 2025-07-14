from django.db import models
from django.http import JsonResponse
# from .models import ProjectPost

# Create your models here.

class ProjectPost(models.Model):
    PROJECT_TYPE_CHOICES = [
        ('FPV', 'FPV'),
        ('SD', 'SD'),
    ]

    project_title_en = models.CharField("Title (EN)", max_length=50, default="Title goes here")
    project_title_fr = models.CharField("Title (FR)", max_length=50, blank=True, null=True)
    video = models.URLField(blank=True, null=True)
    description_en = models.TextField("Description (EN)", default="Description goes here")
    description_fr = models.TextField("Description (FR)", blank=True, null=True)
    project_type = models.CharField(max_length=3, choices=PROJECT_TYPE_CHOICES)

    def __str__(self):
        return self.project_title_en

1
class About(models.Model):
    tagline_en = models.CharField(default="Tagline goes here")
    tagline_fr = models.CharField(blank=True, null=True)
    large_description_en = models.TextField(default="Description goes here")
    large_description_fr = models.TextField(blank=True, null=True)



class Services(models.Model):
    image = models.URLField(blank=True, null=True)
    title_en = models.CharField(max_length=50)
    title_fr = models.CharField(max_length=50, blank=True, null=True)
    description_en = models.TextField(default="Description goes here")
    description_fr = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title_en


# def project_posts_list(request):
#     # Query all ProjectPost objects and convert to a list of dictionaries
#     project_posts = list(ProjectPost.objects.values(
#         'project_title', 'image', 'video', 'description', 'project_type'
#     ))
#     return JsonResponse(project_posts, safe=False)  # Return as JSON