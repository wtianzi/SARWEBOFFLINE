import os
import shutil

def PNG2MP4(folder="",outfolder=""):

    if not os.path.exists(folder):
        print(os.path.abspath(folder))
        return "noimage"

    for root,d_names,f_names in os.walk(folder):
        for iname in f_names:
            #print(os.path.abspath(iname))
            x=iname.split('_')
            #imgfolder=folder+"\\"+x[0]+"\\"+x[1]+"\\"
            imgfolder=outfolder+"\\"+x[0]+"\\"+x[1]+"\\"

            if not os.path.isdir(imgfolder):
                os.makedirs(imgfolder)
            imgname=imgfolder+x[2]
            print(iname,os.path.abspath(imgname))
            #copy
            shutil.move(folder+iname, imgname)
    return
def main():
    PNG2MP4("../static/maptile/org/","../static/maptile/")
    return
if __name__ == '__main__':
    main()
