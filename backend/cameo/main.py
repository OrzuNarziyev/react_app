import os
import cv2
import sys
sys.path.append('/home/scale/projects/react_app/backend')


import base64
import json
import time
from threading import Event, Thread
from asgiref.sync import async_to_sync


import channels.layers
from channels.layers import get_channel_layer



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')


import django
django.setup()


from django.conf import settings


import redis
from django.contrib.auth.models import User


r = redis.Redis(
    host=settings.REDIS_HOST,
    db=settings.REDIS_DB,
    port=settings.REDIS_PORT
)


channel_layer = get_channel_layer()
channel_name = 'chat_test'



cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)


def thread_capture():
    # while cap.isOpened():
    # ret1, img1 = cap1.read()
    # if cap.isOpened():
    ret, img = cap.read()
    _, jpeg = cv2.imencode('.jpg', img)
    _, jpeg_2 = cv2.imencode('.jpg', img)

    b64_image = base64.b64encode(jpeg)
    async_to_sync(channel_layer.group_send)(
        channel_name, {"type": "chat.stream",
                        "message": [b64_image, b64_image, b64_image, b64_image],
                    
                        }
    )
    # else:
    #     cap.release()
    #     cv2.destroyAllWindows()

if __name__ == '__main__':
    while cap.isOpened():
        thread_capture()

# def cap():
while cap.isOpened():
    # ret1, img1 = cap1.read()
    time.sleep(.040)
    ret, img = cap.read()

    # cv2.imshow('img', img)


    _, jpeg = cv2.imencode('.jpg', img)
    _, jpeg_2 = cv2.imencode('.jpg', img)

    b64_image = base64.b64encode(jpeg)
    async_to_sync(channel_layer.group_send)(
        channel_name, {"type": "chat.stream",
                        "message": [b64_image, b64_image, b64_image,b64_image],
                     
                        }
    )

