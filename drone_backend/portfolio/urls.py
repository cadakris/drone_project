from django.urls import path
from .views import ProjectPostListView
from .views import ContactFormView

urlpatterns = [
    # path('', IndexView.as_view(), name='index'),
    # path('about/', AboutView.as_view(), name='about'),
    path('project-posts/', ProjectPostListView.as_view(), name='project-posts'),
    path('contact/', ContactFormView.as_view(), name='contact-api'),
]