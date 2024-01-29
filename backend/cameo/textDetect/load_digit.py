import cv2
import time
import numpy as np
import os

from digits import *

SZ = 20 # size of each digit is SZ x SZ
CLASS_N = 10
classifier_fn = 'backend/cameo/digit_detect/digits_svm.dat'

model = cv2.ml.SVM_load(classifier_fn)

def load_digits(frame):
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    # bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 29, 10)
    bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY_INV, 31, 10)
    # bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY_INV, 21, 10)
    # bin = cv2.adaptiveThreshold(gray,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,\
    #     cv2.THRESH_BINARY,11,2)
    # bin = cv2.adaptiveThreshold(gray,255,cv2.ADAPTIVE_THRESH_MEAN_C,\
    #     cv2.THRESH_BINARY,11,2)

    bin = cv2.medianBlur(bin, 3)
    contours, heirs = cv2.findContours( bin.copy(), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
    

    try:
        heirs = heirs[0]
    except:
        heirs = []

    for cnt, heir in zip(contours, heirs):
        _, _, _, outer_i = heir

        if outer_i >= 0:
            continue

        x, y, w, h = cv2.boundingRect(cnt)

        if not (40 <= h <= 90  and w <= 1.2*h):
            continue

        # if (h>=80 and h >= 100):
        #     continue

        # if(h>=80 and h<=100 and w < h):

        pad = max(h-w, 0)

        x, w = x - (pad // 2), w + pad
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0))

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
        cv2.putText(frame, s, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
        '''

        s = 1.5*float(h)/SZ
        m = cv2.moments(bin_roi)
        c1 = np.float32([m['m10'], m['m01']]) / m['m00']
        c0 = np.float32([SZ/2, SZ/2])
        t = c1 - s*c0
        A = np.zeros((2, 3), np.float32)
        A[:,:2] = np.eye(2)*s
        A[:,2] = t
        bin_norm = cv2.warpAffine(bin_roi, A, (SZ, SZ), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR)
        bin_norm = deskew(bin_norm)
        if x+w+SZ < frame.shape[1] and y+SZ < frame.shape[0]:
            frame[y:,x+w:][:SZ, :SZ] = bin_norm[...,np.newaxis]

        sample = preprocess_hog([bin_norm])
        digit = model.predict(sample)[1].ravel()
        cv2.putText(frame, '%d'%digit, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
        # cv2.putText(frame, 'h:%d ,w:%d'%(h,w) , (x, y+20), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)

    return frame
    # cv2.imshow('frame', frame)
    # cv2.imshow('bin', bin)