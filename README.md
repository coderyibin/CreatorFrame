Yves框架：定义：

resources.ts 资源加载类
首先创建resources.json资源配置文件
    资源的组key可自定义

显示一个普通layer
    showLayer()函数-参数方面请看框架注释
显示一个单元，一般为列表item
    Unit_Item.show()函数

2018.2.27
修改模板createScene.py:
    添加initEvent函数，注册自定义监听事件
    添加initValue函数，初始化类成员变量
增加xlsx文件的批处理py文件:
    读取表数据写入json格式

2018.3.3
修改模板createLayer.py
    添加initValue函数，初始化所有类成员变量，调用顺序在initUi函数之前
添加模板createUnit.py
    创建单元类，继承Unit_Component.ts
新增加消息码类
    MsgCode.getMsg(key);//返回消息表的文本消息
添加模板createTip.py
    创建弹窗类，继承BaseTip.ts
修改showLayer()函数：
    返回一个当前创建的节点

2018.3.6
    添加scrollview的封装，使用：
        首先声明列表单元变量：命名规则：_unit_列表节点名称
        _unit_fightMsg = null;//战斗消息列表的单元
        初始化的时候记得赋值--Unit_Fight:为预置资源
        this._unit_fightMsg = Unit_FightMsg;
        添加数据
        this._oData.fightMsg = rou;
        然后调用刷新列表方法
        this.reFreshList('fightMsg', MODULE.Unit_FIGHTMSG);
        在本类中，实现刷新列表方法：函数命名：_list_scrollview组件所在节点名称，返回列表单位需要的数据
        _list_fightMsg () {
            let data = this._oData.fightMsg;
            return data;
        }
        注意的是reFreshList这个函数的三个参数：第一个是刷新的列表组件节点名称，第二个是该列表组件需要添加什么组件或者预置资源，第三个参数，可选参数
        是否滚动到列表最底下，默认是false（滚动到）。

2018.3.7
    紧急添加scrollview的额外封装，
    添加jsonToList函数，作用是添加单个unit到列表中，默认跳到列表最低下
    调用方法jsonToList（）
    实现方法：
    _join_fightMsg(){
        return data;
    }

2018.3.9
    改进随机数的产生
    改进数组打乱的函数

2018.3.12
    更改msgcode类
        getMsg函数，多一个参数，str，如果有传这个参数，则替换消息文本中%符号

2018.3.14
    修改按钮触发事件：
        限制连续点击事件，一秒只能点击一次

2018.3.15
    修改自定义时间的封装，改用call函数来实现调用
    将py工具打包成exe文件，可供策划使用调数值

2018.3.30
    更新资源预加载，添加config，在resources.json中配置
    关于网络配置，在Game_Config新建config.xlsx文件，配置ServerIp字段和Port字段pomelo已经集成初始化网络，无需在额外添加配置
    关于项目目录结构讲解：
        项目文件必须放在Game_Client目录。比如项目名称：demo，那么demo下创建一个文件夹，Game_Client，将creator项目放于之中。之后运行init.py脚本，自动生成项目结构
        Game_Config文件夹，作为项目的xlsx文件存放路径，文件的配置方面最好用xlsx表格来配置。然后配置Game_Client\tools\config.json文件,然后运行Game_Client\tools\exe下的config.exe,会将Game_Config文件夹下的xlsx的文件都解析到项目的assets\resources\config文件夹中
        Res文件夹还未实现。Server文件夹可以存放服务端方面的东西，也暂未实现
