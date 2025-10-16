from django.urls import path, include
from .views import template_test

urlpatterns = [
    path('', template_test)
]