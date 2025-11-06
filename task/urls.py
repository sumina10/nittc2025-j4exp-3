from django.urls import path
from .views import CreateAssignment, StudentAssignmentView, StudentAssignmentEditView, StudentNotifyView, TeacherAssignmentView, TeacherLogView, TeacherReminderCreateView

urlpatterns = [
    path('student_home/create/',CreateAssignment.as_view(),name='task-create'),
    path('student_home/',StudentAssignmentView.as_view(),name='student-home'),
    path('student_home/<int:pk>/', StudentAssignmentEditView.as_view(), name='student-assignment-edit'),
    path('student_home/notify/', StudentNotifyView.as_view(), name='student-notify'),
    path('teacher_home/',TeacherAssignmentView.as_view(),name='teacher-home'),
    path('teacher_home/log/', TeacherLogView.as_view(), name='teacher-log'),
    path('teacher_home/reminder/', TeacherReminderCreateView.as_view(), name='teacher-reminder'),
]
