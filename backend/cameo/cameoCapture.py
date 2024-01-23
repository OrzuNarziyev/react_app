import cv2
import numpy as np
from imutils.object_detection import non_max_suppression
import filters
from managers import WindowManager, CaptureManager


import os
import sys

sys.path.append('/home/scale/projects/react_app/backend')

import base64
import json
import time
# from threading import Event, Thread
import threading
from asgiref.sync import async_to_sync
import asyncio

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from django.conf import settings

from channels.layers import get_channel_layer
import redis
from django.contrib.auth.models import User
from scale.models import CameraIp

from serialPort.ser import SerialSocket

from threading import Lock

lock = Lock()





r = redis.Redis(
    host=settings.REDIS_HOST,
    db=settings.REDIS_DB,
    port=settings.REDIS_PORT
)

channel_layer = get_channel_layer()
channel_name = 'chat_test'
def send_websocket(frame, group_name='camera'):
    _, src = cv2.imencode('.jpg', frame)
    b64_image = base64.b64encode(src)

    async_to_sync(channel_layer.group_send)(
        group_name, {"type": f"chat.stream",
                        "message": [b64_image],
                        }
    )

# config for dnn 
net = cv2.dnn.readNet("frozen_east_text_detection.pb")
net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)

class Cameo(object):

    '''
    window - window name
    camera - index camera or url rtsp
    '''

    def __init__(self, window='1', url=0, mirror=True):
        # self._windowManager = WindowManager(f'camera {window}',
        #                                     self.onKeypress)
        self.cap = cv2.VideoCapture(url)
        # self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        # self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

        self._captureManager = CaptureManager(
            self.cap, shouldMirrorPreview=mirror)
        
        # self._curveFilter = filters.BGRPortraCurveFilter()


    def run(self, threadID=None):

        """Run the main loop."""

        # self._windowManager.createWindow()
        while True:
                self._captureManager.enterFrame()
                frame = self._captureManager.frame
                group_name = f"chat_camera{threadID}"
                # success = self.cap.grab()
                # if success:
                #     ret, frame = self.cap.retrieve()
                #     frame = cv2.pyrDown(frame)
                    # src.upload(frame)
                    # frame = src.download()

                    # gpu_frame = src.upload(frame)

                    # frame = cv2.resize(frame, (0,0), fy=.3 , fx=.3)
                    # frame = cv2.pyrDown(frame)
                    # gray = cv2.cuda.cvtColor(gpu_frame, cv2.COLOR_BAYER_BG2BGR)
                    # print(gray.shape)
                    # frame = src.download()
                if frame is not None:
                    pass
                    # try:
                    #     lock.acquire()
                    #     send_websocket(frame=frame, group_name=group_name)
                    #     lock.release()
                    # except:
                    #     print('pass')
                    # filters.strokeEdges(frame, frame)
                    # self._curveFilter.apply(frame, frame)
                else:
                    pass
                self._captureManager.exitFrame(group_name)
                # self._windowManager.processEvents()



    def onKeypress(self, keycode):


        """Handle a keypress.
        space  -> Take a screenshot.
        tab    -> Start/stop recording a screencast.
        escape -> Quit.
        """


        if keycode == 32: # space
            self._captureManager.writeImage('screenshot.png')
        elif keycode == 9: # tab
            if not self._captureManager.isWritingVideo:
                self._captureManager.startWritingVideo(
                    'screencast.avi')
            else:
                self._captureManager.stopWritingVideo()
        elif keycode == 27: # escape
            self._windowManager.destroyWindow()


class ThreadCamera(threading.Thread):

    def __init__(self, threadId, url):
        threading.Thread.__init__(self)
        self.threadID = threadId
        self.url = url
        self.camera = Cameo(threadId, url, mirror=False)
        print('keldi')
        self.start()

    def run(self) -> None:
        self.camera.run(self.threadID)


class ThreadSerial(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.serial = SerialSocket()
        self.start()

    
    def run(self):
        print('run')
        self.serial.run()


if __name__== "__main__":
    threads = []
    cam_list = CameraIp.objects.filter(status=True)
    threadSerial = ThreadSerial()
    # threadSerial.join()
    for i, cam in enumerate(cam_list):
        thread1 = ThreadCamera(int(i+1), str(cam))
        threads.append(thread1)
    
    
    threadSerial.join()
    for i in threads:
        i.join()

    

    # thread1 = ThreadCamera(1, './video/10.73.100.92_01_20240118155802912.mp4')
    # thread1.join()



        
    

    # thread2.join()


    # cam_list=[
    #     "rtsp://admin:A12345678@10.73.100.46:554//", "rtsp://admin:S@lom123456!@10.73.100.41:554//"
    #     ]
    
    # for i , cam  in enumerate(cam_list):
    #     thread1 = ThreadCamera(i+1, cam)
    #     threads.append(thread1)

    
    # for i in threads:
    #     i.join()


    # cam = Cameo('camera 1' ,"rtsp://admin:A12345678@10.73.100.47:554//", False)
    # cam.run(1)

    # thread1 = ThreadCamera(1, cam_list[2].rtsp)

    # thread1.join()
    # thread2.join()

    




