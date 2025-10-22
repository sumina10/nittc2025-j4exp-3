from django.urls import path
from .views import CreateAssignment, StudentAssignmentView, TeacherAssignmentView

urlpatterns = [
    path('create/',CreateAssignment.as_view(),name='task-create'),
    path('student_home/',StudentAssignmentView.as_view(),name='student-home'),
    path('teacher_home/',TeacherAssignmentView.as_view(),name='teacher-home'),
]
