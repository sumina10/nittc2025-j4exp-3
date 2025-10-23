from django.test import TestCase
from django.utils import timezone
from datetime import timedelta
from task.forms import AssignmentForm
from task.models import Assignment, Course, ClassRoom
from accounts.models import Teacher, Student

class AssignmentFormTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.teacher = Teacher.objects.create_user(user_id='test_teacher', first_name='Test', last_name='Teacher', password='password', is_teacher=True)
        cls.student = Student.objects.create_user(user_id='test_student', first_name='Test', last_name='Student', password='password')
        cls.classroom = ClassRoom.objects.create(grade=1, class_number=1)
        cls.classroom.students.add(cls.student)
        cls.course = Course.objects.create(title='Test Course', classroom=cls.classroom)
        cls.course.teachers.add(cls.teacher)

    def test_assignment_form_valid_data(self):
        """
        フォームに有効なデータが与えられたときに、フォームが有効であることを確認する。
        """
        form_data = {
            'title': 'Test Assignment',
            'description': 'This is a test description.',
            'due_date': timezone.now() + timedelta(days=1),
            'course': self.course.id,
        }
        form = AssignmentForm(data=form_data, user=self.student)
        self.assertTrue(form.is_valid(), form.errors)

    def test_assignment_form_no_data(self):
        """
        フォームにデータが与えられなかったときに、フォームが無効であることを確認する。
        """
        form = AssignmentForm(user=self.student)
        self.assertFalse(form.is_valid())
        self.assertIn('title', form.errors)
        self.assertIn('due_date', form.errors)
        self.assertIn('course', form.errors)

    def test_assignment_form_course_queryset_for_student(self):
        """
        学生ユーザーに関連するコースのみがクエリセットに含まれることを確認する。
        """
        # 学生に関連付けられていない別のコースを作成
        other_classroom = ClassRoom.objects.create(grade=2, class_number=1)
        other_course = Course.objects.create(title='math', classroom=other_classroom)
        other_course.teachers.add(self.teacher)