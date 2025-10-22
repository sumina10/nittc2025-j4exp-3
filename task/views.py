from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.core.exceptions import PermissionDenied
from accounts.models import Teacher, Student
from .models import Assignment, Course, ClassRoom
from .forms import AssignmentForm


# Create your views here.

class CreateAssignment(LoginRequiredMixin, CreateView):
    model = Assignment
    form_class = AssignmentForm
    template_name = "task/registration.html"

    success_url = reverse_lazy('task-create') # 'task-create'はリダイレクト先のURLパターン名

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def form_valid(self, form):
        form.instance.student = self.request.user
        # form.instance.due_date = timezone.now()
    
        combined_data = form.cleaned_data.copy()
        combined_data['student'] = form.instance.student
        # combined_data['due_date'] = form.instance.due_date
        return super().form_valid(form)

class StudentAssignmentView(LoginRequiredMixin, PermissionRequiredMixin, ListView): #StudentAssignmentViewがListViewとLoginRequiredMixinを継承
    model = Assignment
    template_name = "task/student_home.html"
    permission_required = 'task.view_assignment'  # 必要な権限を指定

    def get_queryset(self):
        queryset = super().get_queryset() # ListViewに則ってget_querysetを実行
        return queryset.filter(student = self.request.user) # 返してくれた情報をもとに今ログインしている人の情報のみを返す
    
class TeacherAssignmentView(LoginRequiredMixin, PermissionRequiredMixin, ListView): #TeacherAssignmentViewがListViewとLoginRequiredMixinを継承
    model = Assignment
    template_name = "task/teacher_home.html"
    permission_required = 'task.view_student_assignment'  # 必要な権限を指定

    def get_queryset(self):
        if not self.request.user.is_teacher:
            raise PermissionDenied
        
        # 担当しているコースまたはクラスルームの学生を取得
        # コース経由で学生を取得する場合: course -> classroom -> students
        students = Student.objects.filter(
            Q(classrooms_students__courses__teachers=self.request.user) | 
            Q(classrooms_students__teachers=self.request.user)
        ).distinct()
        
        # 担当している学生の課題を返す
        return super().get_queryset().filter(student__in=students)
