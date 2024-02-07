import json

from django.core import serializers
from django.db.utils import IntegrityError
from django.http import Http404, HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Exercises, Templates, User


def load_from_body(request: HttpRequest) -> dict:
    return json.loads(request.body.decode("utf-8"))


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


@csrf_exempt
def create_new_template(request: HttpRequest):
    print("Got request!")
    data = load_from_body(request)
    print(data)

    try:
        template = Templates(name=data["title"], description=data["description"])
        template.save()

        exercises = []
        # link exercises to the new template
        for item in data["selection"]:
            print(f"Finding id for {item}")
            temp_exercise = Exercises.objects.get(name=item)
            exercises.append(temp_exercise)

        template.exercises.add(*exercises)
        template.save()
        print(f"Saved new template with id {template.template_id}")

        return HttpResponse("Return to you", status=201)
    except Exception as e:
        print(e)
        return HttpResponse(e, status=401)


@csrf_exempt
def get_templates(request: HttpRequest):
    data = []

    templates = Templates.objects.all()
    for template in templates:
        temp_item = {}
        temp_item["name"] = template.name
        temp_item["description"] = template.description
        temp_item["lastPerformed"] = template.lastPerformed
        exercises = template.exercises.fields
        # TODO: get the exercises in the right format
        temp_item["exercises"] = serializers.serialize("json", exercises)
        data.append(temp_item)

    print(data)
