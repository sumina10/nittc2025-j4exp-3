from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=16)

class Assignment(models.Model):
    title = models.CharField(max_length=16)
    description = models.TextField()
    dueDate = models.DateTimeField(auto_now=False)
    status = models.CharField(max_length=8)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)

class User(models.Model):
    passWord= models.CharField(max_length=16)
    assigment = models.ForeignKey(Assignment,on_delete=models.CASCADE)
