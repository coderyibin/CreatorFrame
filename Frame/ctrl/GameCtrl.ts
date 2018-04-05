import { BaseCtrl } from "./BaseCtrl";
import { RES } from "../common/resource";
import { Common, OPENNET, NET_CODE, ROUTE } from "../common/Common";
// import { TaskCtrl } from "../../Game/Ctrl/TaskCtrl";
// import { GuideCtrl } from "../../Game/Ctrl/GuideCtrl";
// import { UserCtrl } from "../../Game/Ctrl/UserCtrl";
// import { ItemCtrl } from "../../Game/Ctrl/ItemCtrl";
import { MsgCode } from "../common/MsgCode";
import Pomelo from "../pomelo/pomelo";

export class GameCtrl extends BaseCtrl {

    private static _fctor : GameCtrl;
    public static getInstance () : GameCtrl {
        if (! this._fctor) {
            this._fctor = new GameCtrl();
        } return this._fctor;
    }

    private _config;
    private _res;
    constructor () {
        super("GameCtrl");

        this._res = RES.Res.global;
        this.initCtrl();
    }

    initCtrl () {
        this._initConfig();
        this._initMsgCode();


        // this._initItem();
        // this._initTask();
        // this._initGuide();
    }

    /**
     * 初始化配置
     */
    _initConfig () {
        if (! this._res.config) {
            console.warn('项目不存在配置文件config');
            return;
        }
        let config = this._configDecode(this._res.config)
        this._config = config[0];
    }

    /**
     * 获取游戏配置
     */
    getGameConfig () {
        return Common.CloneJSON(this._config);
    }

    /**
     * 初始化道具表
     */
    _initItem () {
        let item = this._configDecode(this._res.Item)
        // ItemCtrl.getInstance().initItem(item);
        delete this._res.Item;
    }

    /**
     * 初始化任务表
     */
    _initTask () {
        let task = this._configDecode(this._res.Task)
        // TaskCtrl.getInstance().initTask(task);
        delete this._res.Task;
    }

    /**
     * 初始化游戏消息文本
     */
    _initMsgCode () {
        let msg = this._configDecode(this._res.MsgCode)
        MsgCode.initCode(msg);
        delete this._res.MsgCode;
    }

    /**
     * 初始化新手引导数据
     */
    _initGuide () {
        let Guide = this._configDecode(this._res.Guide)
        // GuideCtrl.getInstance().initGuide(Guide);
        delete this._res.Guide;
    }

    /**
     * 配置文件解码
     * python 生成的配置文件是以base64加密的方式
     */
    _configDecode (str : string) {
        if (! str) return;
        return JSON.parse(Common.BaseDecode(str));
    }

    /**
     * 登陆管理
     */
    login (account ?: any, password ?: any, data ?: any) {
        if (cc.sys.os == cc.sys.OS_ANDROID) {

        } else if (cc.sys.os == cc.sys.OS_IOS) {
            // UserCtrl.getInstance().UserLogin(account);
        } else { 
            // UserCtrl.getInstance().UserLogin(account);
        }
        this._netLogin(account, password, data);
        
    }

    /**
     * 网络登陆链接
     */
    _netLogin (account ?: any, password ?: any, data ?: any) {
        if (OPENNET) {
            Pomelo.getInstance().initPomelo(account, data.roomid, (msg)=>{
                Pomelo.getInstance().request(ROUTE.GOTOROOM, {account : account, roomId : data.roomid}, ()=>{

                });
            });
        }
    }

    /**
     * 重启游戏
     */
    reStartGame () {
        cc.game.restart();
    }
}