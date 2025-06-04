from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def Login(request):
    return render(request, 'instagram_login.html')
# def user(request):
#     return HttpResponse("Hello, world. You're at the polls index.")
# def home(request):
#     return HttpResponse("Hello, world. You're at the polls index.")