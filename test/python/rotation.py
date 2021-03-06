import cv2

matrix = cv2.getRotationMatrix2D((2, 4), angle=30, scale=0.8)

img = cv2.imread('./test/img/test.png')

dst = cv2.warpAffine(img, matrix, dsize=(img.shape[1], img.shape[0]), flags=cv2.INTER_NEAREST,
                     borderMode=cv2.BORDER_REFLECT)

cv2.imwrite('./test/img/testRotate.png', dst)
