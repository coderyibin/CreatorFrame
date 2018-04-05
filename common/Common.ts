import { Base64 } from "./Base64";


/**
 * 全局的一些定义
 */
//是否启用多语言
 export let I18N = false;

 //是否热更新
 export let HOTUPDATE = false;

 //是否加密数据
 export let ENCRYPTION = true;

 //启用网络pomelo
 export let OPENNET = true;

 //路由
 export enum ROUTE {
    TEST = "connector.entryHandler.entry",
    GATE = "gate.gateHandler.Init",
    GETSERVER = "connector.entryHandler.getServer",//获取服务器列表
    GOTOROOM = "connector.entryHandler.gotoRoom",//进入房间玩牌
    LOGIN = "connector.entryHandler.login",
    CREATEROLE = "connector.entryHandler.createRole",//创建角色
    TESTFIELD = "testField.testHandler.testList",//试炼场列表
    JOINTEST = "testField.testHandler.JoinTest",//进入试炼场
    STARTFIGHT = "fight.fightHandler.startFight",//开始战斗
    QEUFIGHT = "fight.fightHandler.reqFight",//请求战斗伤害
    GETPARTNER = "partner.partnerHandler.getPartner",//获取随从
 }

 //服务端主动推送
 export let SERVER_PUSH = {
     UPDATE_USER_INFO : "onUpdateUserInnfo",//监听玩家信息的改变
     UPDATE_PARTNER : "onUpdatePartner",//监听玩家随从的改变
     UPDATE_PARTNER_INFO : "onUpdatePartnerInfo",//监听玩家随从的改变
     JOIN_MAIN : "onJoinMain"//进入游戏主场景
 }

 //自定义监听key
 export let EMIT_KEY = {
     MSG : 'Msg',//系統弹窗监听
     FLYMSG : 'FlyMsg',//系统飘字监听
     RUNSCENE : 'runScene',//场景切换
     UPDATELOG : 'UpdateLog',//更新游戏日志
     UPDATEMATERIAL : 'UpdateMaterial',//更新玩家物资
     UPDATELOCAL : 'UpdateLocal',//更新标题
     UPDATEUSERINFO : 'onUpdateUserInfo'//更新玩家数据
 }

 //装备类型
 export enum EQUIPMENT {
     ARMS = 1,//武器
     HATS = 2,//帽子
     GLOVE = 3,//手套
     CLOTHES = 4,//衣服
     BELT = 5,//腰带
     SHOES = 6,//鞋子
     NECKLACE = 7,//项链
     RING = 8,//戒指
     ORNAMENTS = 9,//饰品
 }

 //场景的名称
 export enum SCENE_NAME {
    LOADING = "Loading",
    LOGIN_SCENE = "Scene_Login",
    MAIN_SCENE = "Scene_Main",
    FIGHT_SCENE = "Scene_Fight",
    MENU_SCENE = "MenuScene",
    START_SCENE = "StartGame",
    NARRATOR_SCENE = "Scene_Narrator",
    OVER_SCENE = "GameOver"
}

 //模块定义
 export enum MODULE {
    LAYER_NETJUHUA = "Layer_NetJuHua",
    LAYER_Fight = "Layer_Fight",
    LAYER_MAIN = "Layer_Main",
    LAYER_STORE = "Layer_Store",
    LAYER_RECRUITHERO = "Layer_RecruitHero",
    LAYER_INFO = "Layer_Info",
    LAYER_BAG = "Layer_Bag",
    LAYER_HEROLIST = "Layer_HeroList",
    LAYER_HERODETAILS = "Layer_HeroDetails",
    LAYER_SELECTHERO = "Layer_SelectHero",
    LAYER_BUILD = "Layer_Build",

    UNIT_PLAYER = "Unit_Player",
    UNIT_MONSTER = "Unit_Monster",
    UNIT_ITEM = "Unit_Item",
    UNIT_HERO = "Unit_Hero",
    Unit_FIGHTMSG = "Unit_FightMsg",
    UNIT_TOUCHEQUIPEMT = "Unit_TouchEquipment",
    UNIT_SKILL = "Unit_Skill",
    UNIT_LOG = "Unit_Log",
    UNIT_FLYMSG = "Unit_FlyMsg",
    UNIT_MATERIALITEM = "Unit_MaterialItem",
    UNIT_MATERIAL = "Unit_BagList",

    TIP_BUY = "Tip_Buy",
    TIP_EQUIPMENT = "Tip_Equipment",
    TIP_EQUIPMENTCHANGE = "Tip_EquipmentChange",
    TIP_EQUIPMENTLIST = "Tip_EquipmentList",
    TIP_BUYEQUIPMENT = "Tip_BuyEquipment",
    TIP_USEEQUIPMENT = "Tip_UseEquipment",
    TIP_MSG = "Tip_Msg"

 }

 /**
  * 界面枚举
  */
 export enum ENUM_LAYER_NAME {
     LIXIAN,//历险
     JUZHU,//居住
     BUILD,//建造
 }

 /**
  * 界面名称
  */
 export let LAYER_NAME = [
     "历练",
     "仙居"
 ];

 /**
  * 资源名称
  */
 export let RES_ALTAS = {
    HERO_HEAD : 'atlas_HeroIcon',
 }

