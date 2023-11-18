from django.urls import path

from . import views

urlpatterns = [
    path("login/<str:username>", views.is_user, name="login"),
    path("register/", views.create_user, name="register"),
]
