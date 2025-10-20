from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone

from .models import Assignment

# Create your views here.

class CreateAssignment(LoginRequiredMixin, CreateView):
    model = Assignment
    fields = ["title","description","course", "status","due_date"] # studentはログインしている人のIDを使うためあとで付け足し
    template_name = "task/registration.html"

    success_url = reverse_lazy('task-create') # 'task-create'はリダイレクト先のURLパターン名

    def form_valid(self, form):
        # print("--- ログインした人の情報 ---\n")
        # print(f"{self.request.user}\n") # ログインしている人の情報
        form.instance.student = self.request.user
        form.instance.due_date = timezone.now()
        
        # print("--- フォームに入力されたデータ(結合前) ---\n")
        # print(form.cleaned_data)
        
        print("--- フォームに入力されたデータ(結合後) ---\n")
        combined_data = form.cleaned_data.copy()
        combined_data['student'] = form.instance.student
        combined_data['due_date'] = form .instance.due_date
        print(combined_data)
        return super().form_valid(form)

class CreateStudentHome(LoginRequiredMixin,ListView): #CreateStudentHomeがListViewとLoginRequiredMixinを継承
    model = Assignment #クラスを作る時点では全部の情報が取得できてOK
    # queryset = Assignment.objects.filter(student = self.request.user)
    template_name = "task/stu_home.html"
    def get_queryset(self):
        queryset = super().get_queryset() # ListViewに則ってget_querysetを実行
        return queryset.filter(student = self.request.user) # 返してくれた情報をもとに今ログインしている人の情報のみを返す
