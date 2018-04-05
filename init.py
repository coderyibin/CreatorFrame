#!/usr/bin/python    
# -*- coding: UTF-8 -*-
import io  
import os  
import sys    
import hashlib    
import string    
import re  
import requests 
import zipfile

curpath = sys.path[0]
#打包exe的时候放开下面两行的注释
# curpath = os.path.dirname(curpath) #获得d所在的目录,即d的父级目录  
# curpath = os.path.dirname(curpath) #获得d所在的目录,即d的父级目录  
print 'project path ->' + curpath

#框架url地址
frame_url = "http://www.tianyaso.com:8088/Frame.zip"
#配置文件url地址
tools_url = "http://www.tianyaso.com:8088/tools.zip"
#texturepacker破解版url地址
texturepacker_url = "http://www.tianyaso.com:8088/TexturePacker-3.3.2-x86pojieban.zip"

#合图打包指令
#texturepacker --data E:\HyH5\output\demo.plist --format cocos2d --sheet E:\HyH5\output\demo.png --max-width 1024 E:\HyH5\31美术资源\技能ICON\

#下载压缩文件  下载的路径  本地保存的路径
def download_Zip (url_file, downpath):
        pass
        isExists=os.path.exists(downpath)
        if not isExists :       
                r = requests.get(url_file) 
                #远程下载框架包
                print 'frame download path ->' + downpath
                with open(downpath, 'wb') as f :
                        f.write(r.content)
                        print 'download success -> ' + downpath
        else :
                print 'wran -> ' + downpath + ' is exits'

#创建文件夹
def create_File (file):
        path = curpath + '\\' + file
        isExists=os.path.exists(path)
        if not isExists: os.makedirs(path)
        print 'create file ->' + path

#创建游戏需要的文件夹
def create_GameFile():
        exits = os.path.exists(curpath + '\\Game_Client')
        if not exits:
                _str = 'error -> 不存在游戏客户端Game_Client目录，请使用cocos creator在当前目录下新建一个ts项目, \
				game client file Game_Client is not exits, please use cocos creator create a typescript project on cur path'
                print _str.decode("utf-8").encode("gbk")
        else :
                #创建游戏资源文件夹
                create_File('Game_Res')

                #创建游戏服务器文件夹
                create_File('Game_Server')

                #创建游戏数据配置文件夹
                create_File('Game_Config')

                #创建游戏resources文件夹资源配置json文件
                create_File('Game_Client\\assets\\resources')

                #创建游戏Game代码文件夹
                create_File('Game_Client\\assets\\Script\\Game')
                create_File('Game_Client\\assets\\Script\\Game\\View')
                create_File('Game_Client\\assets\\Script\\Game\\Module')
                create_File('Game_Client\\assets\\Script\\Game\\Ctrl')

                #下载项目框架工具
                download_Zip(frame_url, curpath + '\\Game_Client\\assets\\Script\\Frame.zip')
                download_Zip(tools_url, curpath + '\\Game_Client\\tools.zip')
                #download_Zip(texturepacker_url, curpath + '\\texturepacker3.3.2.zip')


create_GameFile()


