# -*- coding:utf8 -*-

import sys;
import os;
import os.path;
from string import *;
import sys;
import time;
import json;

print "python start create layer"
members = [u'YOYO', u'JACKY', u'YvesLin']


class ModuleMvc:
    def input_class_name(self):
        while (1):
            print (u'请输入类名根名字,类名一定要驼峰命名,最好跟ui名称一样，比如登陆单元Login:Unit_Login');
            print (u'按n键退出');
            a = raw_input();
            if a == 'n':
                exit();
            self.m_class_name = a;
            break;
        # 检查是否已存在此类
        result = self.check_class_exist();
        if result:
            self.show_create_files_menu();

    def check_class_exist(self):
        self.m_ctrl_lua_name = self.m_class_name;
        self.m_ctrl_cls_name = self.m_class_name;

        # 判断路径是否已经存在
        self.m_dir = '.';
        self.m_ctrl_lua_path = self.m_dir + '/' + self.m_ctrl_lua_name + '.ts';
        return True

    def show_create_files_menu(self):
        while (1):
            #print (u'选择作者即可创建,请输入序号');
            #for i in range(len(members)):
            #    print (u'序号:%d名字:%s') % (i, members[i]);
            #a = raw_input();
            #mindex = int(a)
            #if i > len(members):
            #    print("滚,这都会输错");
            #    self.input_class_name();
            #    return;
            self.author = "JustinLin"
            self.time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            self.create_files();

    def create_files(self):
        print(u'你的控制器类名是' + self.m_ctrl_cls_name + u'文件路径是' + self.m_ctrl_lua_path);
        self.create_ctrl_code();
        print(u'生成成功,请查看')
        #os.system('explorer.exe ' + os.path.dirname(os.path.abspath(self.m_dir)));
        exit();

    def create_ctrl_code(self):
        ctrl_file = open(self.m_ctrl_lua_path, 'w');
        ts_str = (
            '/*\n'
            'author: %s\n'
            '日期:%s\n'
            '*/\n'
            'import { UnitComponent } from "../../../../Frame/view/UnitComponent";\n'
            '\n'
            'const { ccclass, property } = cc._decorator;\n'
            '\n'
            '@ccclass\n'
            'export default class %s extends UnitComponent {\n'
            '    //私有变量\n'
            '    //私有变量声明结束\n'
            '    //这边去声明ui组件\n'
            '\n'
            '	//声明ui组件end\n'
            '\n'
            '\n'
            '\n'
            '    initUi () : void {\n'
            '       //这边初始化ui\n'
            '    }\n'
            '\n'
            '    initValue () : void {\n'
            '       //这边初始化类成员变量，执行在initUi函数之前\n'
            '    }\n'
            '    _tap_%s () : void {\n'
            '       //点击本节点触发，可以不做事\n'
            '    }\n'
            '\n'
            '\n'
            '}'
        )
        ts_str = ts_str % (self.author.encode('utf-8'), self.time, self.m_ctrl_cls_name, self.m_ctrl_cls_name);
        ctrl_file.write(ts_str);
        ctrl_file.close();


modulemvc = ModuleMvc();
modulemvc.input_class_name();


