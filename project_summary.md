Here is an extended, in-depth, and detailed markdown summary of the provided content for a technical audience.

### **Project Overview: In-Class Assignment Management System**

This document provides a technical summary of the "クラス内課題管理システム" (In-Class Assignment Management System), a web application built using the Django framework. The system's primary goal is to provide a platform for students, teachers, and administrators to manage class assignments within an educational institution.

**Inferred Project Goals & Usage:**
*   **Goal**: To create a role-based system for assignment submission and tracking. Students submit assignments, teachers monitor progress, and administrators manage user accounts and system data.
*   **Usage**: The application is intended for an educational environment where students and teachers have distinct responsibilities. Administrators (office staff) are expected to handle initial setup and bulk user registration via CSV files. A key functional requirement is the ability to identify students who have not registered for an assignment that their peers have, suggesting a focus on participation tracking.

**Technology Stack:**
*   **Backend Framework**: Django `5.2.7`
*   **Frontend Framework**: `django-bootstrap5` `23.1.0` for UI components and styling.

---

### **System Architecture and Key Components**

The project is structured as a standard Django project (`nittc`) containing multiple applications, primarily `accounts` and `task`. The architecture emphasizes a clear separation of concerns, with the `accounts` app handling all user-related logic and the `task` app managing the core academic entities.

#### **1. Requirements Specification (`question.md`)**

This file documents the initial client-developer dialogue and establishes foundational requirements:
*   **User Roles**: The system must support three distinct roles: **Student**, **Teacher**, and **Administrator**.
*   **Authentication**: User authentication is to be performed using a unique `user_id`, not an email address.
*   **Bulk User Creation**: A critical feature is the ability for administrators to import student and teacher data in bulk from CSV files.
*   **Core Feature - "Unregistered Student" Tracking**: The system must be able to identify students who have not engaged with an assignment that others in their cohort have. This implies logic for tracking assignment participation at a class or course level.
*   **Data-Driven Configuration**: Course distinctions (e.g., first vs. second semester) should be derived from the data within the imported CSV files rather than being hardcoded in the application logic.
*   **Flexible Task Creation**: Students are expected to define the content of their tasks, providing flexibility over predefined assignment templates.

#### **2. `accounts` Application: User Management and Authentication**

This application is the cornerstone of the system, implementing a custom user model and advanced administrative features.

##### **a. Data Models (`accounts/models.py`)**

The data model design is a key architectural choice, using a single database table for all users, differentiated by a role flag and exposed through proxy models.

*   **`CustomUser` Model**:
    *   **Inheritance**: Inherits from `AbstractBaseUser` and `PermissionsMixin`. This choice provides maximum flexibility by allowing complete replacement of the default `username` field.
    *   **`USERNAME_FIELD = 'user_id'`**: The `user_id` `CharField` is designated as the unique identifier for authentication.
    *   **`is_teacher` (BooleanField)**: This flag is the central mechanism for distinguishing between teacher and student roles. It is fundamental to the system's role-based access control.
    *   **`is_staff` Property**: Overridden to return the value of `is_superuser`, effectively restricting access to the Django admin site to only superusers.

*   **Proxy Models (`Teacher` and `Student`)**:
    *   **Purpose**: These models (`proxy = True`) provide distinct interfaces for teacher and student objects within the Django ORM and admin panel **without creating separate database tables**. All users are stored in the `accounts_customuser` table. This is an efficient way to model roles that share the same underlying data structure but have different behaviors or administrative representations.
    *   **Custom Managers (`TeacherManager`, `StudentManager`)**: Each proxy model is equipped with a manager that automatically filters the base `CustomUser` queryset. For example, `Teacher.objects.all()` is equivalent to `CustomUser.objects.filter(is_teacher=True)`.

##### **b. Admin Interface (`accounts/admin.py`)**

The Django admin is heavily customized to serve as a powerful user management dashboard.

*   **Custom Admin Forms (`UserCreationForm`, `UserChangeForm`)**: These forms are tailored for the `CustomUser` model, handling `user_id` as the primary identifier and implementing password confirmation and hashing logic.
*   **Role-Specific Admin Views (`TeacherAdmin`, `StudentAdmin`)**:
    *   These classes inherit from a base `CustomUserAdmin` and are registered with their respective proxy models.
    *   `get_queryset()` is overridden in each to ensure that the admin list view for "Teachers" only displays users with `is_teacher=True`, and the "Students" view only shows those with `is_teacher=False`.
    *   `save_model()` is overridden to automatically set the `is_teacher` flag correctly when a new user is created through that specific admin interface.

