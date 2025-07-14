# from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# from django.http import JsonResponse

def index(request):
    return JsonResponse({"message": "Hello, world. You're at the index."})

def about(request):
    return JsonResponse({"message": "About page content goes here."})

# def index(request):
#     print("Index view has been accessed.")  # This message will appear in the console
#     return HttpResponse("Welcome to the index page!")  # Display a simple message in the browser

# def about(request):
#     print("About view has been accessed.")  # This message will appear in the console
#     return HttpResponse("This is the about page!")  # Display a simple message in the browser


def project_posts_list(request):
    # Query all ProjectPost objects
    project_posts = list(ProjectPost.objects.values(
        'project_title_en', 'project_title_fr', 'video', 'description_en', 'description_fr','project_type'
    ))
    if not project_posts:
        print("No data found in ProjectPost.")
    return JsonResponse(project_posts, safe=False)