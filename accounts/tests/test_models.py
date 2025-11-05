from django.test import TestCase
from django.urls import reverse
from accounts.models import Teacher, Student

class AccountModelsTest(TestCase):
    """
    accountsアプリケーションのモデルをテストする
    """

    @classmethod
    def setUpTestData(cls):
        """
        テストケース全体で利用するデータを一度だけ設定
        """
        # ユーザーの作成
        cls.teacher = Teacher.objects.create_user(user_id='teacher', password='password', is_teacher=True)
        cls.student = Student.objects.create_user(user_id='student', password='password')

    def test_teacher_creation(self):
        """
        教師ユーザーが正しく作成されることを確認する
        """
        teacher = Teacher.objects.get(user_id='teacher')
        self.assertEqual(teacher.user_id, 'teacher')
        self.assertTrue(teacher.is_teacher)

    def test_student_creation(self):
        """
        学生ユーザーが正しく作成されることを確認する
        """
        student = Student.objects.get(user_id='student')
        self.assertEqual(student.user_id, 'student')
        self.assertFalse(student.is_teacher)

    def test_get_full_name(self):
        """
        ユーザーのフルネームが正しく取得できることを確認する
        """
        self.teacher.first_name = 'John'
        self.teacher.last_name = 'Doe'
        self.teacher.save()
        self.assertEqual(self.teacher.get_full_name(), 'JohnDoe')

    