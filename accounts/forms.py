from django import forms
from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _  

class CsvImportForm(forms.Form):
    csv_file = forms.FileField(
        label=_('CSVファイルを選択'),
        help_text=_('最大ファイルサイズ: 100MB'),
        max_length=100 * 1024 * 1024,
        required=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=['csv']
            )
        ],
        widget=forms.FileInput(
            attrs={'accept': '.csv'}
        )
    )