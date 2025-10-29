from django.urls import path
from .views import CreateAssignment, StudentAssignmentView, StudentAssignmentEditView, TeacherAssignmentView

urlpatterns = [
    path('student_home/create/',CreateAssignment.as_view(),name='task-create'),
    path('student_home/',StudentAssignmentView.as_view(),name='student-home'),
    path('student_home/<int:pk>/', StudentAssignmentEditView.as_view(), name='student-assignment-edit'),
    path('teacher_home/',TeacherAssignmentView.as_view(),name='teacher-home'),
]
