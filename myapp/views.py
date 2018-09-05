from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import UpdateView,ListView
from myapp.models import Course, Lesson, Event
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from myapp.forms import SignUpForm

def index(request):
    course = Course.objects.all().order_by('order')
    lesson = Lesson.objects.all().order_by('order')
    event = Event.objects.all()
    return render(request, 'index.html', {'courses': course,
                                          'lessons': lesson,
                                          'events': event}
                  )

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

def lesson(request,code_name_lesson):
    lessons = Lesson.objects.all()
    lesson = Lesson.objects.filter(code_name_lesson=code_name_lesson)
    return render (request, 'materi.html', {'lesson': lesson, 'lessons': lessons})


def course(request,code_name):
    courses = Course.objects.all()
    course = Course.objects.filter(code_name=code_name)
    return render (request, 'course.html', {'course': course, 'courses': courses})

