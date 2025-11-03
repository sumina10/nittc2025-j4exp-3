from django import forms
from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _  

class UserCsvImportForm(forms.Form):
    csv_file = forms.FileField(
        label=_('CSVファイルを選択'),
        help_text=_('最大ファイルサイズ: 1MB'),
        max_length=1 * 1024 * 1024,
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

    password = forms.CharField(
        label=_('仮パスワード'),
        help_text=_('一律に発行する仮パスワードを入力してください'),
        required=True,
        widget=forms.PasswordInput(
        ),
    )