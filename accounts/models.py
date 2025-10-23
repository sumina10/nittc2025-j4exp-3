from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    カスタムユーザーモデル用のマネージャー
    emailの代わりにuser_idを主な識別子として使用
    """
    def create_user(self, user_id, password=None, **extra_fields):
        if not user_id:
            raise ValueError(_('ユーザーIDを設定してください'))
        
        user = self.model(user_id=user_id, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id, password=None, **extra_fields):
        extra_fields.setdefault('is_teacher', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_teacher') is not True:
            raise ValueError(_('Superuserはis_teacher=Trueである必要があります'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuserはis_superuser=Trueである必要があります'))

        return self.create_user(user_id, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    カスタムユーザーモデル
    AbstractBaseUserを継承し、user_idをユーザー識別子として使用
    """
    # user_idをユニークな識別子として使用
    user_id = models.CharField(
        _('ユーザーID'),
        max_length=30,
        unique=True,
        help_text=_('ログインに使用するユニークなID'),
        error_messages={
            'unique': _("このユーザーIDは既に使用されています"),
        },
    )
    
    # 個人情報フィールド
    first_name = models.CharField(_('名'), max_length=30, blank=True)
    last_name = models.CharField(_('姓'), max_length=150, blank=True)
    
    # ユーザー種別
    is_teacher = models.BooleanField(
        _('教員'),
        default=False,
        help_text=_('教員の場合はTrue、学生の場合はFalse'),
    )
    
    # 権限フィールド
    is_superuser = models.BooleanField(
        _('スーパーユーザー権限'),
        default=False,
        help_text=_('管理サイトにログインできるかどうか'),
    )

    is_active = models.BooleanField(
        _('有効'),
        default=True,
        help_text=_('このユーザーがアクティブかどうか。アカウント削除の代わりに無効化する場合に使用'),
    )
    
    # 重要な日付
    date_joined = models.DateTimeField(_('登録日'), default=timezone.now)
    
    # ユーザー名の代わりにuser_idを使用
    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = []
    
    objects = CustomUserManager()
    
    def __str__(self):
        return self.user_id
    
    def get_full_name(self):
        """
        ユーザーのフルネームを返す
        """
        full_name = f"{self.first_name} {self.last_name}"
        return full_name.strip()

    def get_short_name(self):
        """
        ユーザーの短縮名を返す
        """
        return self.first_name
    
    @property
    def is_staff(self):
        """
        管理サイトへのアクセス権限を持つかどうか
        スーパーユーザーは自動的に管理サイトへのアクセス権限を持つ
        """
        return self.is_superuser
    
    class Meta:
        verbose_name = _('ユーザー')
        verbose_name_plural = _('ユーザー')


class TeacherManager(CustomUserManager):
    """教員のみを取得するマネージャー"""
    def get_queryset(self):
        return super().get_queryset().filter(is_teacher=True)

class Teacher(CustomUser):
    """教員モデル"""

    objects = TeacherManager()
    
    class Meta:
        proxy = True
        verbose_name = _('教員')
        verbose_name_plural = _('教員')
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.is_teacher = True
        super().save(*args, **kwargs)
    
    @classmethod
    def get_queryset(cls, queryset=None):
        """教員のみをフィルタリング"""
        if queryset is None:
            queryset = CustomUser.objects.all()
        return queryset.filter(is_teacher=True)

class StudentManager(CustomUserManager):
    """学生のみを取得するマネージャー"""
    def get_queryset(self):
        return super().get_queryset().filter(is_teacher=False)

class Student(CustomUser):
    """学生モデル"""

    objects = StudentManager()
    
    class Meta:
        proxy = True
        verbose_name = _('学生')
        verbose_name_plural = _('学生')
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.is_teacher = False
        super().save(*args, **kwargs)
    
    @classmethod
    def get_queryset(cls, queryset=None):
        """学生のみをフィルタリング"""
        if queryset is None:
            queryset = CustomUser.objects.all()
        return queryset.filter(is_teacher=False)
