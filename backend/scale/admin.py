from django.contrib import admin
from .models import CameraIp
# Register your models here.

# admin.site.register(CameraIp)

@admin.register(CameraIp)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ['rtsp', 'status']
    list_editable = ('status',)