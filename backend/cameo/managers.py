import cv2
import numpy
import time
import base64
import sys
import os
sys.path.append('/home/scale/projects/react_app/backend')
from asgiref.sync import async_to_sync

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

from asgiref.sync import async_to_sync
def send_websocket(frame, channel_name='camera'):
    _, src = cv2.imencode('.jpg', frame)
    b64_image = base64.b64encode(src)

    async_to_sync(channel_layer.group_send)(
        channel_name, {"type": f"chat.stream",
                        "message": [b64_image],
                        }
    )

class CaptureManager(object):

    def __init__(self, capture, previewWindowManager = None,
                 shouldMirrorPreview = False):

        self.previewWindowManager = previewWindowManager
        self.shouldMirrorPreview = shouldMirrorPreview

        self._capture = capture
        self._channel = 0
        self._enteredFrame = False
        self._frame = None
        self._imageFilename = None
        self._videoFilename = None
        self._videoEncoding = None
        self._videoWriter = None

        self._startTime = None
        self._framesElapsed = 0
        self._fpsEstimate = None

    @property
    def channel(self):
        return self._channel

    @channel.setter
    def channel(self, value):
        if self._channel != value:
            self._channel = value
            self._frame = None

    @property
    def frame(self):
        if self._enteredFrame and self._frame is None:
            _, self._frame = self._capture.retrieve(
                    self._frame, self.channel)
            self._frame = cv2.pyrDown(self._frame, (.5, .5))
        return self._frame

    @property
    def isWritingImage(self):
        return self._imageFilename is not None

    @property
    def isWritingVideo(self):
        return self._videoFilename is not None

    def enterFrame(self):
        """Capture the next frame, if any."""

        # But first, check that any previous frame was exited.
        assert not self._enteredFrame, \
            'previous enterFrame() had no matching exitFrame()'

        if self._capture is not None:

            self._enteredFrame = self._capture.grab()

    
    def put_text(self, frame):
        font = cv2.FONT_HERSHEY_SIMPLEX
        # print(int(self._capture.get(
        #                 cv2.CAP_PROP_FRAME_WIDTH)/2))
        size = (int(self._capture.get(
                        cv2.CAP_PROP_FRAME_WIDTH)-10),
                    int(self._capture.get(
                        cv2.CAP_PROP_FRAME_HEIGHT)-10))
        # org = (size[1], size[0])
        fontScale = 5
        color = (255, 0, 0)
        thickness = 2
        image = cv2.putText(self._frame, 'some text', size, font, fontScale,color, thickness,cv2.LINE_AA)
        return image


    def exitFrame(self, channel_name):
        """Draw to the window. Write to files. Release the frame."""

        # Check whether any grabbed frame is retrievable.
        # The getter may retrieve and cache the frame.
        if self.frame is None:
            self._enteredFrame = False
            return

        # Update the FPS estimate and related variables.
        if self._framesElapsed == 0:
            self._startTime = time.perf_counter()
        else:
            timeElapsed = time.perf_counter() - self._startTime
            self._fpsEstimate =  self._framesElapsed / timeElapsed
        self._framesElapsed += 1


        # Draw to the window, if any.
        if self.previewWindowManager is not None:
            if self.shouldMirrorPreview:
                mirroredFrame = numpy.fliplr(self._frame)
                frame = self.put_text(mirroredFrame)
                send_websocket(frame, channel_name)
                # self.previewWindowManager.show(frame)
            else:
                # print('keldi')
                frame = self.put_text(self._frame)
                send_websocket(frame, channel_name)
                # self.previewWindowManager.show(frame)
                # send_websocket(self._frame)
                # self.previewWindowManager.show(self._frame)

        # Write to the image file, if any.
        if self.isWritingImage:
            cv2.imwrite(self._imageFilename, self._frame)
            self._imageFilename = None

        # Write to the video file, if any.
        self._writeVideoFrame()

        # Release the frame.
        self._frame = None
        self._enteredFrame = False

    def writeImage(self, filename):
        """Write the next exited frame to an image file."""
        self._imageFilename = filename

    def startWritingVideo(
            self, filename,
            encoding = cv2.VideoWriter_fourcc('M','J','P','G')):
        """Start writing exited frames to a video file."""
        self._videoFilename = filename
        self._videoEncoding = encoding

    def stopWritingVideo(self):
        """Stop writing exited frames to a video file."""
        self._videoFilename = None
        self._videoEncoding = None
        self._videoWriter = None

    def _writeVideoFrame(self):

        if not self.isWritingVideo:
            return

        if self._videoWriter is None:
            fps = self._capture.get(cv2.CAP_PROP_FPS)
            if numpy.isnan(fps) or fps <= 0.0:
                # The capture's FPS is unknown so use an estimate.
                if self._framesElapsed < 20:
                    # Wait until more frames elapse so that the
                    # estimate is more stable.
                    return
                else:
                    fps = self._fpsEstimate
            size = (int(self._capture.get(
                        cv2.CAP_PROP_FRAME_WIDTH)),
                    int(self._capture.get(
                        cv2.CAP_PROP_FRAME_HEIGHT)))
            self._videoWriter = cv2.VideoWriter(
                self._videoFilename, self._videoEncoding,
                fps, size)

        self._videoWriter.write(self._frame)


class WindowManager(object):

    def __init__(self, windowName, keypressCallback = None):
        self.keypressCallback = keypressCallback

        self._windowName = windowName
        self._isWindowCreated = False

    @property
    def isWindowCreated(self):
        return self._isWindowCreated

    def createWindow(self):
        cv2.namedWindow(self._windowName)
        self._isWindowCreated = True

    def show(self, frame):
        cv2.imshow(self._windowName, frame)

    def destroyWindow(self):
        cv2.destroyWindow(self._windowName)
        self._isWindowCreated = False

    def processEvents(self):
        keycode = cv2.waitKey(1)
        if self.keypressCallback is not None and keycode != -1:
            self.keypressCallback(keycode)