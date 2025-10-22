from django.urls import path
from .views import CreateAssignment, CreateStudentHome

urlpatterns = [
    path('create/',CreateAssignment.as_view(),name='task-create'),
    path('stu_home/',CreateStudentHome.as_view(),name='stu-home')
]
