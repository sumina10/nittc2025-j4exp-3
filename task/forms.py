from django.core.validators import FileExtensionValidator
from django.forms.widgets import DateTimeInput
from django.utils.translation import gettext_lazy as _
from django import forms
from django.utils import timezone


from .models import Assignment, Course

class AssignmentCreateForm(forms.ModelForm):
    class Meta:
        model = Assignment
        fields = ['title', 'description', 'due_date', 'course']
        widgets = {
            'due_date': DateTimeInput(attrs={'type': 'datetime-local'}, format='%Y-%m-%dT%H:%M'),
        }

    def clean_due_date(self):
        due_date = self.cleaned_data['due_date']
        if due_date and due_date <= timezone.now():
            raise forms.ValidationError("期限は現在よりも後の日時を指定してください")
        return due_date

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)        
        self.fields['course'].queryset = Course.objects.filter(
            classroom__students=user
        ).distinct()

class AssignmentEditForm(forms.ModelForm):
    class Meta:
        model = Assignment
        fields = ['title', 'description', 'due_date', 'status']
        widgets = {
            'due_date': DateTimeInput(attrs={'type': 'datetime-local'}, format='%Y-%m-%dT%H:%M'),
        }

class CsvImportForm(forms.Form):
    csv_file = forms.FileField(
        label=_("CSVファイルを選択"),
        help_text=_('最大ファイルサイズ: 1MB'),
        max_length=1 * 1024 * 1024,
        required=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=['csv']
            )
        ]
    )
