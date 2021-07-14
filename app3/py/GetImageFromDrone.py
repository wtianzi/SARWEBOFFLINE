import os
import cv2
from matplotlib import pyplot as plt
import json

# infojson is a json object that has information needed to retrieve images from drone
# {"id_device_id":drone_test1,"gpslocation":gpslocation,"timestamp":timestamp}
def GetImageFromDrone(infojson):
    #print(infojson)
    basefolder="media/droneimages/"
    imgfolder=basefolder + infojson['droneID']
    imgname=infojson['timestamp']

    sourceimg="./media/droneimages/video_sample.png"
    if not os.path.isfile(sourceimg):
        #print("no images found")
        #print(os.path.dirname(os.path.dirname(os.path.abspath(sourceimg))))
        return "no images found"
    image=cv2.imread(sourceimg)
    #cv2.imshow("demo",image)
    # edit the sample image
    window_name = 'Demo'
    font = cv2.FONT_HERSHEY_SIMPLEX
    fontScale = 0.4
    color = (51, 87, 255)
    thickness = 1
    org = (10, 30)
    ncount=0
    gap=30
    for key in infojson:
        cv2.putText(image, key+":"+infojson[key], (org[0],org[1]+ncount*gap),
        font,fontScale, color, thickness, cv2.LINE_AA)
        ncount=ncount+1
    # find the folder, if none create
    if not os.path.isdir(imgfolder):
        os.makedirs(imgfolder)
    # save image
    #print(imgfolder,imgname)
    resname=imgfolder+"/"+imgname+".png"

    abspath= os.path.abspath(resname)
    cv2.putText(image, "Imgpath:"+abspath, (org[0],org[1]+ncount*gap),
    font,fontScale, color, thickness, cv2.LINE_AA)
    # testing
    cv2.putText(image,imgname[-3:], (100,300),font,5, color, 2, cv2.LINE_AA)
    # show image
    #cv2.imshow(window_name,image)
    #cv2.waitKey(0)
    #cv2.destroyAllWindows()

    #print(resname)
    cv2.imwrite(resname, image)
    # return path of the image
    return resname
