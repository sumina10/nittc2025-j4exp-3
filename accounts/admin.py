from django.contrib import admin, messages
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError, MultipleObjectsReturned, ObjectDoesNotExist
from django import forms
from django.shortcuts import render
from django.urls import path, reverse
from django.utils.translation import gettext_lazy as _
from django.db import transaction
from django.http import HttpResponseRedirect
import csv
import io
from .models import CustomUser, Teacher, Student
from task.models import ClassRoom
from .forms import CsvImportForm
from django.contrib.auth.forms import AdminPasswordChangeForm
from django.contrib.admin.utils import unquote
from django.template.response import TemplateResponse


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
    
    def get_urls(self):
        """パスワード変更用のURLを追加"""
        urls = super().get_urls()
        custom_urls = [
            path(
                '<id>/password/',
                self.admin_site.admin_view(self.user_change_password),
                name='auth_user_password_change',
            ),
        ]
        return custom_urls + urls
    
    def user_change_password(self, request, id, form_url=''):
        """パスワード変更ビュー"""
        user = self.get_object(request, unquote(id))
        if request.method == 'POST':
            form = AdminPasswordChangeForm(user, request.POST)
            if form.is_valid():
                form.save()
                change_message = _('パスワードを変更しました。')
                self.log_change(request, user, change_message)
                msg = _('パスワードが正常に変更されました。')
                messages.success(request, msg)
                return HttpResponseRedirect('..')
        else:
            form = AdminPasswordChangeForm(user)

        fieldsets = [(None, {'fields': list(form.base_fields)})]
        adminForm = admin.helpers.AdminForm(form, fieldsets, {})

        context = {
            'title': _('%s のパスワード変更') % user.user_id,
            'adminForm': adminForm,
            'form_url': form_url,
            'form': form,
            'add': True,
            'change': False,
            'has_delete_permission': False,
            'has_change_permission': True,
            'has_absolute_url': False,
            'opts': self.model._meta,
            'original': user,
            'save_as': False,
            'show_save': True,
        }
        
        request.current_app = self.admin_site.name

        return TemplateResponse(
            request,
            'admin/auth/user/change_password.html',
            context,
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
    
    def get_fieldsets(self, request, obj=None):
        """
        新規作成時のフィールドセット（教員用）
        """
        if not obj:
            return [(None, {'fields': ('user_id', 'first_name', 'last_name', 'password1', 'password2')})]
        return super().get_fieldsets(request, obj)

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

                raise NotImplementedError

                # TODO: 教師の仕様を確認していない。
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
    
    def get_fieldsets(self, request, obj=None):
        """
        新規作成時のフィールドセット（学生用）
        """
        if not obj:
            return [(None, {'fields': ('user_id', 'password1', 'password2')})]
        return super().get_fieldsets(request, obj)

    """CSVインポートアクションの追加"""
    def import_csv(self, request):
        form = CsvImportForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = form.cleaned_data['csv_file']

            decoded_file = csv_file.read().decode('utf-8')
            io_string = io.StringIO(decoded_file)
            reader = csv.reader(io_string)
            _header = next(reader)  # ヘッダー行をスキップ

            # 既存のユーザーIDを事前に取得（1回のクエリ）
            existing_user_ids = set(
                CustomUser.objects.values_list('user_id', flat=True)
            )
            
            # ClassRoomを事前にキャッシュ（1回のクエリ）
            classrooms = {}
            for cr in ClassRoom.objects.all():
                classrooms[(cr.grade, cr.class_number)] = cr

            users_to_create = []
            student_classroom_mapping = []  # (user_id, classroom_key)のマッピング
            users_created = 0
            users_failed = 0

            for row in reader:
                if len(row) < 3:
                    users_failed += 1
                    continue  # 不完全な行はスキップ

                user_id, grade, classroom = row[:3]

                # ClassRoomの存在確認（キャッシュから）
                try:
                    grade_int = int(grade)
                    classroom_int = int(classroom)
                except ValueError:
                    users_failed += 1
                    continue  # 無効な数値
                
                classroom_key = (grade_int, classroom_int)
                if classroom_key not in classrooms:
                    users_failed += 1
                    continue  # クラスルームが存在しない
                
                # 既存ユーザーのチェック（キャッシュから）
                if user_id not in existing_user_ids:
                    user = Student(
                        user_id=user_id,
                        first_name='',
                        last_name='',
                        is_teacher=False,
                        is_superuser=False,
                    )
                    user.set_password(user_id)
                    users_to_create.append(user)
                    student_classroom_mapping.append((user_id, classroom_key))
                    existing_user_ids.add(user_id)  # キャッシュを更新
                else:
                    users_failed += 1  # 既存ユーザーはスキップ
            
            # バルクインサート（1回のクエリ）
            if users_to_create:
                with transaction.atomic():
                    created_users = Student.objects.bulk_create(users_to_create)
                    users_created = len(created_users)
                    
                    # 作成した学生をクラスルームに追加
                    # 作成したユーザーをuser_idでマッピング
                    user_id_to_student = {user.user_id: user for user in created_users}
                    
                    # 中間テーブルへの直接バルクインサート（1回のクエリ）
                    through_model = ClassRoom.students.through
                    relations_to_create = [
                        through_model(
                            classroom_id=classrooms[classroom_key].id,
                            student_id=user_id_to_student[user_id].id
                        )
                        for user_id, classroom_key in student_classroom_mapping
                    ]
                    through_model.objects.bulk_create(relations_to_create)
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
