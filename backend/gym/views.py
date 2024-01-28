import json

from django.db.utils import IntegrityError
from django.http import Http404, HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import User


@csrf_exempt
def valid_credentials(request: HttpRequest):
    try:
        send_data = json.loads(request.body.decode("utf-8"))
        found_user = User.objects.get(username=send_data["username"])
        return HttpResponse("Correct login details.", status=201)
    except Exception as e:
        print(e)
        return HttpResponse("Incorrect login details.", status=401)


# Create a new user
@csrf_exempt
def create_user(request: HttpRequest):
    data = json.loads(request.body.decode("utf-8"))

    partial_data_recevied = not (
        "username" in data.keys()
        and "email" in data.keys()
        and "password" in data.keys()
    ) or any(
        [
            ("username" in data.keys() and data["username"] == ""),
            ("email" in data.keys() and data["email"] == ""),
            ("password" in data.keys() and data["password"] == ""),
        ]
    )
    if partial_data_recevied:
        return HttpResponse("Partial data sent.", status=401)
    try:
        u = User(
            username=data["username"],
            email=data["email"],
            password=data["password"],
        )
        u.save()
        return HttpResponse(
            "Profile for {u.username} was created successfully",
            status=201,
        )
    except IntegrityError as e:
        print(e)
        return HttpResponse(
            "User already exists.",
            status=401,
        )
