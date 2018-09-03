from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=70)
    order = models.IntegerField()
    img = models.ImageField(blank=True, upload_to='static/img')
    content = RichTextUploadingField()

    def  __str__(self):
        return '[%s] %s' % (self.code, self.name)
