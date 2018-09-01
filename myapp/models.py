from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=70)
    summary = RichTextUploadingField()
    order = models.IntegerField()


    def  __str__(self):
        return '[%s] %s' % (self.code, self.name)

class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    order = models.IntegerField()
    name = models.CharField(max_length=70)
    # summary = RichTextUploadingField()
    konten = RichTextUploadingField()

    def  __str__(self):
        return '%s - %d. %s' % (self.course, self.order, self.name)

class Isiforum(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=70)
    summary = RichTextUploadingField()
    order = models.IntegerField()


    def  __str__(self):
        return '[%s] %s' % (self.code, self.name)

class Subisi(models.Model):
    isiforum = models.ForeignKey(Isiforum, on_delete=models.CASCADE)
    order = models.IntegerField()
    name = models.CharField(max_length=70)
    # summary = RichTextUploadingField()
    konten = RichTextUploadingField()

    def  __str__(self):
        return '%s - %d. %s' % (self.isiforum, self.order, self.name)
