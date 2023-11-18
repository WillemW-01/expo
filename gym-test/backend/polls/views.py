from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    return HttpResponse("Hello mom! You're at the polls index.")


def list_views(request):
    string = "<ul>"
    for i in range(8):
        string += f"<li>My item {i}</li>"
    string += "</ul"
    return HttpResponse(string)
