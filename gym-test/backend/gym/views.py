from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404, render

from .models import User


# Check if user is already created
def is_user(request: HttpRequest, username: str):
    try:
        found_user = User.objects.get(username=username)
        return HttpResponse("True")
    except:
        return HttpResponse("False")


# Create a new user
def create_user(request: HttpRequest, username: str, password: str):
    u = User(username=username, password=password)
    u.save()
    return HttpResponse("Success")
