from django.test import TestCase
from django.utils import timezone
from accounts.models import Teacher, Student
from task.models import ClassRoom, Course, Assignment

class TaskModelsTest(TestCase):
    """
    taskアプリケーションのモデルをテストする
    """

    @classmethod
    # setUpTestDataメソッドでユーザー、クラスルーム、コースを作成している。
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
        
# ここからテストケース
    # クラスルームモデルの検証 
    def test_classroom_model(self):
        """ClassRoomモデルの__str__とリレーションシップをテスト"""
        # オブジェクトを文字列に変換したとき、1年1組は1-1で表示されるか。
        self.assertEqual(str(self.classroom), '1-1')
        # 学生と教師が正しく関連づけられているか。
        self.assertIn(self.teacher, self.classroom.teachers.all())
        self.assertIn(self.student, self.classroom.students.all())

    # コースモデルの検証 
    def test_course_model(self):
        """Courseモデルの__str__とリレーションシップをテスト"""
        # オブジェクトを文字列に変換したとき、1-1:Mathで表示されるか。 
        self.assertEqual(str(self.course), '1-1:Math')
        # クラスルームと教員が正しく関連づけられているか。
        self.assertEqual(self.course.classroom, self.classroom)
        self.assertIn(self.teacher, self.course.teachers.all())

    # 課題モデルの検証
    def test_assignment_model(self):
        """Assignmentモデルの__str__、デフォルト値、リレーションシップをテスト"""
        # オブジェクトを文字列に変換したとき、Math Homeworkで表示されるか。
        self.assertEqual(str(self.assignment), 'Math Homework')
        # 課題を作成したとき、デフォルト値が0（未提出）であることを確認している。
        self.assertEqual(self.assignment.status, 0)
        # コースと生徒が正しく関連付けられているか。
        self.assertEqual(self.assignment.course, self.course)
        self.assertEqual(self.assignment.student, self.student)

    # モデル間の逆参照が正しく機能するか検証
    def test_model_relationships_reverse(self):
        """モデルの逆参照リレーションシップをテスト"""
        # Teacherから関連オブジェクトを取得
        # 教員オブジェクトから担当しているクラスルームの一覧を取得し、設定した教師が含まれていることを確認
        self.assertIn(self.classroom, self.teacher.classrooms_teachers.all())
        # 教員オブジェクトから担当しているコースの一覧を取得し、設定したがコースが含まれていることを確認
        self.assertIn(self.course, self.teacher.courses_teachers.all())
        # Studentから関連オブジェクトを取得
        # 生徒オブジェクトから所属しているクラスルームの一覧を取得し、設定した生徒が含まれていることを確認
        self.assertIn(self.classroom, self.student.classrooms_students.all())
        # 生徒オブジェクトから所属している課題の一覧を取得し、登録した課題が含まれていることを確認
        self.assertIn(self.assignment, self.student.assignments.all())