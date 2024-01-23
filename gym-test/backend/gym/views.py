import json

from django.db.utils import IntegrityError
from django.http import Http404, HttpRequest, HttpResponse, JsonResponse

# Check if user is already created
from django.views.decorators.csrf import csrf_exempt

from .models import User

# from django.shortcuts import get_object_or_404, render


@csrf_exempt
def valid_credentials(request: HttpRequest):
    print("Came to here")
    try:
        send_data = json.loads(request.body.decode("utf-8"))
        # send_data = {"username": "Willem", "password": "1234"}
        print(send_data)
        # users = User.objects.values_list("username", "email")
        # print(users)
        found_user = User.objects.get(username=send_data["username"])
        print(found_user)
        json_response = JsonResponse({"response": "True"})
        print(json_response)
        return json_response
    except Exception as e:
        print(e)
        return JsonResponse({"response": "False"})


# Create a new user
@csrf_exempt
def create_user(request: HttpRequest):
    data = json.loads(request.body.decode("utf-8"))
    print(data)
    if not (
        "username" in data.keys()
        and "email" in data.keys()
        and "password" in data.keys()
    ):
        print("came to here")
        return JsonResponse({"response": "Partial data sent."})
    try:
        print("creating user")
        u = User(
            username=data["username"],
            email=data["email"],
            password=data["password"],
        )
        u.save()
        return JsonResponse(
            {"response": f"Profile for {u.username} was created successfully"},
            status=201,
        )
    except IntegrityError as e:
        print(e)
        return JsonResponse(
            {"response": "Database integrity error. Most likely username was faulty"}
        )
