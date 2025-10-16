from django.urls import path,include
from .views import CreateAssignment
from .views import CreateStudentHome

urlpatterns = [
    path('create/',CreateAssignment.as_view(),name='task-create'),
    path('stu_home/',CreateStudentHome.as_view(),name='stu-home')
]
