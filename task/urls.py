from django.urls import path,include
from .views import CreateAssignment

urlpatterns = [
    path('create/',CreateAssignment.as_view(),name='task-create')
]
