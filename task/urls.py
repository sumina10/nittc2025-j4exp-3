from django.urls import path
from .views import template_test

urlpatterns = [
    path('', template_test)
]