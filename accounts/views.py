from django.views.generic import DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import PasswordChangeView
from django.urls import reverse_lazy
from .models import CustomUser, Student, Teacher


class ProfileView(LoginRequiredMixin, DetailView):
    """ユーザープロフィールページ"""
    model = CustomUser
    template_name = 'accounts/profile.html'
    context_object_name = 'profile_user'

    def get_object(self):
        """現在ログインしているユーザーの情報を取得"""
        return self.request.user

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.user.is_teacher:
            tec = Teacher.objects.get(pk=self.request.user.pk)
            context['classrooms'] = tec.classrooms_teachers.all()
        else:
            stu = Student.objects.get(pk=self.request.user.pk)
            print(stu.classrooms_students.all())
            context['classrooms'] = stu.classrooms_students.all()

        return context
    
class CustomPasswordChangeView(LoginRequiredMixin, PasswordChangeView):
    """パスワード変更ビュー"""
    template_name = 'accounts/password_change.html'
    success_url = reverse_lazy('profile')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'パスワード変更'
        return context

