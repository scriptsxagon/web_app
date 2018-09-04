from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import UpdateView,ListView
from myapp.models import Course, Lesson
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from myapp.forms import SignUpForm

def index(request):
    course = Course.objects.all().order_by('order')
    lesson = Lesson.objects.all().order_by('order')
    return render(request,'index.html',{'courses': course, 'lessons': lesson})

def signup(request):
            if request.method == 'POST':
                form = SignUpForm(request.POST)
                if form.is_valid():
                    form.save()
                    username = form.cleaned_data.get('username')
                    raw_password = form.cleaned_data.get('password1')
                    user = authenticate(username=username, password=raw_password)
                    login(request, user)
                    return redirect('index')
            else:
                form = SignUpForm()
            return render(request, 'registration/signup.html', {'form': form})
