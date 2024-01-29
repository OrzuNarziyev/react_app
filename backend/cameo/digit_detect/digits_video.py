#!/usr/bin/env python
'''
Digit recognition from video.

Run digits.py before, to train and save the SVM.

Usage:
  digits_video.py [{camera_id|video_file}]
'''

# Python 2/3 compatibility
from __future__ import print_function

import numpy as np
import cv2 as cv

# built-in modules
import os
import sys

# local modules
import video
from common import mosaic

from digits import *
import time


def cut_frame(y1, height, width, frame):
    '''point format >> >> [y: y+h]
        x1 >> 0 ga teng 
        x+with >> umumiy widthga teng 
    '''
    # frame = self._frame
    if frame is not None:
        return frame[y1: y1+height,  0: width]

def nothing(x): 
    pass

def main():

    try:
        src = sys.argv[1]
    except:
        src = '/home/scale/Videos/10.73.100.92_01_20240118155802912.mp4'

    # cap = video.create_capture(src)
    cap = cv.VideoCapture(src)
    # width, heigth = cap.get(3), cap.get

    classifier_fn = 'backend/cameo/digit_detect/digits_svm.dat'
    if not os.path.exists(classifier_fn):
        print('"%s" not found, run digits.py first' % classifier_fn)
        return

    model = cv.ml.SVM_load(classifier_fn)

    cv.namedWindow('frame') 
  
    # Creating trackbars for color change 
    # cv.createTrackbar('tresh', 'frame', 0, 255, nothing) 
    
    # Setting minimum position of 'color_track'  
    # trackbar to 100 
    # cv.setTrackbarMin('tresh', 'frame', 21) 

    # cv.createTrackbar('angle', 'frame', 0, 180, update)

    while True:
        # time.sleep(.04)
        start = time.time()
        _ret, frame = cap.read()
        # frame = cut_frame(int(50), int(450), int(704), frame)
        gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        # bin = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY, 29, 10)
        bin = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY_INV, 31, 10)
        # bin = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY_INV, 21, 10)
        # bin = cv.adaptiveThreshold(gray,255,cv.ADAPTIVE_THRESH_GAUSSIAN_C,\
        #     cv.THRESH_BINARY,11,2)
        # bin = cv.adaptiveThreshold(gray,255,cv.ADAPTIVE_THRESH_MEAN_C,\
        #     cv.THRESH_BINARY,11,2)

        bin = cv.medianBlur(bin, 3)
        contours, heirs = cv.findContours( bin.copy(), cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE)
        

        try:
            heirs = heirs[0]
        except:
            heirs = []

        for cnt, heir in zip(contours, heirs):
            _, _, _, outer_i = heir

            if outer_i >= 0:
                continue

            x, y, w, h = cv.boundingRect(cnt)

            if not (40 <= h <= 90  and w <= 1.2*h):
                continue

            # if (h>=80 and h >= 100):
            #     continue

            # if(h>=80 and h<=100 and w < h):

            pad = max(h-w, 0)

            x, w = x - (pad // 2), w + pad
            cv.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0))

            bin_roi = bin[y:,x:][:h,:w]

            m = bin_roi != 0
            if not 0.1 < m.mean() < 0.4:
                continue

            '''
            gray_roi = gray[y:,x:][:h,:w]
            v_in, v_out = gray_roi[m], gray_roi[~m]
            if v_out.std() > 10.0:
                continue
            s = "%f, %f" % (abs(v_in.mean() - v_out.mean()), v_out.std())
            cv.putText(frame, s, (x, y), cv.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
            '''

            s = 1.5*float(h)/SZ
            m = cv.moments(bin_roi)
            c1 = np.float32([m['m10'], m['m01']]) / m['m00']
            c0 = np.float32([SZ/2, SZ/2])
            t = c1 - s*c0
            A = np.zeros((2, 3), np.float32)
            A[:,:2] = np.eye(2)*s
            A[:,2] = t
            bin_norm = cv.warpAffine(bin_roi, A, (SZ, SZ), flags=cv.WARP_INVERSE_MAP | cv.INTER_LINEAR)
            bin_norm = deskew(bin_norm)
            if x+w+SZ < frame.shape[1] and y+SZ < frame.shape[0]:
                frame[y:,x+w:][:SZ, :SZ] = bin_norm[...,np.newaxis]

            sample = preprocess_hog([bin_norm])
            digit = model.predict(sample)[1].ravel()
            cv.putText(frame, '%d'%digit, (x, y), cv.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
            # cv.putText(frame, 'h:%d ,w:%d'%(h,w) , (x, y+20), cv.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
        end = time.time()
        print(end-start)

        cv.imshow('frame', frame)
        cv.imshow('bin', bin)

        ch = cv.waitKey(1)
        if ch == 27:
            break

    print('Done')


if __name__ == '__main__':
    print(__doc__)
    main()
    cv.destroyAllWindows()
