from django.db import models

# Create your models here.

class ProjectPost(models.Model):
    PROJECT_TYPE_CHOICES = [
        ('FPV', 'FPV'),
        ('DJI', 'DJI'),
    ]

    project_title = models.CharField(max_length=300)
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
