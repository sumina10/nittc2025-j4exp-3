from django.urls import path
from .views import CreateAssignment, StudentAssignmentView

urlpatterns = [
    path('create/',CreateAssignment.as_view(),name='task-create'),
    path('stu_home/',StudentAssignmentView.as_view(),name='stu-home')
]