*   **CSV Bulk Import Functionality**:
    *   A custom admin view, `import_csv`, is added to both `TeacherAdmin` and `StudentAdmin`, providing a UI for bulk user creation.
    *   The implementation for `StudentAdmin` is highly optimized for performance and data integrity:
        1.  **Transactional Integrity**: The entire operation is wrapped in `transaction.atomic()`, ensuring that the import is an all-or-nothing process. If any part fails, the entire transaction is rolled back.
        2.  **Performance Optimization**: To avoid the N+1 query problem, all existing `user_id`s and `ClassRoom` objects are pre-fetched into memory with single database queries before the main loop begins.
        3.  **Bulk Creation**: `Student.objects.bulk_create()` is used to insert all new student records into the database with a single SQL `INSERT` statement, drastically improving performance over creating objects one by one in a loop.
        4.  **Efficient M2M Handling**: The many-to-many relationship between students and classrooms is populated efficiently by creating through-model instances in a list and then using `bulk_create` on the through-model directly.
    *   The teacher import functionality is explicitly marked as incomplete with a `raise NotImplementedError`, indicating it is a planned feature.

##### **c. Views, URLs, and Access Control (`accounts/views.py`, `accounts/urls.py`, `accounts/mixins.py`)**

*   **Authentication Views**: Standard Django `LoginView` and `LogoutView` are used for handling user sessions.
*   **Profile Views**: `ProfileView` (`DetailView`) displays user information, dynamically adapting the context to show classroom details for either a student or a teacher.
*   **Role-Based Access Mixins**: `StudentRequiredMixin` and `TeacherRequiredMixin` are custom access control mixins. They check the `is_teacher` flag on the request's user object and deny access if the user's role does not match, providing a simple and reusable mechanism for securing views.

##### **d. Database Migrations (`accounts/migrations/`)**

The migration history reveals an evolution in the project's permission strategy.
*   `0001_initial.py`: Initially defined custom permissions (e.g., `create_assignment`) directly on the meta options of the proxy models.
*   `0002_alter_student_options_alter_teacher_options.py`: This migration explicitly **removes** the custom permissions defined earlier. This suggests a design pivot, possibly towards using the role-based mixins, Django's built-in group/permission system, or another mechanism for authorization rather than model-level permissions.

#### **3. `task` Application: Core Academic Functionality**

This application manages the central entities of the system: classrooms, courses, and assignments.

##### **a. Data Models (`task/models.py`)**

The schema defines the relationships between academic entities and users.

*   **`ClassRoom`**: Represents a class group. It has `ManyToManyField`s to both `Teacher` and `Student`, allowing for flexible associations (e.g., multiple teachers per class).
*   **`Course`**: Represents a subject. It is linked to teachers via a `ManyToManyField` and to a specific `ClassRoom` via a `ForeignKey`.
*   **`Assignment`**: The central transactional model.
    *   It is linked to a single `Student` and a single `Course` via `ForeignKey`s.
    *   It includes a `status` field with predefined integer choices (`STATUS_CHOICES`) to represent the submission lifecycle (e.g., Not Submitted, Submitted, Accepted, Resubmit).
    *   The model includes standard fields like `title`, `description`, and `due_date`.

##### **b. Views (`task/views.py`) and Forms (`task/forms.py`)**

The business logic is implemented using Django's class-based views (CBVs), secured by the custom role-based mixins from the `accounts` app.

*   **Student Views**:
    *   `StudentAssignmentView` (`ListView`): Displays a list of assignments filtered to show only those belonging to the currently logged-in student.
    *   `CreateAssignment` (`CreateView`): Allows a student to create a new assignment. The associated `AssignmentCreateForm` dynamically filters the "course" dropdown to show only courses available in the student's registered classrooms.
    *   `StudentAssignmentEditView` (`UpdateView`): Allows a student to edit their own assignments. It includes a critical security check in `get_object` to ensure a student can only edit their own assignments, raising `PermissionDenied` on unauthorized attempts.

*   **Teacher Views**:
    *   `TeacherAssignmentView` (`ListView`): Provides a comprehensive view for teachers. The `get_queryset` method implements complex logic to find all students in all classrooms and courses taught by the logged-in teacher and then retrieves all assignments belonging to that group of students.
    *   `TeacherLogView` (`ListView`): A view that leverages the `django-auditlog` package to display a chronological log of all changes made to the system's data models, providing an audit trail for teachers.

##### **c. UI Templates (`templates/`)**

The templates use Bootstrap 5 for a clean and responsive user interface, with clear distinctions between student and teacher views.

*   **`student_home.html`**: A dashboard for students showing their assignments in a table.
*   **`teacher_home.html`**: A dashboard for teachers showing assignments from all their students, with an additional column for "Student ID".
*   **`log_for_teacher.html`**: A template for displaying the audit log in a structured table, showing the actor, action, target object, and a description of the changes.
*   **`admin/csv_form.html`**: A custom admin template providing the UI for the CSV file upload feature, complete with instructions and the expected file format.