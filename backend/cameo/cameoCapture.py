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

# net = cv2.dnn.readNetFromCaffe('backend/cameo/textbox.prototxt', 'backend/cameo/TextBoxes_icdar13.caffemodel')



# def text_det(image, index):
# 	start = time.time()
# 	# image = cv2.UMat(image)
# 	# image = cv2.pyrDown(image)
# 	image = image.get()
	
# 	orig = image
# 	(H, W) = image.shape[:2]

# 	(newW, newH) = (640, 320)
# 	rW = W / float(newW)
# 	rH = H / float(newH)

# 	image = cv2.resize(image, (newW, newH))
	

# 	(H, W) = image.shape[:2]


# 	layerNames = [
# 		"feature_fusion/Conv_7/Sigmoid",
# 		"feature_fusion/concat_3"]


# 	blob = cv2.dnn.blobFromImage(image, 1.0, (W, H),
# 		(123.68, 116.78, 103.94), swapRB=True, crop=False)


# 	net.setInput(blob)
# 	(scores, geometry) = net.forward(layerNames)

# 	(numRows, numCols) = scores.shape[2:4]
# 	rects = []
# 	confidences = []

# 	for y in range(0, numRows):

# 		scoresData = scores[0, 0, y]
# 		xData0 = geometry[0, 0, y]
# 		xData1 = geometry[0, 1, y]
# 		xData2 = geometry[0, 2, y]
# 		xData3 = geometry[0, 3, y]
# 		anglesData = geometry[0, 4, y]


# 		# ustunlar soni bo'ylab aylanish
# 		for x in range(0, numCols):
# 			# agar bizning ballimiz etarli ehtimolga ega bo'lmasa, unga e'tibor bermang
# 			if scoresData[x] < 0.5:

# 				continue


# 			# ofset faktorini bizning natijaviy xususiyat xaritalarimiz kabi hisoblang
# 			# kiritilgan rasmdan 4x kichikroq boʻlsin
# 			(offsetX, offsetY) = (x * 4.0, y * 4.0)


# 			# extract the rotation angle for the prediction and then
# 			# compute the sin and cosine

# 			angle = anglesData[x]
# 			cos = np.cos(angle)
# 			sin = np.sin(angle)

# 			# use the geometry volume to derive the width and height of
# 			# the bounding box
# 			h = xData0[x] + xData2[x]
# 			w = xData1[x] + xData3[x]

# 			# compute both the starting and ending (x, y)-coordinates for
# 			# the text prediction bounding box
# 			endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
# 			endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
# 			startX = int(endX - w)
# 			startY = int(endY - h)

# 			# add the bounding box coordinates and probability score to
# 			# our respective lists
# 			rects.append((startX, startY, endX, endY))
# 			confidences.append(scoresData[x])
# 	boxes = non_max_suppression(np.array(rects),probs=confidences)

# 	for (startX, startY, endX, endY) in boxes:
# 		# if not (60 < abs(startY-endY) < 100):
# 		# 	continue



# 		startX = int(startX * rW)
# 		startY = int(startY * rH)
# 		endX = int(endX * rW)
# 		endY = int(endY * rH)

# 		h = abs(endY - startY)
# 		w = abs(endX - startX)

# 		if not (70 < h < 110):
# 			continue

# 		if w < 100:
# 			continue


# 		# draw the bounding box on the image
# 		cv2.rectangle(orig, (startX, startY), (endX, endY), (0, 255, 0), 3)
# 		cv2.putText(orig, 'H:%d W:%d '%(int(endY-startY), int(endX-startX)), (startX, startY), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
# 	end = time.time()
# 	print(end-start)
# 	# send_websocket(orig, index)
# 	group_name = f'chat_camera{index}'
# 	# send_websocket(frame=orig, group_name=group_name)
# 	# cv2.imshow(f'frame{index}', orig)
# 	return orig


# print(end-start)
# send_websocket(orig, index)

# return orig
# cv2.imshow(f'frame{index}', orig)


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


class Cameo(object):
    '''
    window - window name
    camera - index camera or url rtsp
    '''

    def __init__(self, window='1', url=0, mirror=True, net=None):
        # self._windowManager = WindowManager(f'camera {window}',
        #                                     self.onKeypress)

        self.cap = cv2.VideoCapture(url, cv2.CAP_ANY)

        group_name = f'chat_camera{window}'
        self._captureManager = CaptureManager(
            self.cap, shouldMirrorPreview=mirror, group_name=group_name, net=net)
        
        # config for dnn

        self.net = cv2.dnn.readNet("backend/cameo/frozen_east_text_detection.pb")
        self.net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
        self.net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)

        # self._curveFilter = filters.BGRPortraCurveFilter()

    def run(self, threadID):

        """Run the main loop."""

        # self._windowManager.createWindow()

        while True:
            # time.sleep(0.04)
            self._captureManager.enterFrame()
            # group_name = f"chat_camera{threadID}"
            # success = self.cap.grab()

            # if success:
            #     _, frame = self.cap.read()
            #     frame = cv2.pyrDown(frame)

            frame = self._captureManager.frame

            if frame is not None:
                try:
                    pass
                    # lock.acquire()
                    # start = time.time()
                    # # roi = text_det(frame)
                    # # result = text_det(frame, 2)
                    # send_websocket(frame=frame, group_name=group_name)
                    # end_time = time.time()
                    # print(end_time-start)
                    # lock.release()
                except:
                    print('pass')
                # filters.strokeEdges(frame, frame)
                # self._curveFilter.apply(frame, frame)
            else:
                pass
            self._captureManager.exitFrame()
            # self._windowManager.processEvents()

    def onKeypress(self, keycode):

        """Handle a keypress.
        space  -> Take a screenshot.
        tab    -> Start/stop recording a screencast.
        escape -> Quit.
        """

        if keycode == 32:  # space
            self._captureManager.writeImage('screenshot.png')
        elif keycode == 9:  # tab
            if not self._captureManager.isWritingVideo:
                self._captureManager.startWritingVideo(
                    'screencast.avi')
            else:
                self._captureManager.stopWritingVideo()
        elif keycode == 27:  # escape
            self._windowManager.destroyWindow()


class ThreadCamera(threading.Thread):

    def __init__(self, threadId, url):
        threading.Thread.__init__(self)
        self.threadID = threadId
        self.url = url
        net = cv2.dnn.readNet("backend/cameo/frozen_east_text_detection.pb")
        net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
        net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)
        self.camera = Cameo(threadId, url, mirror=False, net=net)
        print('keldi')
        # self.start()

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


if __name__ == "__main__":
    threads = []

    cam_list = CameraIp.objects.filter(status=True)
    # threadSerial = ThreadSerial()


    # threadSerial.join()
    for i, cam in enumerate(cam_list):
        thread1 = ThreadCamera(int(i + 1), str(cam))
        thread1.start()
        threads.append(thread1)
    # thread1 = ThreadCamera(int(1), str('./video/10.73.100.92_01_20240118155802912.mp4'))
    # thread1.join()

    # threadSerial.join()
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
