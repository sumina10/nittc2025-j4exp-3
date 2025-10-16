from django.urls import path, include
from .views import template_test, AuthorCreateView

urlpatterns = [
    path("mine/", AuthorCreateView.as_view(), name="my-view"),
]