/**
 * 本地存储key
 */
export let LOCAL_KEY = {
    LAST_LOGIN : "lastLogin",
    PLAYER : "player",
}

 //英雄属性结构
 export let HERO_STRUCT = {
    0 : '生命',
    1 : '力量',
    2 : '感知',
    3 : '直觉',
    4 : '智力',
    5 : '冥想',
    6 : '会心率',
    7 : '命中率',
    8 : '幸运',
    10 : '武力攻击力',
    11 : '法术攻击力',
    12 : '防御力',
    13 : '抵抗力',
 }

//英雄职业
export enum OCC {
    ALL,
    JIANKE,//剑客
    TIDU,//提督
    ZHANBUSHI,//占卜
    CHUANJIAOSHI,//传教
    Physics,//物理攻击怪
    Magic,//魔法攻击
    Ship,//船只
}

//物资
export enum MATERIAL {
    LINGSHI = 1,//灵石
}
//技能操作
export enum SKILL {
    ACTIVE,//激活
    UPLEVEL//升级
}

//本回合行动类型
export enum ACTION {
    ATTACK,//攻击
    SLEEP,//睡眠
    REVIVE,//复活
    REPAIR,//修复
}

//回合对象
export enum ROUNDTAR {
    PLAYER,
    MONSTER
}

/**
 * 作者:
1、中毒，每回合掉血
2、眩晕，本回合暂停行动
3、着火，每回合掉血
4、致盲，降低命中率
5、虚弱，降低攻击力
6、治疗，回复友方血量
7、吸血，回复自身血量
8、复活阵亡队友
9、解除除复活外有害状态
10、攻击强化，攻击力上升
11、防御强化，防御、抵抗力上升

 */
