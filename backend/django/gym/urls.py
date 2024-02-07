from django.urls import path

from . import views

urlpatterns = [
    path("login", views.valid_credentials, name="login"),
    path("register", views.create_user, name="register"),
    path("new-template", views.create_new_template, name="new-template"),
    path("templates", views.get_templates, name="templates"),
]
