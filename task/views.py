from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from .models import Assignment

class AuthorCreateView(CreateView):
    model =  Assignment
    fields = ["title"]
    template_name = "task/base.html"



def template_test(request):
    return render(
        request,
        "task/base.html"
    )