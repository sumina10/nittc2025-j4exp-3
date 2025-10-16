from django.contrib import admin, messages
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django import forms
from django.shortcuts import render
from django.urls import path
from django.utils.translation import gettext_lazy as _
import csv
import io
from .models import CustomUser, Teacher, Student
from .forms import CsvImportForm


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
    def get_urls(self):
        urls = super().get_urls()
        urls = [
            path('import_csv/', self.admin_site.admin_view(self.import_csv), name='teacher_import_csv'),
        ] + urls
        return urls

    """教員モデルの管理画面設定"""
    def get_queryset(self, request):
        """Teacherモデルのみを取得"""
        return Teacher.get_queryset()
    
    def save_model(self, request, obj, form, change):
        """教員として保存する際に、is_teacherを自動設定"""
        obj.is_teacher = True
        super().save_model(request, obj, form, change)

    """CSVインポートアクションの追加"""
    def import_csv(self, request):
        form = CsvImportForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = form.cleaned_data['csv_file']

            decoded_file = csv_file.read().decode('utf-8')
            io_string = io.StringIO(decoded_file)
            reader = csv.reader(io_string)
            _header = next(reader)  # ヘッダー行をスキップ

            users_created = 0
            users_failed = 0

            for row in reader:
                if len(row) < 4:
                    users_failed += 1
                    continue  # 不完全な行はスキップ

                # TODO: 仕様と一致しない
                user_id, first_name, last_name, password = row[:4]
                if not CustomUser.objects.filter(user_id=user_id).exists():
                    user = Teacher(
                        user_id=user_id,
                        first_name=first_name,
                        last_name=last_name,
                        is_teacher=False,
                        is_superuser=False,
                    )
                    user.set_password(password)
                    user.save()
                    users_created += 1
                else:
                    users_failed += 1  # 既存ユーザーはスキップ
            self.message_user(
                request, 
                f"インポート完了: {users_created} 件のユーザーが作成されました。{users_failed} 件の行がスキップされました。", 
                level= messages.SUCCESS if users_failed == 0 else messages.WARNING
            )
            return None  # リダイレクトしない
        context = {
            'form': form,
            'title': _('CSVファイルから教師をインポート'),
            'csv_format' : _('user_id, first_name, last_name, password'),
            'opts': self.model._meta,
            'has_permission': self.has_change_permission(request),
        }

        return render(
            request,
            "admin/csv_form.html",
            context,
        )

    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['import_form'] = 'import_csv/'
        return super().changelist_view(request, extra_context)


class StudentAdmin(CustomUserAdmin):
    def get_urls(self):
        urls = super().get_urls()
        urls = [
            path('import_csv/', self.admin_site.admin_view(self.import_csv), name='student_import_csv'),
        ] + urls
        return urls

    """学生モデルの管理画面設定"""
    def get_queryset(self, request):
        """Studentモデルのみを取得"""
        return Student.get_queryset()
    
    def save_model(self, request, obj, form, change):
        """学生として保存する際に、is_teacherを自動設定"""
        obj.is_teacher = False
        super().save_model(request, obj, form, change)

    """CSVインポートアクションの追加"""
    def import_csv(self, request):
        form = CsvImportForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = form.cleaned_data['csv_file']

            decoded_file = csv_file.read().decode('utf-8')
            io_string = io.StringIO(decoded_file)
            reader = csv.reader(io_string)
            _header = next(reader)  # ヘッダー行をスキップ

            users_created = 0
            users_failed = 0

            for row in reader:
                if len(row) < 3:
                    users_failed += 1
                    continue  # 不完全な行はスキップ
                # TODO: 仕様と一致しない
                user_id, grade, classroom = row[:3]
                password = 'defaultpassword'  # デフォルトパスワードを設定
                if not CustomUser.objects.filter(user_id=user_id).exists():
                    user = Student(
                        user_id=user_id,
                        first_name='',
                        last_name='',
                        is_teacher=False,
                        is_superuser=False,
                    )
                    user.set_password(password)
                    user.save()
                    users_created += 1
                else:
                    users_failed += 1  # 既存ユーザーはスキップ
            self.message_user(
                request, 
                f"インポート完了: {users_created} 件のユーザーが作成されました。{users_failed} 件の行がスキップされました。", 
                level= messages.SUCCESS if users_failed == 0 else messages.WARNING
            )
            return None  # リダイレクトしない
        context = {
            'form': form,
            'title': _('CSVファイルから学生をインポート'),
            'csv_format' : _('user_id, first_name, last_name, password'),
            'opts': self.model._meta,
            'has_permission': self.has_change_permission(request),
        }

        return render(
            request,
            "admin/csv_form.html",
            context,
        )

    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['import_form'] = 'import_csv/'
        return super().changelist_view(request, extra_context)


# モデルの登録
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Student, StudentAdmin)
