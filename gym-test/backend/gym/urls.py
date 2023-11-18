from django.urls import path

from . import views

urlpatterns = [
    path("login/<str:username>", views.is_user, name="login"),
    path("register/<str:username>_<str:password>", views.create_user, name="register"),
]
