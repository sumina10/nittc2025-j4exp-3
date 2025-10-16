from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from .models import Assignment

# Create your views here.

class Assignment(CreateView):
    model = Assignment
    fields = ["title","description"]
    template_name = "templates/task/teketou.html"
