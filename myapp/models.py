from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Course(models.Model):
    order = models.IntegerField()
    code_name = models.CharField(max_length=10)
    name = models.CharField(max_length=70)
    author = models.CharField(max_length=20)
    img = models.ImageField(blank=True, upload_to='static/img')
    content = RichTextUploadingField(default='isi')

    def  __str__(self):
        return '[%s] %s' % (self.code_name, self.order)

class Lesson(models.Model):
    order = models.IntegerField()
    code_name = models.CharField(max_length=10)
    materi = models.CharField(max_length=20)
    name = models.CharField(max_length=70, default='')
    img = models.ImageField(blank=True, upload_to='static/img')
    content = RichTextUploadingField()

    def  __str__(self):
        return '[%s] %s' % (self.code_name, self.order)