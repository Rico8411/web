from django.db import models
from django.template.defaultfilters import title

class Post(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField(blank=True)
    is_enabled = models.BooleanField(default=False)
    pub_date = models.DateField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}- {}' .format(self.id, self.title)


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)


    
    

    
    
# Create your models here.
