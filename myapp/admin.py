from django.contrib import admin
from .models import Course, Lesson, Event, Learn

admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(Learn)
admin.site.register(Event)
