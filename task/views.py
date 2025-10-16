from django.shortcuts import render

# Create your views here.

def template_test(request):
    return render(
        request,
        "task/base.html"
    )