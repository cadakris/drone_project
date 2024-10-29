from django.urls import path
from . import views
from .api import project_post_list #import your API view

urlpatterns = [
    path('', views.index, name='index'),  # This maps the empty path '' to the index view
    path('about/', views.about, name='about'),
    path('api/project-posts/', project_post_list, name='project-posts')  # API endpoint
]