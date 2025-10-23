from django.test import TestCase
from django.utils import timezone
from accounts.models import Teacher, Student
from task.models import ClassRoom, Course, Assignment

class TaskModelsTest(TestCase):
    """
    taskアプリケーションのモデルをテストする
    """

    @classmethod
    def setUpTestData(cls):
        """
        テストケース全体で利用するデータを一度だけ設定
        """
        # ユーザーの作成
        cls.teacher = Teacher.objects.create_user(user_id='teacher_model', password='password', is_teacher=True)
        cls.student = Student.objects.create_user(user_id='student_model', password='password')

        # クラスルームの作成と関連付け
        cls.classroom = ClassRoom.objects.create(grade=1, class_number=1)
        cls.classroom.teachers.add(cls.teacher)
        cls.classroom.students.add(cls.student)

        # コースの作成と関連付け
        cls.course = Course.objects.create(title='Math', classroom=cls.classroom)
        cls.course.teachers.add(cls.teacher)

        # 課題の作成
        cls.assignment = Assignment.objects.create(
            title='Math Homework',
            description='Chapter 1 exercises.',
            due_date=timezone.now(),
            course=cls.course,
            student=cls.student
        )

    def test_classroom_model(self):
        """ClassRoomモデルの__str__とリレーションシップをテスト"""
        self.assertEqual(str(self.classroom), '1-1')
        self.assertIn(self.teacher, self.classroom.teachers.all())
        self.assertIn(self.student, self.classroom.students.all())

    def test_course_model(self):
        """Courseモデルの__str__とリレーションシップをテスト"""
        self.assertEqual(str(self.course), '1-1:Math')
        self.assertEqual(self.course.classroom, self.classroom)
        self.assertIn(self.teacher, self.course.teachers.all())

    def test_assignment_model(self):
        """Assignmentモデルの__str__、デフォルト値、リレーションシップをテスト"""
        self.assertEqual(str(self.assignment), 'Math Homework')
        # statusフィールドのデフォルト値が0（未提出）であることを確認
        self.assertEqual(self.assignment.status, 0)
        self.assertEqual(self.assignment.course, self.course)
        self.assertEqual(self.assignment.student, self.student)

    def test_model_relationships_reverse(self):
        """モデルの逆参照リレーションシップをテスト"""
        # Teacherから関連オブジェクトを取得
        self.assertIn(self.classroom, self.teacher.classrooms_teachers.all())
        self.assertIn(self.course, self.teacher.courses_teachers.all())
        # Studentから関連オブジェクトを取得
        self.assertIn(self.classroom, self.student.classrooms_students.all())
        self.assertIn(self.assignment, self.student.assignments.all())