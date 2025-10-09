from django.db import models

class User(models.Model):
    passWord= models.CharField(max_length=16)
    

class Course(models.Model):
    name = models.CharField(max_length=16)

class Assignment(models.Model):
    title = models.CharField(max_length=16)
    description = models.TextField()
    dueDate = models.DateTimeField(auto_now=False)
    status = models.CharField(max_length=8)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

