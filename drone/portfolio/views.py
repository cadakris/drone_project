from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from django.http import JsonResponse

def index(request):
    return JsonResponse({"message": "Hello, world. You're at the index."})

def about(request):
    return JsonResponse({"message": "About page content goes here."})
