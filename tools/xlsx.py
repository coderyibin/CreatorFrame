 # -*- coding: utf-8 -*-
import xlrd
import json
import base64
import hashlib
import des
import os

class xlsx :
    def __init__(self):
        pass
    
    def read_excel(self, file):
        # 打开文件
        workbook = xlrd.open_workbook(file)
        # 根据sheet索引或者名称获取sheet内容
        table = workbook.sheet_by_name('Sheet1')
        nrows = table.nrows  # 拿到总共行数
        colnames = table.row_values(1)  # 某一行数据 ['姓名', '用户名', '联系方式', '密码']
        list = []
        for rownum in range(2, nrows): #也就是从Excel第二行开始，第一行表头不算
            row = table.row_values(rownum)
            if row:
                app = {}
                for i in range(len(colnames)):
                    app[colnames[i]] = row[i] #表头与数据对应
                encode_json = json.dumps(app)
                list.append(encode_json)
        return list

    def write_json(self, data, file):
        isexits = os.path.exists('../assets/resources/config/')
        if not isexits:
            os.makedirs('../assets/resources/config/')
        f = open('../assets/resources/config/' + file + '.in', 'w')
        s = '['
        for i in data:
            s += i.decode('unicode-escape')
            s += ','
        
        s = s[:-1]
        s += ']'
        s = base64.encodestring(s.encode('utf-8'))
        # print sbase64
        # hash_md5 = hashlib.sha1(s.encode('utf-8'))
        # encrypts = hash_md5.hexdigest()
        # print encrypts
        # Des = des
        # s = des.desencode(s.encode('utf-8'), u'12345678')

        f.write(s)
        f.close()
        print 'run over'
        print 'create assets/resources/config/' + file + '.in'

# x = xlsx()
# file = raw_input('please input file name:')
# data = x.read_excel(u'./config/' + file + '.xlsx')

# x.write_json(data, file)
