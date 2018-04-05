import { BaseData } from "./BaseData";

/**
 * 游戏数据单利
 */

export class ClientData extends BaseData{
    private _oResource : any;
    private _oGameConfig : any;
    private _oProductData : any;
    private _oEventData : any;
    private _oHouseData : any;
    private _curServer : any;
    private _msgCode : any;
    

    constructor () {
        super();
        let self = this;
        console.log("客户端数据初始化");
        self._oResource = {};
        self._oGameConfig = {};
        self._oEventData = {};
        self._oHouseData = {};
        self._curServer = {};
        // self._loadInitConfig();
    }

    initConfig (init) {
        this._oGameConfig = init;
    }

    getInitConfig () : inter_Init {
        return this._oGameConfig;
    }

    setServer (data) : void {
        this._curServer = data;
    } getServer () : any {return this._curServer;}

    static _oData : ClientData;
    static getInstance () : ClientData {
        let self = this;
        if (! self._oData) {
            self._oData = new ClientData();
            return self._oData;
        }
        return self._oData;
    }
}

// cc["ClientData"] = ClientData.getInstance();