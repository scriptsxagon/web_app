from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Masukan email dengan benar.')
    name =  forms.CharField(max_length=50, required=False, help_text='Optional.')

    class Meta:
        model = User
        fields = ('username', 'email', 'name', 'password1', 'password2', )