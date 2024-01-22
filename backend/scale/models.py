from django.db import models

# Create your models here.
class CameraIp(models.Model):
    rtsp = models.CharField(max_length=255)
    status = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.rtsp
