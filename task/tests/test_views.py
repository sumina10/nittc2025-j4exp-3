from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from accounts.models import Teacher, Student
from task.models import ClassRoom, Course, Assignment


class TaskViewsTest(TestCase):
    """
    taskアプリケーションのビューをテストする
    """

    @classmethod
    def setUpTestData(cls):
        """
        テストケース全体で利用するデータを一度だけ設定
        """
        # ユーザーの作成
        cls.teacher1 = Teacher.objects.create_user(user_id='teacher1', password='password', is_teacher=True)
        cls.teacher2 = Teacher.objects.create_user(user_id='teacher2', password='password', is_teacher=True)
        cls.student1 = Student.objects.create_user(user_id='student1', password='password')
        cls.student2 = Student.objects.create_user(user_id='student2', password='password')

        # クラスルームとコースの作成
        cls.classroom1 = ClassRoom.objects.create(grade=1, class_number=1)
        cls.classroom1.teachers.add(cls.teacher1)
        cls.classroom1.students.add(cls.student1)

        cls.classroom2 = ClassRoom.objects.create(grade=2, class_number=1)
        cls.classroom2.teachers.add(cls.teacher2)
        cls.classroom2.students.add(cls.student2)

        cls.course1 = Course.objects.create(title='Math', classroom=cls.classroom1)
        cls.course1.teachers.add(cls.teacher1)

        cls.course2 = Course.objects.create(title='Science', classroom=cls.classroom2)
        cls.course2.teachers.add(cls.teacher2)

        # 課題の作成
        cls.assignment1 = Assignment.objects.create(
            title='Math Report',
            course=cls.course1,
            student=cls.student1,
            due_date=timezone.now()
        )
        cls.assignment2 = Assignment.objects.create(
            title='Science Report',
            course=cls.course2,
            student=cls.student2,
            due_date=timezone.now()
        )

        # URL
        cls.create_url = reverse('task-create')
        cls.student_home_url = reverse('student-home')
        cls.teacher_home_url = reverse('teacher-home')

    # -----------------------------------------------------------------
    # CreateAssignment ビューのテスト
    # -----------------------------------------------------------------

    def test_create_assignment_view_for_student(self):
        """学生が課題作成ページにアクセスできることを確認"""
        self.client.login(user_id='student1', password='password')
        response = self.client.get(self.create_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'task/registration.html')

    def test_create_assignment_view_for_teacher_is_forbidden(self):
        """教員は課題作成ページにアクセスできないことを確認"""
        self.client.login(user_id='teacher1', password='password')
        response = self.client.get(self.create_url)
        self.assertEqual(response.status_code, 403) # PermissionDenied

    def test_create_assignment_view_redirects_if_not_logged_in(self):
        """未ログインユーザーはログインページにリダイレクトされることを確認"""
        response = self.client.get(self.create_url)
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, f"/accounts/login/?next={self.create_url}")

    def test_create_assignment_post(self):
        """学生が課題を正常に作成できることを確認"""
        self.client.login(user_id='student1', password='password')
        assignment_count = Assignment.objects.count()
        form_data = {
            'title': 'New Assignment',
            'description': 'This is a new assignment.',
            'due_date': timezone.now().strftime('%Y-%m-%dT%H:%M'),
            'course': self.course1.id,
        }
        response = self.client.post(self.create_url, form_data)
        
        # 成功URLにリダイレクトされるか
        self.assertRedirects(response, self.create_url)
        # 課題が1つ増えているか
        self.assertEqual(Assignment.objects.count(), assignment_count + 1)
        # 作成された課題の学生が正しいか
        new_assignment = Assignment.objects.latest('id')
        self.assertEqual(new_assignment.student, self.student1)
        self.assertEqual(new_assignment.title, 'New Assignment')

    # -----------------------------------------------------------------
    # StudentAssignmentView ビューのテスト
    # -----------------------------------------------------------------

    def test_student_home_view_for_student(self):
        """学生が自身の課題一覧ページにアクセスできることを確認"""
        self.client.login(user_id='student1', password='password')
        response = self.client.get(self.student_home_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'task/student_home.html')

    def test_student_home_view_queryset(self):
        """学生の課題一覧に自身の課題のみが表示されることを確認"""
        self.client.login(user_id='student1', password='password')
        response = self.client.get(self.student_home_url)
        self.assertEqual(response.status_code, 200)
        
        # コンテキストの assignment_list を確認
        assignments_in_context = response.context['assignment_list']
        self.assertIn(self.assignment1, assignments_in_context)
        self.assertNotIn(self.assignment2, assignments_in_context)
        self.assertEqual(len(assignments_in_context), 1)

    def test_student_home_view_for_teacher_is_forbidden(self):
        """教員は学生の課題一覧ページにアクセスできないことを確認"""
        self.client.login(user_id='teacher1', password='password')
        response = self.client.get(self.student_home_url)
        self.assertEqual(response.status_code, 403)

    # -----------------------------------------------------------------
    # TeacherAssignmentView ビューのテスト
    # -----------------------------------------------------------------

    def test_teacher_home_view_for_teacher(self):
        """教員が担当学生の課題一覧ページにアクセスできることを確認"""
        self.client.login(user_id='teacher1', password='password')
        response = self.client.get(self.teacher_home_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'task/teacher_home.html')

    def test_teacher_home_view_queryset(self):
        """教員の課題一覧に担当学生の課題のみが表示されることを確認"""
        self.client.login(user_id='teacher1', password='password')
        response = self.client.get(self.teacher_home_url)
        self.assertEqual(response.status_code, 200)

        # コンテキストの assignment_list を確認
        assignments_in_context = response.context['assignment_list']
        self.assertIn(self.assignment1, assignments_in_context) # teacher1はstudent1の担当
        self.assertNotIn(self.assignment2, assignments_in_context) # teacher1はstudent2の担当ではない
        self.assertEqual(len(assignments_in_context), 1)

    def test_teacher_home_view_for_student_is_forbidden(self):
        """学生は教員の課題一覧ページにアクセスできないことを確認"""
        self.client.login(user_id='student1', password='password')
        response = self.client.get(self.teacher_home_url)
        self.assertEqual(response.status_code, 403)

    def test_teacher_home_view_for_unrelated_teacher(self):
        """担当外の教員は、他人の担当学生の課題を閲覧できないことを確認"""
        # teacher2でログイン（student1の担当ではない）
        self.client.login(user_id='teacher2', password='password')
        response = self.client.get(self.teacher_home_url)
        self.assertEqual(response.status_code, 200)

        # コンテキストの assignment_list を確認
        assignments_in_context = response.context['assignment_list']
        self.assertNotIn(self.assignment1, assignments_in_context) # student1の課題は表示されない
        self.assertIn(self.assignment2, assignments_in_context) # 自身の担当であるstudent2の課題は表示される
        self.assertEqual(len(assignments_in_context), 1)