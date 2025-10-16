from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import ClassRoom, Course, Assignment

@admin.register(ClassRoom)
class ClassRoomAdmin(admin.ModelAdmin):
    """クラスルーム管理画面の設定"""
    list_display = ('title', 'get_teachers', 'get_students_count')
    search_fields = ('title', 'teachers__last_name', 'teachers__first_name', 
                    'students__last_name', 'students__first_name')
    filter_horizontal = ('teachers', 'students')
    
    def get_teachers(self, obj):
        """担当教員の表示"""
        return ", ".join([f"{t.last_name} {t.first_name}" for t in obj.teachers.all()])
    get_teachers.short_description = _('担当教員')
    
    def get_students_count(self, obj):
        """受講学生数の表示"""
        return obj.students.count()
    get_students_count.short_description = _('受講学生数')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    """科目管理画面の設定"""
    list_display = ('title', 'get_teachers', 'get_assignments_count')
    search_fields = ('title', 'teachers__last_name', 'teachers__first_name')
    filter_horizontal = ('teachers',)
    
    def get_teachers(self, obj):
        """担当教員の表示"""
        return ", ".join([f"{t.last_name} {t.first_name}" for t in obj.teachers.all()])
    get_teachers.short_description = _('担当教員')
    
    def get_assignments_count(self, obj):
        """課題数の表示"""
        return obj.assignments.count()
    get_assignments_count.short_description = _('課題数')


@admin.register(Assignment)
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
