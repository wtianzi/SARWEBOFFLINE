import urllib.request as request
import requests
import os

def downloadFromURL_org(urlin,sourcename,tileindex0,tileindex1,tileindex2):
    rootfolder="../static/maptile/"
    filename=rootfolder+sourcename+"/"+tileindex0+"/"+tileindex1+"/"+tileindex2+".png"
    print(filename)

    file=requests.get(urlin)
    with open(filename,'wb') as ff:
        ff.write(file.content)
    return True

def downloadFromURL_org(urimg,sourcename,tilename):
    rootfolder="./static/maptile/"
    x=tilename.split('/')
    imgfolder=rootfolder+sourcename+"/"+x[0]+"/"+x[1]+"/"
    if not os.path.isdir(imgfolder):
        os.makedirs(imgfolder)
    print(urimg)
    filename=rootfolder+sourcename+"/"+tilename+".png"
    print(os.path.abspath(filename))
    file=requests.get(urimg)
    with open(filename,'wb') as ff:
        ff.write(file.content)
    return True

def downloadFromURL(url,sourcename,tilename):
    rootfolder="./static/maptile/"
    x=tilename.split('/')
    imgfolder=rootfolder+sourcename+"/"+x[0]+"/"+x[1]+"/"
    if not os.path.isdir(imgfolder):
        os.makedirs(imgfolder)
    print(url)
    filename=rootfolder+sourcename+"/"+tilename+".png"
    print(os.path.abspath(filename))

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    file=requests.get(url,headers=headers)
    print(file)
    if os.path.exists(filename):
        os.remove(filename)
    with open(filename,'wb') as ff:
        ff.write(file.content)
    return True

def main():
    imgtesturl='https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/10/398/283.png'
    file_url=imgtesturl
    file=requests.get(file_url)
    with open(r'imgname.png','wb') as ff:
        ff.write(file.content)

if __name__ == '__main__':
    main()
