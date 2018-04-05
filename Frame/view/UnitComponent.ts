import ButtonClick from "./ButtonClick";
import { Common } from "../common/Common";
import BaseComponent from "./BaseComponent";
import { RES } from "../common/resource";
import CustEmitter from "../ctrl/CustEmitter";

/**
 * 单元类型脚本组件
 */

 const {ccclass, property} = cc._decorator;

 @ccclass
 export class UnitComponent extends cc.Component {

    //静态数据-接收外部传进来的数据
    static oData : null;
    /**
     * 要显示的单元名称
     * @param prefab 要显示的单元预制资源名称
     * @param data 数据
     * @return 单元节点
     */
    public static show (prefab : string, data ?: any) : cc.Node {
        let node = RES.fGetRes(prefab);
        if (node) {
            UnitComponent.oData = data;
            return node;
        } console.log("获取到的节点为空->", prefab);
    }

    //单元脚本组件名称
    _sUnitCompName : string;
    //父节点
    _nodeParent : cc.Node;
    //单元组件的数据id
    _nUnitDataId : number;
    //脚本数据
    _oData : any;
    //父节点
    _parent : cc.Node;
    //事件名称
    _event = [];
    
    onLoad () : void {
        // super.onLoad(); 
        let self = this;
        self._oData = UnitComponent.oData;
        UnitComponent.oData = null;
        self._fInitUI();
    }

    start () : void {
        let self = this;
        self.initValue();
        self.initUi();
    }

    _fInitUI () : void {
        let btn : ButtonClick = this.node.addComponent("ButtonClick");
        btn.CreateButton(this, Common.fGetObjectName(this));
    }

    initValue () : void {

    }
    initUi () : void {

    }

    onDestroy () : void {
        for (let i = 0; i < this._event.length; i ++) {
            CustEmitter.getInstance().off(this._event[i]);
        }
    }
 }