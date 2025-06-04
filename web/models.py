from django.db import models
from django.template.defaultfilters import title

class Login(models.Model):
    username = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=50, null=False)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}- {}' .format(self.id, self.username)


    

    

    
    
# Create your models here.
