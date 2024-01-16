import cv2
import filters
from managers import WindowManager, CaptureManager

import os
import sys
sys.path.append('/home/scale/projects/react_app/backend')

import base64
import json
import time
from threading import Event, Thread
from asgiref.sync import async_to_sync
import asyncio
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from django.conf import settings

from channels.layers import get_channel_layer
import redis
from django.contrib.auth.models import User

r = redis.Redis(
    host=settings.REDIS_HOST,
    db=settings.REDIS_DB,
    port=settings.REDIS_PORT
)

channel_layer = get_channel_layer()
# channel_name = 'chat_test'

async def send_websocket(frame, channel_name='stream'):
        _, src = cv2.imencode('.jpg', frame)
        b64_image = base64.b64encode(src)
        # channel_layer.group_send(
        #     channel_name, {"type": f"chat.{channel}",
        #                     "message": [b64_image],
        #                     })
        
        await channel_layer.group_send(
            channel_name, {"type": f"chat.stream",
                            "message": [b64_image],
                            }
        )


class Cameo(object):

    '''
    window - window name
    camera - index camera or url rtsp
    '''

    def __init__(self, window='Camera 1', url=0, mirror=True):
        self._windowManager = WindowManager(f'camera {window}',
                                            self.onKeypress)
        self.cap = cv2.VideoCapture(url)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
        self._captureManager = CaptureManager(
            self.cap, self._windowManager, mirror)
        
        self._curveFilter = filters.BGRPortraCurveFilter()

    def between_callback(frame, channel_name):
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)

                loop.run_until_complete(send_websocket(frame, channel_name))
                loop.close()


    async def run(self, threadID):
        time.sleep(.5)

        """Run the main loop."""

        self._windowManager.createWindow()
        while self._windowManager.isWindowCreated:
            self._captureManager.enterFrame()
            frame = self._captureManager.frame
            channel_name = f"{threadID}"
            # self.between_callback(frame, channel_name=channel_name)
            # try:
            #     send_websocket(frame=frame, channel_name=channel_name)
            # except:
            #     print('pass')


            if frame is not None:
                print('self')
                await send_websocket(frame=frame, channel_name=channel_name)
                # filters.strokeEdges(frame, frame)
                # self._curveFilter.apply(frame, frame)

            self._captureManager.exitFrame()
            self._windowManager.processEvents()



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







class ThreadCamera(Thread):

    def __init__(self, threadId, url):
        Thread.__init__(self)
        self.threadID = threadId
        self.url = url
        self.camera = Cameo(threadId, url, False)

        # self.daemon = True


    def run(self) -> None:
        # time.sleep(1)
        self.camera.run(self.threadID)



if __name__== "__main__":
    threads = []


    cam_list=[
        "rtsp://admin:S@lom123456!@10.73.100.41:554//", 0
        ]

    for i, cam in enumerate(cam_list):
        thread1 = ThreadCamera(i+1,cam)
        threads.append(thread1)

    for i in threads:
        i.start()
    # for i, cam in enumerate(cam_list):
    #     thread1 = ThreadCamera(i, cam)
    #     threads.append(thread1)

    # for i in threads:
    #     i.start()
    

    # t1 = Thread(target=thread_camera(1, cam_list[0]))
    # t1.start()
    # t1.join()


    # t2 = Thread(target=thread_camera(2, 0))
    # t2.start()
    # t2.join()

    # camera1 = Cameo('camera 1', cam_list[0], False)
    # # camera2 = Cameo('camera 2', 0, False)
    # camera1.run(1)

    # camera2 = Cameo('camera 2', cam_list[0], False)
    # camera2.run(2)



    # camera2 = Cameo('camera 3', cam_list[1], False)
    # camera2.run(2)

    # camera3 = Cameo('camera 1', 0, False)
    # camera3.run(2)


    # for i, cam in enumerate(cam_list):
    #     thread1 = ThreadCamera(i, cam)
    #     threads.append(thread1)
    

    # for i in threads:
    #     i.start()
        # i.join()
    # while True:
    # t1 = Thread(target=camera1.run)
    # t1.start()
    # t1.join()

    # t2 = Thread(target=camera2.run)
    # t2.start()
    # t2.join()
    # for i in threads:
    #     i.start()
        # i.join()
    
    # while True:


    # for i, cam in enumerate(cam_list):
    #     thread1 = ThreadCamera(i, cam)
    #     threads.append(thread1)

    # for i in threads:
    #     i.start()
    

# not found icon
    # <i class="las la-exclamation-triangle"></i>


# from threading import Thread
# import cv2, time

# class ThreadedCamera(object):
#     def __init__(self, src=0):
#         self.capture = cv2.VideoCapture(src)
#         self.capture.set(cv2.CAP_PROP_BUFFERSIZE, 2)
       
#         # FPS = 1/X
#         # X = desired FPS
#         self.FPS = 1/30
#         self.FPS_MS = int(self.FPS * 1000)
        
#         # Start frame retrieval thread
#         self.thread = Thread(target=self.update, args=())
#         self.thread.daemon = True
#         self.thread.start()
        
#     def update(self):
#         while True:
#             if self.capture.isOpened():
#                 (self.status, self.frame) = self.capture.read()
#             time.sleep(self.FPS)
            
#     def show_frame(self, name):
#         send_websocket(self.frame)
#         # cv2.imshow(name, self.frame)
#         # cv2.waitKey(self.FPS_MS)


# def send_websocket(frame, channel='stream'):
#     _, src = cv2.imencode('.jpg', frame)
#     b64_image = base64.b64encode(src)
    
#     async_to_sync(channel_layer.group_send)(
#         channel_name, {"type": f"chat.{channel}",
#                         "message": [b64_image],
#                         }
#     )


# if __name__ == '__main__':
#     src = 'rtsp://admin:S@lom123456!@10.73.100.41:554//'
#     threaded_camera1 = ThreadedCamera(src)
#     threaded_camera2 = ThreadedCamera(src)
#     while True:
#         try:
#             threaded_camera1.show_frame('stream')
#             threaded_camera2.show_frame('stream1')
#         except AttributeError:
#             pass