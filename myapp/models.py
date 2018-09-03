from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Course(models.Model):
    order = models.IntegerField(default='0')
    code_name = models.CharField(max_length=10)
    name = models.CharField(max_length=70)
    author = models.CharField(max_length=20, default='a')
    img = models.ImageField(blank=True, upload_to='static/img')
    content = RichTextUploadingField()

    def  __str__(self):
        return '[%s] %s' % (self.code_name, self.name)
