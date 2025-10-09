from django.db import models

class User(models.Model):
    passWord= models.CharField(max_length=16)

class Course(models.Model):
    name = models.CharField(max_length=16)

class Assaignment(models.Model):
    title = models.CharField(max_length=16)
    description = models.TextField()
    dueDate = models.DateTimeField(auto_now=False)
    status = models.CharField(max_length = 8)
