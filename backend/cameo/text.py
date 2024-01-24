import cv2


net = cv2.dnn.readNet('./frozen_east_text_detection.pb')

net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)
