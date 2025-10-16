from django.db import models
from accounts.models import Teacher, Student

class ClassRoom(models.Model):
    title = models.CharField(max_length=16)
    # 教師は多対多
    teachers = models.ManyToManyField(Teacher, related_name='classrooms_teachers')
    # 生徒は拡張性を考慮して多対多
    students = models.ManyToManyField(Student, related_name='classrooms_students')

    def __str__(self):
        return self.title

class Course(models.Model):
    title = models.CharField(max_length=16)
    teachers = models.ManyToManyField(Teacher, related_name='courses_teachers')

    def __str__(self):
        return self.title

class Assignment(models.Model):
    STATUS_CHOICES = [
        (0, '未提出'),
        (1, '提出済み'),
        (2, '受理'),
        (3, '再提出'),
        (4, '再提出提出済み')
    ]

    title = models.CharField(max_length=16)
    description = models.TextField()
    due_date = models.DateTimeField(auto_now=False)
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default=0)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='assignments')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='assignments')

    def __str__(self):
        return self.title

