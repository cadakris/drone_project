from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # This maps the empty path '' to the index view
]