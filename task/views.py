from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.core.exceptions import PermissionDenied
from accounts.models import Teacher, Student
from accounts.mixins import StudentRequiredMixin, TeacherRequiredMixin
from .models import Assignment, Course, ClassRoom
from .forms import AssignmentCreateForm, AssignmentEditForm
from auditlog.models import LogEntry


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
        # form.instance.due_date = timezone.now()
    
        combined_data = form.cleaned_data.copy()
        combined_data['student'] = form.instance.student
        # combined_data['due_date'] = form.instance.due_date
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
        # コース経由で学生を取得する場合: course -> classroom -> students
        students = Student.objects.filter(
            Q(classrooms_students__courses__teachers=self.request.user) | 
            Q(classrooms_students__teachers=self.request.user)
        ).distinct()
        
        # 担当している学生の課題を返す
        return super().get_queryset().filter(student__in=students)

class TeacherLogView(LoginRequiredMixin, TeacherRequiredMixin, ListView):
    """
    ログイン中の教師（自分自身）の操作ログを表示するビュー
    """
    
    # 1. どのモデル（テーブル）からデータを取得するか
    model = LogEntry
    
    # 2. どのテンプレートを使って表示するか（※新規作成が必要です）
    template_name = "task/log_for_teacher.html"
    
    # 3. テンプレートに渡す変数名
    context_object_name = 'logs'

    def get_queryset(self):
        """
        ListViewが表示するデータセットを定義する．
        ログイン中の教師 (self.request.user) のログで絞り込む．
        """
        # LogEntry.objects.filter(user=self.request.user) と同じ
        queryset = super().get_queryset()
        # .filter(user=self.request.user)
        # 日時の降順（新しい順）で並び替え
        return queryset.order_by('-timestamp')