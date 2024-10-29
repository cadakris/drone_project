from django.shortcuts import render
from django.http import HttpResponse
# from django.http import JsonResponse

# from django.http import JsonResponse

# def index(request):
#     return JsonResponse({"message": "Hello, world. You're at the index."})

# def about(request):
#     return JsonResponse({"message": "About page content goes here."})

def index(request):
    print("Index view has been accessed.")  # This message will appear in the console
    return HttpResponse("Welcome to the index page!")  # Display a simple message in the browser

def about(request):
    print("About view has been accessed.")  # This message will appear in the console
    return HttpResponse("This is the about page!")  # Display a simple message in the browser