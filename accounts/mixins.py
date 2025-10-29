from django.contrib.auth.mixins import AccessMixin

class StudentRequiredMixin(AccessMixin):
    """学生ユーザーのみアクセスを許可するミックスイン"""

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or request.user.is_teacher:
            return self.handle_no_permission()
        return super().dispatch(request, *args, **kwargs)
    
class TeacherRequiredMixin(AccessMixin):
    """教員ユーザーのみアクセスを許可するミックスイン"""

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_teacher:
            return self.handle_no_permission()
        return super().dispatch(request, *args, **kwargs)