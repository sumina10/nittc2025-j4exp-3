from django.test import TestCase
from django.urls import reverse
from accounts.models import Teacher, Student

class AccountViewsTest(TestCase):
    """
    accountsアプリケーションのビューをテストする
    """

    @classmethod
    def setUpTestData(cls):
        """
        テストケース全体で利用するデータを一度だけ設定
        """
        # ユーザーの作成
        cls.teacher = Teacher.objects.create_user(user_id='teacher', password='password', is_teacher=True)
        cls.student = Student.objects.create_user(user_id='student', password='password')

    def test_profile_view_as_teacher(self):
        """
        教師としてプロフィールビューにアクセスできることを確認する
        """
        self.client.login(user_id='teacher', password='password')
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'teacher')

    def test_profile_view_as_student(self):
        """
        学生としてプロフィールビューにアクセスできることを確認する
        """
        self.client.login(user_id='student', password='password')
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'student')

    def test_password_change_view(self):
        """
        パスワード変更ビューにアクセスできることを確認する
        """
        self.client.login(user_id='student', password='password')
        response = self.client.get(reverse('password_change'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'パスワード変更')

    def test_password_change(self):
        """
        パスワード変更が正常に動作することを確認する
        """
        self.client.login(user_id='student', password='password')
        response = self.client.post(reverse('password_change'), {
            'old_password': 'password',
            'new_password1': 'newpassword123',
            'new_password2': 'newpassword123',
        })
        self.assertRedirects(response, reverse('profile'))
        self.client.logout()
        login_successful = self.client.login(user_id='student', password='newpassword123')
        self.assertTrue(login_successful)

    def test_profile_view_redirects_if_not_logged_in(self):
        """
        未ログインユーザーがプロフィールビューにアクセスしようとした場合、ログインページにリダイレクトされることを確認する
        """
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, f"/accounts/login/?next={reverse('profile')}")

