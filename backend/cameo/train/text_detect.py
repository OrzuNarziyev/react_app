
import time
from numpy.linalg import norm
import cv2
import numpy as np
CELL_SIZE = 20

def deskew(img):
    m = cv2.moments(img)
    if m['mu02'] > 1e-3:
        s = m['mu11'] / m['mu02']
        M = np.float32([[1, -s, 0.5*CELL_SIZE*s], 
                        [0, 1, 0]])
        img = cv2.warpAffine(img, M, (CELL_SIZE, CELL_SIZE))
        return img
    return img.copy

def preprocess_hog(digits):
    samples = []
    for img in digits:
        gx = cv2.Sobel(img, cv2.CV_32F, 1, 0)
        gy = cv2.Sobel(img, cv2.CV_32F, 0, 1)
        mag, ang = cv2.cartToPolar(gx, gy)
        bin_n = 16
        bin = np.int32(bin_n*ang/(2*np.pi))
        bin_cells = bin[:10,:10], bin[10:,:10], bin[:10,10:], bin[10:,10:]
        mag_cells = mag[:10,:10], mag[10:,:10], mag[:10,10:], mag[10:,10:]
        hists = [np.bincount(b.ravel(), m.ravel(), bin_n) for b, m in zip(bin_cells, mag_cells)]
        hist = np.hstack(hists)


        # transform to Hellinger kernel
        eps = 1e-7
        hist /= hist.sum() + eps
        hist = np.sqrt(hist)
        hist /= norm(hist) + eps

        samples.append(hist)
    return np.float32(samples)

classifier_fn = 'digits_svm.dat'
model = cv2.ml.SVM_load(classifier_fn)
src = '/home/scale/Videos/10.73.100.92_01_20240118163641698.mp4'
cap = cv2.VideoCapture(src)

while cap.isOpened:
    time.sleep(.04)
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY_INV, 31, 10)
    contours, heirs = cv2.findContours( bin.copy(), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
    # bin = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 29, 10)

    try:
        heirs = heirs[0]
    except:
        heirs = []

    bin = cv2.medianBlur(bin, 3)
    for cnt, heir in zip(contours, heirs):
        _, _, _, outer_i = heir
    
        if outer_i >= 0:
            continue

        x, y, w, h = cv2.boundingRect(cnt)

        if not (60 <= h <= 105 and w <= 1.2*h):
            continue
        
        pad = max(h-w, 0)
        x, w = x - (pad//2), int(w+pad)

        cv2.rectangle(frame, (x,y), (x+w, y+h), (0,255,0))

        bin_roi = bin[y:,x:][:h,:w]

        m = bin_roi != 0
        if not 0.1 < m.mean() < 0.4:
            continue
        s = 1.5*float(h)/CELL_SIZE
        m = cv2.moments(bin_roi)
        c1 = np.float32([m['m10'], m['m01']]) / m['m00']
        c0 = np.float32([CELL_SIZE/2, CELL_SIZE/2])
        t = c1 - s*c0
        A = np.zeros((2, 3), np.float32)
        A[:,:2] = np.eye(2)*s
        A[:,2] = t
        bin_norm = cv2.warpAffine(bin_roi, A, (CELL_SIZE, CELL_SIZE), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR)
        bin_norm = deskew(bin_norm)
        if x+w+CELL_SIZE < frame.shape[1] and y+CELL_SIZE < frame.shape[0]:
            frame[y:,x+w:][:CELL_SIZE, :CELL_SIZE] = bin_norm[...,np.newaxis]
        sample = preprocess_hog([bin_norm])
        digit = model.predict(sample)[1].ravel()
        cv2.putText(frame, '%d %d'%(digit, x), (x, y), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)
    
    cv2.imshow('frame_r', frame)
    cv2.imshow('frame', bin)  

    if cv2.waitKey(1) == 27:
        break

cap.release()
cv2.destroyAllWindows()
    # gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)