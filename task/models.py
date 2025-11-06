from django.db import models
from accounts.models import Teacher, Student

class ClassRoom(models.Model):
    grade = models.SmallIntegerField()
    class_number = models.SmallIntegerField()
    # 教師は多対多
    teachers = models.ManyToManyField(Teacher, related_name='classrooms_teachers', blank=True)
    # 生徒は拡張性を考慮して多対多
    students = models.ManyToManyField(Student, related_name='classrooms_students', blank=True)

    def __str__(self):
        return f"{self.grade}-{self.class_number}"

class Course(models.Model):
    title = models.CharField(max_length=16)
    teachers = models.ManyToManyField(Teacher, related_name='courses_teachers', blank=True)
    classroom = models.ForeignKey(ClassRoom, on_delete=models.CASCADE, related_name='courses', blank=True)

    def __str__(self):
        return self.classroom.__str__() + ":" + self.title

class Assignment(models.Model):
    STATUS_CHOICES = [
        (0, '未提出'),
        (1, '提出済み'),
        (2, '受理'),
        (3, '再提出'),
        (4, '再提出提出済み')
    ]

    title = models.CharField(max_length=16)
    description = models.TextField(blank=True)
    due_date = models.DateTimeField(auto_now=False)
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default=0)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='assignments')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='assignments')

    def __str__(self):
        return self.title

class Reminder(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='reminders')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='reminders')
    title = models.CharField(max_length=32)
    description = models.TextField(blank=True)

