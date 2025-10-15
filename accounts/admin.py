from django.contrib import admin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django import forms
from django.utils.translation import gettext_lazy as _
from .models import CustomUser, Teacher, Student

# Register your models here.

class UserCreationForm(forms.ModelForm):
    """
    新規ユーザー作成用フォーム
    パスワード確認を含む
    """
    password1 = forms.CharField(label='パスワード', widget=forms.PasswordInput)
    password2 = forms.CharField(label='パスワード確認', widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ('user_id', 'first_name', 'last_name', 'is_teacher')

    def clean_password2(self):
        # パスワード一致確認
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("パスワードが一致しません")
        return password2

    def save(self, commit=True):
        # パスワードをハッシュ化して保存
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """
    ユーザー情報更新用フォーム
    パスワードはハッシュ表示
    """
    password = ReadOnlyPasswordHashField(
        label=_("パスワード"),
        help_text=_(
            "パスワードは保存されていません。確認することはできません。"
            "ただし、<a href=\"{}\">このフォーム</a>でパスワードを変更できます。"
        ),
    )

    class Meta:
        model = CustomUser
        fields = ('user_id', 'password', 'first_name', 'last_name',
                 'is_teacher', 'is_active', 'is_superuser')
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        password = self.fields.get('password')
        if password:
            password.help_text = password.help_text.format('../password/')
    
    def clean_password(self):
        # パスワードは変更されない - 元の値を返す
        return self.initial.get('password')


class CustomUserAdmin(admin.ModelAdmin):
    """カスタムユーザー管理画面の基本設定"""
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('user_id', 'first_name', 'last_name', 'is_teacher', 'is_superuser')
    list_filter = ('is_teacher', 'is_superuser', 'is_active')
    search_fields = ('user_id', 'first_name', 'last_name')
    ordering = ('user_id',)
    filter_horizontal = ('groups', 'user_permissions')
    
    # フィールドセットの再定義
    fieldsets = (
        (None, {'fields': ('user_id', 'password')}),
        (_('個人情報'), {'fields': ('first_name', 'last_name')}),
        (_('ユーザー種別'), {'fields': ('is_teacher',)}),
        (_('権限'), {
            'fields': ('is_active', 'is_superuser', 'groups', 'user_permissions'),
        }),
    )
    
    def get_form(self, request, obj=None, **kwargs):
        """
        新規作成時には別のフォームを使用
        """
        defaults = {}
        if obj is None:
            defaults['form'] = self.add_form
        defaults.update(kwargs)
        return super().get_form(request, obj, **defaults)

    def get_fieldsets(self, request, obj=None):
        """
        新規作成時のフィールドセット
        """
        if not obj:
            return [(None, {'fields': ('user_id', 'is_teacher', 'password1', 'password2')})]
        return super().get_fieldsets(request, obj)


class TeacherAdmin(CustomUserAdmin):
    """教員モデルの管理画面設定"""
    def get_queryset(self, request):
        """Teacherモデルのみを取得"""
        return Teacher.get_queryset()
    
    def save_model(self, request, obj, form, change):
        """教員として保存する際に、is_teacherを自動設定"""
        obj.is_teacher = True
        super().save_model(request, obj, form, change)


class StudentAdmin(CustomUserAdmin):
    """学生モデルの管理画面設定"""
    def get_queryset(self, request):
        """Studentモデルのみを取得"""
        return Student.get_queryset()
    
    def save_model(self, request, obj, form, change):
        """学生として保存する際に、is_teacherを自動設定"""
        obj.is_teacher = False
        super().save_model(request, obj, form, change)


# モデルの登録
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Student, StudentAdmin)
