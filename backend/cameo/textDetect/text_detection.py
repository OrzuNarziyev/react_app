from imutils.object_detection import non_max_suppression
import numpy as np
import time
import cv2



# cap = cv2.VideoCapture('rtsp://admin:S@lom123456!@10.73.100.41:554//',cv2.CV_8UC1)
# cap = cv2.VideoCapture('/home/scale/Videos/10.73.100.92_01_20240118155802912.mp4',cv2.CV_8UC1)

net = cv2.dnn.readNet('frozen_east_text_detection.pb')

net.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
net.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)
# cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
# cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

def text_recognition(frame):
	image = cv2.pyrDown(image)
	
	orig = frame
	(H, W) = image.shape[:2]

	(newW, newH) = (640, 320)
	rW = W / float(newW)
	rH = H / float(newH)

	image = cv2.resize(frame, (newW, newH))	

	(H, W) = image.shape[:2]
	layerNames = [
		"feature_fusion/Conv_7/Sigmoid",
		"feature_fusion/concat_3"]
	
	blob = cv2.dnn.blobFromImage(image, 1.0, (W, H),
		(123.68, 116.78, 103.94), swapRB=True, crop=False)

	net.setInput(blob)
	(scores, geometry) = net.forward(layerNames)

	(numRows, numCols) = scores.shape[2:4]
	rects = []
	confidences = []

	for y in range(0, numRows):

		scoresData = scores[0, 0, y]
		xData0 = geometry[0, 0, y]
		xData1 = geometry[0, 1, y]
		xData2 = geometry[0, 2, y]
		xData3 = geometry[0, 3, y]
		anglesData = geometry[0, 4, y]


		# ustunlar soni bo'ylab aylanish
		for x in range(0, numCols):
			# agar bizning ballimiz etarli ehtimolga ega bo'lmasa, unga e'tibor bermang
			if scoresData[x] < 0.5:

				continue


			# ofset faktorini bizning natijaviy xususiyat xaritalarimiz kabi hisoblang
			# kiritilgan rasmdan 4x kichikroq boʻlsin
			(offsetX, offsetY) = (x * 4.0, y * 4.0)


			# extract the rotation angle for the prediction and then
			# compute the sin and cosine


			angle = anglesData[x]
			cos = np.cos(angle)
			sin = np.sin(angle)

			# use the geometry volume to derive the width and height of
			# the bounding box
			h = xData0[x] + xData2[x]
			w = xData1[x] + xData3[x]

			# compute both the starting and ending (x, y)-coordinates for
			# the text prediction bounding box
			endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
			endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
			startX = int(endX - w)
			startY = int(endY - h)

			# add the bounding box coordinates and probability score to
			# our respective lists
			rects.append((startX, startY, endX, endY))
			confidences.append(scoresData[x])
	boxes = non_max_suppression(np.array(rects),probs=confidences)

	for (startX, startY, endX, endY) in boxes:
		# if not (60 < abs(startY-endY) < 100):
		# 	continue



		startX = int(startX * rW)
		startY = int(startY * rH)
		endX = int(endX * rW)
		endY = int(endY * rH)

		h = abs(endY - startY)
		w = abs(endX - startX)

		if not (70 < h < 110):
			continue

		if w < 100:
			continue


		# draw the bounding box on the image
		cv2.rectangle(orig, (startX, startY), (endX, endY), (0, 255, 0), 3)
		cv2.putText(orig, 'H:%d W:%d '%(int(endY-startY), int(endX-startX)), (startX, startY), cv2.FONT_HERSHEY_PLAIN, 1.0, (200, 0, 0), thickness = 1)

	return orig


# while cv2.waitKey(1) < 0:
	
# 	start = time.time()
# 	hasFrame, image = cap.read()
# 	my_umat = cv2.UMat(image)
# 	# image = cv2.pyrDown(image)
	
# 	orig = my_umat.get()
# 	(H, W) = image.shape[:2]

# 	(newW, newH) = (640, 320)
# 	rW = W / float(newW)
# 	rH = H / float(newH)

# 	image = cv2.resize(my_umat.get(), (newW, newH))
	

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
# 	cv2.imshow("Text Detection", orig)
# 	k = cv2.waitKey(30) & 0xff
# 	if k == 27:
# 		break

# cv2.destroyAllWindows()
# cap.release()