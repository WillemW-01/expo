import json

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
def create_user(request: HttpRequest):
    data = json.load(request.body)
    if not (
        "username" in data.keys() or "email" in data.keys() or "password" in data.keys()
    ):
        return Http404("Partial data sent.")

    u = User(username=data["username"], email=data["email"], password=data["password"])
    u.save()
    return HttpResponse(
        f"Profile for {u.username} was created successfully", status=201
    )
