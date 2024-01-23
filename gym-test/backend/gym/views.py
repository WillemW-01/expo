import json

from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404, render

from .models import User


# Check if user is already created
def valid_credentials(request: HttpRequest):
    try:
        # send_data = json.load(open(str(request.body)))
        send_data = {"username": "Willem", "password": "1234"}
        print(send_data)
        users = User.objects.values_list("username", "email")
        print(users)
        found_user = User.objects.get(username="Willem")
        print(found_user)
        return HttpResponse("True")
    except Exception as e:
        print(e)
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
