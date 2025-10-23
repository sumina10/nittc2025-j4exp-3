# あなたのプロジェクト名/tests/test_models.py
from django.test import TestCase
from django.utils import timezone
from datetime import timedelta

# モデルが定義されている場所に合わせてインポートパスを修正してください
from task.models import ClassRoom, Course, Assignment 
from accounts.models import Teacher, Student 


class SchoolModelTest(TestCase):
    """
    ClassRoom, Course, Assignmentモデルのユニットテストを行う
    """

    @classmethod
    def setUpTestData(cls):
        """
        テストケース全体で利用するデータを一度だけ設定
        """
        # 依存関係にあるTeacherとStudentモデルのインスタンスを作成
        cls.teacher1 = Teacher.objects.create_user(user_id='test_teacher1', first_name='Test', last_name='Teacher1', password='password', is_teacher=True)
        cls.student1 = Student.objects.create_user(user_id='test_student1', first_name='Test', last_name='Student1', password='password')
        cls.student2 = Student.objects.create_user(user_id='test_student2', first_name='Test', last_name='Student2', password='password')

        # ClassRoomを作成
        cls.classroom1 = ClassRoom.objects.create(grade=1, class_number=1)
        cls.classroom1.teachers.add(cls.teacher1)
        cls.classroom1.students.add(cls.student1, cls.student2)

        # Courseを作成
        cls.course1 = Course.objects.create(
            title='Math',
            classroom=cls.classroom1
        )
        cls.course1.teachers.add(cls.teacher1)

        # Assignmentを作成
        cls.assignment1 = Assignment.objects.create(
            title='Midterm Report',
            description='Complete the report by Friday.',
            due_date=timezone.now() + timedelta(days=7),  # 7日後の日付
            status=0,
            course=cls.course1,
            student=cls.student1
        )

    # -----------------------------------------------------------------
    # ClassRoomモデルのテスト
    # -----------------------------------------------------------------
    
    def test_classroom_creation(self):
        """ClassRoomが正しく作成され、フィールド値が正しいか検証"""
        classroom = self.classroom1
        self.assertEqual(classroom.grade, 1)
        self.assertEqual(classroom.class_number, 1)
        self.assertEqual(str(classroom), '1-1')

    def test_classroom_teachers_relationship(self):
        """ClassRoomとTeacherの多対多リレーションシップを検証"""
        self.assertIn(self.teacher1, self.classroom1.teachers.all())
        # 逆参照 (TeacherからClassRoom)
        self.assertIn(self.classroom1, self.teacher1.classrooms_teachers.all())

    def test_classroom_students_relationship(self):
        """ClassRoomとStudentの多対多リレーションシップを検証"""
        self.assertEqual(self.classroom1.students.count(), 2)
        self.assertIn(self.student1, self.classroom1.students.all())
        self.assertIn(self.classroom1, self.student1.classrooms_students.all()) # student1がclassroom1に所属していることを逆参照で確認


    # -----------------------------------------------------------------
    # Courseモデルのテスト
    # -----------------------------------------------------------------

    def test_course_creation(self):
        """Courseが正しく作成され、titleが正しいか検証"""
        course = self.course1
        self.assertEqual(course.title, 'Math')
        self.assertEqual(str(course), '1-1:Math')
        
    def test_course_classroom_foreignkey(self):
        """CourseからClassRoomへの外部キーリレーションシップを検証"""
        self.assertEqual(self.course1.classroom, self.classroom1)
        # 逆参照 (ClassRoomからCourse)
        self.assertIn(self.course1, self.classroom1.courses.all())
        
    def test_course_teachers_relationship(self):
        """CourseとTeacherの多対多リレーションシップを検証"""
        self.assertIn(self.teacher1, self.course1.teachers.all())
        self.assertIn(self.course1, self.teacher1.courses_teachers.all())


    # -----------------------------------------------------------------
    # Assignmentモデルのテスト
    # -----------------------------------------------------------------

    def test_assignment_creation(self):
        """Assignmentが正しく作成され、フィールド値が正しいか検証"""
        assignment = self.assignment1
        self.assertEqual(assignment.title, 'Midterm Report')
        self.assertEqual(assignment.status, 0)
        self.assertEqual(str(assignment), 'Midterm Report')

    def test_assignment_status_choices(self):
        """Assignmentのstatusが定義されたCHOICESに含まれるか検証"""
        # デフォルト値 0 ('未提出') が正しいか
        self.assertEqual(self.assignment1.get_status_display(), '未提出')
        
        # 値を変更して検証
        self.assignment1.status = 1
        self.assignment1.save()
        self.assertEqual(self.assignment1.get_status_display(), '提出済み')

    def test_assignment_course_foreignkey(self):
        """AssignmentからCourseへの外部キーリレーションシップを検証"""
        self.assertEqual(self.assignment1.course, self.course1)
        # 逆参照 (CourseからAssignment)
        self.assertIn(self.assignment1, self.course1.assignments.all())
        
    def test_assignment_student_foreignkey(self):
        """AssignmentからStudentへの外部キーリレーションシップを検証"""
        self.assertEqual(self.assignment1.student, self.student1)
        # 逆参照 (StudentからAssignment)
        self.assertIn(self.assignment1, self.student1.assignments.all())