//战斗单位异常状态
export enum EXTSTATUS{
    NONE = 0,//状态正常
    POISON,//中毒-每回合掉血
    DIZZY,//眩晕-本回合暂停行动
    LOSTHP,//着火-每回合掉血
    CUTHIT,//致盲-降低命中率
    CUTATT,//降低攻击力
    REWEHP,//回复友方血量
    RESELFHP,//回复自身血量
    REVIVE,//复活阵亡队友
    EXTSTATE,//解除除了复活外的有害状态
    STRENGTH,//强化攻击力
    DEF,//强化防御力
    DIE,//死亡
}

 //游戏结束方式
 export enum OVER_TYPE {
     NONE,
     BUY,
     TIMEOUT,
     DIE
 }

 //网络连接code
 export enum NET_CODE {
     CODE_NONE = 200,
     CODE_ERROR = 500
 }

 //物品类型
 export enum ITEM_TYPE {
     EQUIPMENT = 1,//装备
 }

 //交易类型
 export enum TRADE_TYPE {
     BUY,//买入
     SALE//卖出
 }

 //财务类型
 export enum BANK {
    DEPOSIT,//存款
    WITHDRAWALS
 }

 //方块的尺寸
 export enum PANEL_SIZE {
     WIDTH = 178,
     HEIGHT = 319
 }

 //游戏模式
 export enum GAME_MODE {
     MODE_CLASSICS,//经典模式
     MODE_QUICK,//急速模式
 }

 export class Common {

    /**
     * des 加密
     */
    static DesEncode (str : string) : string {
        return encryptByDES(str);
    }

    /**
     * des 解密
     */
    static DesDecode (str : string) : string {
        return strDec(str,'12345678');
    }

    /**
     * md5加密
     */
    static MD5 (str : string) : string {
        return md5(str);
        // return str;
    }

    /**
     * base 64解密
     */
    static BaseDecode (str : string) : string {
        return new Base64().decode(str);
    }

    /**
     * base 64加密
     */
    static BaseEncode (str : string) : string {
        return new Base64().encode(str);
    }

    /**
     * 获取当前时间戳
     */
    static GetTime () : string {
        return (new Date()).valueOf() + '';
    }

    /**
     * 数组打乱
     * @param arr 要打乱的数组
     */
    static ArrayUpset (arr : Array<any>) : Array<any> {
        Array.prototype.sort.call(arr,function(a,b){ return Math.random()>.5 ? -1 : 1;});
        return arr;
    }
     
    /**
     * 获取指定范围内的随机数
     * @param 最小值 number
     * @param 最大值 number 包含
     */
    static fGetRandom (min : number, max : number) : number {
        // let num : number = Math.floor(Math.random() * max + min);
        let num : number = Math.floor(Math.random() * (max - min + 1) + min);
        return num;
    }

    /**
     * 获取文件名称
     * @param 文件路径
     */
    static fGetFileName (path : string) : string {
        while (true) {
            let index : number = path.indexOf("/"); 
            if (index != -1) {
                path = path.substr(index + 1, path.length);
            } else {
                return path;
            }
        }
    }

    //获取json数据的长度
    static fGetJsonLength (json : any) : number {
        if (! json || ! (json instanceof Object)) return;
        let len : number= 0;
        for (let i in json) {
            len ++;
        }
        return len;
    }

    //克隆json
    static CloneJSON (jsonData) {
        return JSON.parse(JSON.stringify(jsonData));
    }

    //克隆数组
    static CloneArray (arr) {
        return arr.slice(0);
    }

    /**
     * 字符串转数组
     * @param 要转换的字符串
     * @param 转的符号 如：',' '-'
     */
    static StrChangeArray (str, key) {
        str += '';
        if (str == "") return [];
        return str.split(key);
    }

    /**
     * 获取当前脚本对象名称
     * @param 脚本对象
     * @return 脚本对象名称
     */
    static fGetObjectName (Comp : cc.Component) : string {
        let name : string = Comp.name;
        let index : number = name.indexOf("<");
        name = name.slice(index + 1, name.length - 1);
        return name;
    }

    /**
     * 字符串包含字母
     */
    static StringHasLetter (str : string) : boolean {
        let regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
        return regString.test(str);//true:包含
    }

    /**
     * 判断字符串是否为空
     */
    static StringIsSpace (str : string) : boolean {
        if (str.replace(/(^s*)|(s*$)/g, "").length ==0) { 
            return true; 
        } return false;
    }

    /**
     * 判断字符串是否包含某些字符
     */
    static StringHasStr (str : string) : boolean {
        if (str.indexOf("*" || "_" || "-" || "/" || "\"") >= 0) {
            return true;
        }
        return false;
    }

    /**
     * 单位换算
     * @param 数字
     * @return 换算后的结果
     */
    static UnitConversion (num : number) : any {
        let snum = Math.floor(num) + "";
        if (snum.length > 4) {
            snum = snum.substr(0, snum.length - 4) + "万";
        } else if (snum.length > 8) {
            snum = snum.substr(0, snum.length - 8) + "亿";
        }
        return snum;
    } 

    /**
     * 冒泡排序-降序
     */
    static BubbleSortDown (arr) {
        for(var j=0;j<arr.length-1;j++){
            //两两比较，如果前一个比后一个大，则交换位置。
               for(var i=0;i<arr.length-1-j;i++){
                    if(arr[i]<arr[i+1]){
                        var temp = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = temp;
                }
            } 
        }
        return arr;
    }

    /**
     * 排序
     */
    static Sort (arr, type = 'down') {
        if (type == 'down') {
            arr.sort(function(x, y) {
                return y - x;
            });
        } else {
            arr.sort(function(x, y) {
                return x - y;
            });
        }
        return arr;
    }
 }

 window['common'] = Common;