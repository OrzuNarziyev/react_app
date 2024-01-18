import cv2
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



r = redis.Redis(
    host=settings.REDIS_HOST,
    db=settings.REDIS_DB,
    port=settings.REDIS_PORT
)

channel_layer = get_channel_layer()
channel_name = 'chat_test'


class Cameo(object):

    '''
    window - window name
    camera - index camera or url rtsp
    '''

    def __init__(self, window='Camera 1', url=0, mirror=True):
        self._windowManager = WindowManager(f'camera {window}',
                                            self.onKeypress)
        self.cap = cv2.VideoCapture(url)
        # self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        # self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
        self._captureManager = CaptureManager(
            self.cap,self._windowManager, shouldMirrorPreview=mirror)
        
        # self._curveFilter = filters.BGRPortraCurveFilter()


    def run(self, threadID=None):

        """Run the main loop."""

        self._windowManager.createWindow()
        while True:
            self._captureManager.enterFrame()
            frame = self._captureManager.frame
            channel_name = f"chat_camera{threadID}"
            # try:
            #     send_websocket(frame=frame, channel_name=channel_name)
            # except:
            #     print('pass')


            if frame is not None:
                # print('self')
                pass
                # await send_websocket(frame=frame, channel_name=channel_name)
                # filters.strokeEdges(frame, frame)
                # self._curveFilter.apply(frame, frame)

            self._captureManager.exitFrame(channel_name)
            self._windowManager.processEvents()
            time.sleep(.1)



    def onKeypress(self, keycode):
        # pass

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
        self.start()



    def run(self) -> None:
        # time.sleep(1)
        self.camera.run(self.threadID)



class ThreadSerial(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.serial = SerialSocket()
        self.start()

    
    def run(self):
        self.serial.run()

if __name__== "__main__":
    threads = []

    cam_list = CameraIp.objects.all()
    threadSerial = ThreadSerial()
    thread2 = ThreadCamera(2, 0)
    thread2.join()


    # cam_list=[
    #     "rtsp://admin:A12345678@10.73.100.46/:554//", "rtsp://admin:S@lom123456!@10.73.100.41:554//"
    #     ]
    
    # for i , cam  in enumerate(cam_list):
    #     thread1 = ThreadCamera(i, cam)
    #     threads.append(thread1)

    
    # for i in threads:
    #     i.join()
    # cam = Cameo('camera 1' ,"rtsp://admin:A12345678@10.73.100.47:554//", False)
    # cam.run(1)

    # thread1 = ThreadCamera(1, cam_list[2].rtsp)

    # thread1.join()
    # thread2.join()

    




