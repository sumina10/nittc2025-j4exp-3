import csv
import io

from django.contrib import admin, messages
from django.urls import path
from django.utils.translation import gettext_lazy as _
from django.shortcuts import render

from accounts.admin import TeacherAdmin
from accounts.models import Teacher
from .forms import CsvImportForm
from .models import ClassRoom, Course, Assignment

class ClassRoomAdmin(admin.ModelAdmin):
    """クラスルーム管理画面の設定"""
    list_display = ('get_title', 'get_teachers', 'get_students_count')
    search_fields = ('teachers__last_name', 'teachers__first_name', 
                    'students__last_name', 'students__first_name')
    filter_horizontal = ('teachers', 'students')

    def get_urls(self):
        urls = [
            path('import_csv/', self.admin_site.admin_view(self.import_csv), name='classroom_import_csv'),
        ]
        urls += super().get_urls()
        return urls

    def get_title(self, obj):
        """クラスルームの表示"""
        return obj.__str__()
    
    def get_teachers(self, obj):
        """担当教員の表示"""
        return ", ".join([f"{t.user_id}" for t in obj.teachers.all()])
    get_teachers.short_description = _('担当教員')
    
    def get_students_count(self, obj):
        """受講学生数の表示"""
        return obj.students.count()
    get_students_count.short_description = _('受講学生数')

    def import_csv(self, request):
        form = CsvImportForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = form.cleaned_data['csv_file']

            decoded_file = csv_file.read().decode('utf8')
            io_string = io.StringIO(decoded_file)
            reader = csv.reader(io_string)
            _header = next(reader)

            existing_user_ids = set(
                Teacher.objects.values_list('user_id', flat=True)
            )

            through_model = ClassRoom.teachers.through
            relations_to_create = []
            classrooms = {}
            class_failed = 0

            for cr in ClassRoom.objects.all():
                classrooms[(cr.grade, cr.class_number)] = cr

            for row in reader:
                if len(row) < 3:
                    class_failed += 1
                    continue

                teacher_id, grade, classroom = row[:3]

                try:
                    grade_int = int(grade)
                    classroom_int = int(classroom)
                except ValueError:
                    continue

                classroom_key = (grade_int, classroom_int)
                if (classroom_key not in classrooms) or (teacher_id not in existing_user_ids):
                    class_failed += 1
                    continue
                else:
                    relations_to_create.append(
                        through_model(
                            classroom_id=classrooms[classroom_key].id,
                            teacher_id=teacher_id,
                        )
                    )

            class_created = len(through_model.objects.bulk_create(relations_to_create))
            self.message_user(
                request,
                f"インポート完了: {class_created} 件のユーザーが作成されました。{class_failed} 件の行がスキップされました。",
                level=messages.SUCCESS if class_failed == 0 else messages.WARNING
            )

        context = {
            'form': form,
            'title': _('CSVファイルから教師をクラスに追加'),
            'csv_format': _('教師ID, 学年, クラス'),
            'opts': self.model._meta,
            'has_permission': self.has_change_permission(request),
        }

        return render(
            request,
            "admin/csv_form.html",
            context,
        )

    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}
        extra_context['import_form'] = 'import_csv/'
        return super().changelist_view(request, extra_context)


class CourseAdmin(admin.ModelAdmin):
    """科目管理画面の設定"""
    list_display = ('get_title', 'get_teachers', 'get_assignments_count')
    search_fields = ('title', 'teachers__last_name', 'teachers__first_name')
    filter_horizontal = ('teachers',)

    def get_title(self, obj):
        return obj.__str__()
    
    def get_teachers(self, obj):
        """担当教員の表示"""
        return ", ".join([f"{t.last_name} {t.first_name}" for t in obj.teachers.all()])
    get_teachers.short_description = _('担当教員')
    
    def get_assignments_count(self, obj):
        """課題数の表示"""
        return obj.assignments.count()
    get_assignments_count.short_description = _('課題数')


class AssignmentAdmin(admin.ModelAdmin):
    """課題管理画面の設定"""
    list_display = ('title', 'course', 'student', 'due_date', 'status')
    list_filter = ('status', 'due_date', 'course', 'student')
    search_fields = ('title', 'description', 
                    'course__title',
                    'student__last_name', 'student__first_name')
    date_hierarchy = 'due_date'
    
    fieldsets = (
        (None, {
            'fields': ('title', 'description')
        }),
        (_('課題情報'), {
            'fields': ('course', 'student', 'due_date', 'status')
        }),
    )

admin.site.register(Course, CourseAdmin)
admin.site.register(Assignment, AssignmentAdmin)
admin.site.register(ClassRoom, ClassRoomAdmin)
