from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404
from django.db.models import Prefetch,Q
from django.core.exceptions import PermissionDenied
from accounts.mixins import StudentRequiredMixin, TeacherRequiredMixin
from .models import Assignment, Course
from .forms import AssignmentCreateForm, AssignmentEditForm
from auditlog.models import LogEntry
from django.contrib.contenttypes.models import ContentType

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
        ).select_related('student', 'course').distinct() 
        
        return queryset

class TeacherLogView(LoginRequiredMixin, TeacherRequiredMixin, ListView):
    
    model = LogEntry
    template_name = "task/log_for_teacher.html"
    context_object_name = 'logs'

    def get_queryset(self):
        if not self.request.user.is_teacher:
            raise PermissionDenied
        # 1. 担当する Assignment の ID リストを取得
        # 条件A: コースに紐づく教師が自分の場合
        q_subject = Q(course__teachers=self.request.user)
        
        # 条件B: 生徒のクラスに紐づく教師が自分の場合
        q_homeroom = Q(student__classrooms_students__teachers=self.request.user)
        
        # AまたはBに合致する課題（Assignment）のIDリスト
        my_assignment_ids = Assignment.objects.filter(
            q_subject | q_homeroom
        ).values_list('pk', flat=True).distinct()
        # 'pk' は Assignment の主キー(Primary Key)
        # flat=True を使うと，平坦なリストとして取得できる
        # コレで my_assignment_ids は担当する Assignment の ID リストになる


        # 2. Assignment の ContentType オブジェクトを取得
        assignment_ct = ContentType.objects.get_for_model(Assignment)   # 対象モデルが Assignment の ContentTypeを取得


        # 3. LogEntry を絞り込む Q オブジェクトを定義
        
        # 条件1: 教師自身のログ
        # q_self = Q(actor=self.request.user)
        
        # 条件2: 担当 Assignment に対するログ（actor が誰であれ）
        q_my_assignment_logs = Q(
            content_type=assignment_ct,      # モデルが Assignment で
            object_pk__in=my_assignment_ids  # ID が担当リストにある
        )
        
        # 4. 絞り込みを実行
        queryset = super().get_queryset().filter(
            q_my_assignment_logs
        ).distinct()
        
        # 日時の降順（新しい順）で並び替え
        return queryset.select_related('actor').order_by('-timestamp')
