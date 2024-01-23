import cv2

import numpy as np
import time
cap = cv2.VideoCapture('/home/scale/Videos/10.73.100.92_01_20240118155802912.mp4')
# cap = cv2.VideoCapture(0)
from asgiref.sync import async_to_sync
det = cv2.text.TextDetectorCNN_create(
       "./textbox.prototxt", "./TextBoxes_icdar13.caffemodel")

while cap.isOpened:
    # time.sleep(1/40)
    ret, frame = cap.read()
    frame = cv2.pyrDown(frame)
    # frame = cv2.pyrDown(frame)
    roi = frame[:100, :]
    # frame = cv2.resize(frame, (0,0), fx=.6, fy=.6)
    start = time.time()
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    # bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY_INV, 31, 10)
    rects, probs = det.detect(roi)
    end_time = time.time()
    print(end_time-start)
    THR = 0.3
    for i, r in enumerate(rects):
        if probs[i] > THR:
            cv2.rectangle(frame, (r[0], r[1]), (r[0]+r[2], r[1]+r[3]), (0, 255, 0), 2)

    cv2.imshow('frame', roi)

    if cv2.waitKey(1) == 27:
        break

cap.release()
cv2.destroyAllWindows()
