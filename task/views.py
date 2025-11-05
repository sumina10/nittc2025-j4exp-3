from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q
from django.core.exceptions import PermissionDenied
from accounts.mixins import StudentRequiredMixin, TeacherRequiredMixin
from .models import Assignment, Course
from .forms import AssignmentCreateForm, AssignmentEditForm


# Create your views here.

class CreateAssignment(LoginRequiredMixin, StudentRequiredMixin, CreateView):
    model = Assignment
    form_class = AssignmentCreateForm
    template_name = "task/registration.html"

    success_url = reverse_lazy('task-create') # 'task-create'はリダイレクト先のURLパターン名

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def form_valid(self, form):
        form.instance.student = self.request.user
        combined_data = form.cleaned_data.copy()
        combined_data['student'] = form.instance.student
        return super().form_valid(form)

class StudentAssignmentView(LoginRequiredMixin, StudentRequiredMixin, ListView): #StudentAssignmentViewがListViewとLoginRequiredMixinを継承
    model = Assignment
    template_name = "task/student_home.html"

    def get_queryset(self):
        return super().get_queryset().filter(student=self.request.user)
    
class StudentAssignmentEditView(LoginRequiredMixin, StudentRequiredMixin, UpdateView):
    model = Assignment
    form_class = AssignmentEditForm
    template_name = "task/assignment_edit.html"
    success_url = reverse_lazy('student-home')

    def get_object(self, queryset=None):
        assignment = super().get_object(queryset)
        if assignment.student != self.request.user:
            raise PermissionDenied
        return assignment

class TeacherAssignmentView(LoginRequiredMixin, TeacherRequiredMixin, ListView): #TeacherAssignmentViewがListViewとLoginRequiredMixinを継承
    model = Assignment
    template_name = "task/teacher_home.html"

    def get_queryset(self):
        if not self.request.user.is_teacher:
            raise PermissionDenied
        
        # 担当しているコースまたはクラスルームの学生を取得
        # 所属しているクラス 所属しているコース T
        # 所属していないクラス 所属しているコース T
        # 所属しているクラス 所属していないコース T
        # 所属していないクラス 所属していないコース F

        courses = Course.objects.filter(
            Q(teachers=self.request.user) |
            Q(classroom__teachers=self.request.user)
        ).distinct()
        
        # 担当している学生の課題を返す
        return super().get_queryset().filter(course__in=courses)
