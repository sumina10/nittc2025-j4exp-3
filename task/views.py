from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone

from .models import Assignment
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

class CreateStudentHome(LoginRequiredMixin,ListView): #CreateStudentHomeがListViewとLoginRequiredMixinを継承
    model = Assignment
    template_name = "task/stu_home.html"

    def get_queryset(self):
        queryset = super().get_queryset() # ListViewに則ってget_querysetを実行
        return queryset.filter(student = self.request.user) # 返してくれた情報をもとに今ログインしている人の情報のみを返す
