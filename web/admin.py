from django.contrib import admin
from .models import Post, Comment

class CommentAdminInline(admin.TabularInline):
    model = Comment
    fields = ['text',]
    extra = 0

class PostAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'pub_date', 'is_enabled','created_time']
    inlines = [CommentAdminInline,]
    
    
admin.site.register(Post, PostAdmin)
# admin.site.register(Comment)

    
# Register your models here.
