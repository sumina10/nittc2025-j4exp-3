from datetime import timedelta

from django.test import TestCase
from django.utils import timezone
from accounts.models import Teacher, Student
from task.models import ClassRoom, Course, Assignment
from task.forms import AssignmentCreateForm

class AssignmentFormTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        """テストケース全体で利用するデータを一度だけ設定"""
        cls.teacher = Teacher.objects.create_user(user_id='teacher1', password='password', is_teacher=True)
        cls.student = Student.objects.create_user(user_id='student1', password='password') # is_teacher=Falseはデフォルト
 
        # 学生が所属するクラスとコース
        cls.classroom1 = ClassRoom.objects.create(grade=1, class_number=1)
        cls.classroom1.students.add(cls.student)
        cls.classroom1.teachers.add(cls.teacher)
        cls.course1 = Course.objects.create(title='Math', classroom=cls.classroom1)
 
        # 学生が所属していないクラスとコース
        cls.classroom2 = ClassRoom.objects.create(grade=2, class_number=1)
        cls.course2 = Course.objects.create(title='Science', classroom=cls.classroom2)

    def test_assignment_form_valid_data(self):
        """有効なデータでフォームがバリデーションを通過することを確認"""
        due_date = timezone.now() + timedelta(days=7)
        form_data = {
            'title': 'Homework 1',
            'description': 'Complete exercises 1-5',
            'due_date': due_date.strftime('%Y-%m-%dT%H:%M'),
            'course': self.course1.id,
        }
        # フォームにログインユーザー情報を渡す
        form = AssignmentCreateForm(data=form_data, user=self.student)
        self.assertTrue(form.is_valid())
 
        # フォームが正しく保存できるかを確認
        assignment = form.save(commit=False)
        assignment.student = self.student
        assignment.save()
 
        self.assertEqual(assignment.title, 'Homework 1')
        self.assertEqual(assignment.student, self.student)
        self.assertEqual(assignment.course, self.course1)

    def test_assignment_form_invalid_data(self):
        """無効なデータ（必須項目が空）でフォームが無効になることを確認"""
        form_data = {
            'title': '',  # Missing title
            'description': 'Complete exercises 1-5',
            'due_date': timezone.now().strftime('%Y-%m-%dT%H:%M'),
            'course': self.course1.id,
        }
        form = AssignmentCreateForm(data=form_data, user=self.student)
        self.assertFalse(form.is_valid())
        self.assertIn('title', form.errors) # titleフィールドにエラーがあることを確認

    def test_form_course_queryset(self):
        """フォームのcourseフィールドが、学生が所属するコースのみを表示することを確認"""
        form = AssignmentCreateForm(user=self.student)
        # 学生が所属するコースは選択肢に含まれる
        self.assertIn(self.course1, form.fields['course'].queryset)
        # 学生が所属しないコースは選択肢に含まれない
        self.assertNotIn(self.course2, form.fields['course'].queryset)