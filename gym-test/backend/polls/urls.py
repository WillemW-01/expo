from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:question_id>/", views.detail, name="question detail"),
    path("<int:question_id>/results/", views.results, name="question result"),
    path("<int:question_id>/vote/", views.vote, name="vote question"),
]
