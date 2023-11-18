from django.http import Http404, HttpResponse
from django.shortcuts import render

from .models import Question


# Create your views here.
def index(request):
    return HttpResponse("Hello mom! You're at the polls index.")


def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        print("Question does not exist")
        raise Http404("Question does not exist")

    """
    Alternatively:
    from django.shortcuts import get_object_or_404
    
    question = get_object_or_404(Question, pk=question_id)
    """
    return HttpResponse("You're looking at question: %s." % question)


def results(request, question_id):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    output = ", ".join([q.question_text for q in latest_question_list])
    response = "Results for Question %d: %s"
    return HttpResponse(response % (question_id, output))


def vote(request, question_id):
    return HttpResponse("You're voting on question %d." % question_id)


def list_views(request):
    string = "<ul>"
    for i in range(8):
        string += f"<li>My item {i}</li>"
    string += "</ul"
    return HttpResponse(string)
