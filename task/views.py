from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404
from django.db.models import Prefetch,Q
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

class TeacherAssignmentView(LoginRequiredMixin, TeacherRequiredMixin, ListView):
    model = Assignment
    template_name = "task/teacher_home.html"

    def get_queryset(self):
        if not self.request.user.is_teacher:
            raise PermissionDenied
        
        # --- Assignment を直接絞り込む ---

        # 条件A: 自分が「科目担当」であるコースの課題
        q_subject_teacher = Q(course__teachers=self.request.user)
        
        # 条件B: 自分が「クラス担任」であるクラスに所属する生徒の課題
        q_homeroom_teacher = Q(student__classrooms_students__teachers=self.request.user)
        
        # 条件A または 条件B に合致する課題（Assignment）を取得
        queryset = Assignment.objects.filter(
            q_subject_teacher | q_homeroom_teacher
        ).select_related('student', 'course').distinct() # N+1対策
        
        return queryset

class TeacherLogView(LoginRequiredMixin, TeacherRequiredMixin, ListView):
    """
    ログイン中の教師（自分自身）と担当学生の操作ログを表示するビュー
    """
    
    model = LogEntry
    template_name = "task/log_for_teacher.html"
    context_object_name = 'logs'

    def get_queryset(self):
        """
        ListViewが表示するデータセットを定義する．
        ログイン中の教師と担当学生のログで絞り込む．
        """
        # 担当している学生を取得
        students = Student.objects.filter(
            Q(assignments__course__teachers=self.request.user) |   # 科目担当パターン
            Q(classrooms_students__teachers=self.request.user)              # クラス担当パターン
        ).distinct()                                                        # 重複排除
        
        # 教師自身と担当学生のログを取得
        queryset = super().get_queryset().filter(
            Q(actor=self.request.user) |  # 教師自身のログ
            Q(actor__in=students)         # 担当学生のログ
        )
        
        # 日時の降順（新しい順）で並び替え
        return queryset.order_by('-timestamp')