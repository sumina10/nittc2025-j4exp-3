import csv
import io

from django.contrib import admin, messages
from django.db import transaction
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

            through_model = ClassRoom.teachers.through
            relations_to_create = []
            classrooms = {}
            teachers = {}
            class_failed = 0

            for cr in ClassRoom.objects.all():
                classrooms[(cr.grade, cr.class_number)] = cr

            for t in Teacher.objects.all():
                teachers[t.user_id] = t

            for row in reader:
                if len(row) < 4:
                    class_failed += 1
                    continue

                teacher_id, _name, grade, classroom = row[:4]

                try:
                    grade_int = int(grade)
                    classroom_int = int(classroom)
                except ValueError:
                    class_failed += 1
                    continue

                classroom_key = (grade_int, classroom_int)
                if (classroom_key not in classrooms) or (teacher_id not in teachers):
                    class_failed += 1
                    continue
                else:
                    relations_to_create.append(
                        through_model(
                            classroom_id=classrooms[classroom_key].id,
                            teacher_id=teachers[teacher_id].id,
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
            'csv_format': _('教師ID, 名前, 学年, クラス'),
            'opts': self.model._meta,
            'has_permission': self.has_change_permission(request),
        }

        return render(
            request,
            "admin/task/classroom/csv_form.html",
            context,
        )

    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['import_form'] = 'import_csv/'
        return super().changelist_view(request, extra_context )


class CourseAdmin(admin.ModelAdmin):
    """科目管理画面の設定"""
    list_display = ('get_title', 'get_teachers', 'get_assignments_count')
    search_fields = ('title', 'teachers__last_name', 'teachers__first_name')
    filter_horizontal = ('teachers',)

    def get_urls(self):
        urls = [
            path('import_csv/', self.admin_site.admin_view(self.import_csv), name='course_import_csv'),
        ]
        urls += super().get_urls()
        return urls

    def get_title(self, obj):
        return obj.__str__()
    
    def get_teachers(self, obj):
        """担当教員の表示"""
        return ", ".join([f"{t.user_id}" for t in obj.teachers.all()])
    get_teachers.short_description = _('担当教員')
    
    def get_assignments_count(self, obj):
        """課題数の表示"""
        return obj.assignments.count()
    get_assignments_count.short_description = _('課題数')

    def import_csv(self, request):
        form = CsvImportForm(request.POST, request.FILES)

        if form.is_valid():
            csv_file = form.cleaned_data['csv_file']

            decoded_file = csv_file.read().decode('utf8')
            io_string = io.StringIO(decoded_file)
            reader = csv.reader(io_string)
            _header = next(reader)

            courses_to_create = []
            relation_model = Course.teachers.through
            teacher_course_mapping = []

            teachers = {}
            classrooms = {}
            course_failed = 0

            for t in Teacher.objects.all():
                teachers[t.get_full_name()] = t

            for cr in ClassRoom.objects.all():
                classrooms[f"{cr.grade}-{cr.class_number}"] = cr

            for row in reader:
                if len(row) < 5:
                    course_failed += 1
                    continue

                _course_code, classname, _place, title, _work = row[:5]
                teacher_names = row[5:]

                if classname not in classrooms:
                    course_failed += 1
                    continue

                tmp_course = Course(
                    title=title,
                    classroom=classrooms[classname],
                )

                courses_to_create.append(tmp_course)

                for teacher_name in teacher_names:
                    if teacher_name not in teachers:
                        course_failed += 1
                        continue
                    else:
                        teacher_course_mapping.append((teachers[teacher_name], tmp_course))
            with transaction.atomic():
                created_courses = Course.objects.bulk_create(courses_to_create)
                relations_to_create = [
                    relation_model(
                        teacher_id=teacher.id,
                        course_id=course.id,
                    )
                    for teacher, course in teacher_course_mapping
                ]
                relation_model.objects.bulk_create(relations_to_create, ignore_conflicts=True)

            course_created = len(created_courses)
            self.message_user(
                request,
                f"インポート完了: {course_created} 件のユーザーが作成されました。{course_failed} 件の行がスキップされました。",
                level=messages.SUCCESS if course_failed == 0 else messages.WARNING
            )

        context = {
            'form': form,
            'title': _('CSVファイルから科目を作成'),
            'csv_format': _('無視, クラス, 無視, 科目, 無視, 教員1, ...'),
            'opts': self.model._meta,
            'has_permission': self.has_change_permission(request),
        }

        return render(
            request,
            "admin/task/course/csv_form.html",
            context,
        )


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
