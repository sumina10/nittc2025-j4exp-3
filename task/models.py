from django.db import models
from django.conf import settings
from accounts.models import Teacher, Student

class ClassRoom(models.Model):
    name = models.CharField(max_length=16)
    # 教師は多対多
    teacher = models.ManyToManyField(Teacher, related_name='classrooms_teachers')
    # 生徒は拡張性を考慮して多対多
    students = models.ManyToManyField(Student, related_name='classrooms_students')

class Course(models.Model):
    name = models.CharField(max_length=16)
    teacher = models.ManyToManyField(Teacher, related_name='courses_teachers')

class Assignment(models.Model):
    title = models.CharField(max_length=16)
    description = models.TextField()
    due_date = models.DateTimeField(auto_now=False)
    status = models.CharField(max_length=8)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='assignments')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='assignments')

