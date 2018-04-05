/**
 * 该脚本为逻辑组件脚本基类，所有逻辑节点都继承该类
 * Justin 创建于 2017/12/24
 */
const {ccclass, property, executionOrder} = cc._decorator;
import { ClientData } from "../module/ClientData"
import { RES, RES_TYPE } from "../common/resource";
import { LOCAL_KEY, I18N } from "../common/Common";
import ButtonClick from "./ButtonClick";
import BaseLabel from "./BaseLabel";
import CustEmitter from "../ctrl/CustEmitter";
// import { ResDefine } from "../common/ResDefine";

@ccclass
@executionOrder(0)
export default class BaseComponent extends cc.Component {
    // @property([cc.ScrollView])
    // ArrScrollView : cc.ScrollView[] = [];
    @property([cc.Node])
    ArrButton : cc.Node[] = [];
    @property([cc.Label])
    ArrLabel : cc.Label[] = [];
    @property([cc.EditBox])
    ArrEditsBox : cc.EditBox[] = [];
    @property([cc.ScrollView])
    ArrScrollView : cc.ScrollView[] = [];
    @property([cc.Sprite])
    ArrSprite : cc.Sprite[] = [];
    // @property(cc.Node)
    // Canvas : cc.Node = null;
    // @property({
    //     type : cc.Node,
    //     tooltip: "这是一个屏蔽层layer",
    // })
    // ShieldNode : cc.Node = null;

    _emitter : CustEmitter;
    _client : ClientData;
    _logicComponentName : string;
    _spriteFrame : {};
    _fExitFunc : Function;
    _ScrollData : any;//滚动视图对象集合
    _ButtonData : any;//按钮对象集合
    _LabelData : any;//文本对象集合
    _EditBoxData : any;//输入框对象集合
    _Canvas : cc.Node;//尽量使用当前
    _layerChilds : any;
    onLoad () : void {
        //隐藏帧率
        cc.director.setDisplayStats(false);
        let self = this; 
        self._emitter = CustEmitter.getInstance();
        self._client = ClientData.getInstance();
        self._initData();
        //逻辑节点脚本名称
        this._Canvas = cc.find("Canvas");
        //注册按钮事件
        self._registerButton();
        //解析文本对象
        self._fLabelObject();
        //接续输入框对象
        self._fEditBoxObject();
        //解析滚动层对象
        self._fScrollViewObject();
    }

    _initData () : void {
        let self = this;
        self._fExitFunc = null;
        self._LabelData = {};
        self._EditBoxData = {};
        self._ButtonData = {};
        self._ScrollData = {};
        self._layerChilds = {};
    }

    protected _isNative (): boolean {
        return cc.sys.isNative;
    }

    /**
     * 注册按钮事件
     */
    private _registerButton () : void {
        let self = this;   
        for (let i in self.ArrButton) {
            let _node = self.ArrButton[i];
            let _btn : ButtonClick = _node.getComponent("ButtonClick");
            if (! _btn) {
                _btn = _node.addComponent("ButtonClick");
            }
            _btn.CreateButton(self, _node.name);
            self._ButtonData[_node.name] = _btn;
        }
    }

    /**
     * 分析文本对象
     */
    private _fLabelObject () : void {
        let self = this;
        for (let i in self.ArrLabel) {
            let node = self.ArrLabel[i].node;
            if (node) {
                let sName = node.name;
                // if (I18N === true) {//开启多语言
                //     let localized = self.ArrLabel[i].getComponent("LocalizedLabel");
                //     if (! localized) {
                //         node.addComponent("LocalizedLabel");
                //     }
                // }
                self._LabelData[sName] = self.ArrLabel[i];
            } else {
                console.warn('文本对象有误', i);
            }
        }
    }

    /**
     * 解析输入框对象
     */
    private _fEditBoxObject () : void { 
        let self = this;
        for (let i in self.ArrEditsBox) {
            let node = self.ArrEditsBox[i].node;
            let name = node.name;
            let funcName = "_editBox_change_" + name;
            if (self[funcName]) self.ArrEditsBox[i].node.on("text-changed", self[funcName].bind(self), self);
            funcName = "_editBox_began_" + name;
            if (self[funcName]) self.ArrEditsBox[i].node.on("editing-did-began", self[funcName].bind(self), self);
            funcName = "_editBox_return_" + name;
            if (self[funcName]) self.ArrEditsBox[i].node.on("editing-did-ended", self[funcName].bind(self), self);
            self._EditBoxData[name] = self.ArrEditsBox[i];
        }
    }

    /**
     * 解析滚动视图对象
     */
    private _fScrollViewObject () : void {
        let self = this;
        for (let i in self.ArrScrollView) {
            let name = self.ArrScrollView[i].node.name;
            self._ScrollData[name] = self.ArrScrollView[i];
        }        
    }

    /**
     * 刷新列表视图
     * @param 列表名称
     * @param 列表单位所有预制节点
     * @param 是否跳到列表底下
     */
    reFreshList (name : string, module, is=false) : void {
        let data = this[`_list_${name}`]();
        let node : cc.Node = this._ScrollData[name].content;
        node.removeAllChildren();
        node.height = 0;

        //一排几个单元
        if (! this[`_col_${name}`]) {
            this[`_col_${name}`] = 1;
        }

        let scroll : cc.ScrollView = this._ScrollData[name].getComponent(cc.ScrollView);
        let index = 0;
        for (let i in data) {
            let _node = this.itemJoinList(data[i], name, module, node);
            node.addChild(_node);
            let lay : cc.Layout = node.getComponent(cc.Layout);
            index ++;
            if (this[`_col_${name}`] < index) {
                index = 0;
                node.height += _node.height + lay.spacingY + lay.spacingX;
            }
        }
        if (is === true) scroll.scrollToOffset(new cc.Vec2(0, node.height));
    }

    /**
     * 添加数据到列表视图
     */
    joinToList (name : string, module, is=true) {
        let data = this[`_join_${name}`]();
        let node : cc.Node = this._ScrollData[name].content;
        let _node : cc.Node = this[`_unit_${name}`]['show'](module, data, node);
        let lay : cc.Layout = node.getComponent(cc.Layout);
        node.height += _node.height + lay.spacingY + lay.spacingX;
        let scroll : cc.ScrollView = this._ScrollData[name].getComponent(cc.ScrollView);
        if (is === true) scroll.scrollToOffset(new cc.Vec2(0, node.height));
        node.addChild(_node);
    }

    /**
     * item join scroll
     */
    itemJoinList (data, name, module, node) : any {
        let _node : cc.Node = this[`_unit_${name}`]['show'](module, data, node);
        return _node;
    }

     /**
     * 显示Layer
     * @param layer名称
     * @param layer数据
     * @param 添加到的指定节点，如果没有，默认添加到当前node
     */
    showLayer (module : string, data ?: any, parent ?: cc.Node) : any {
        let node = RES.fGetRes(module);
        let comp = node.getComponent(module);
        if (comp) {
            node.getComponent(module).init(data);
            let canvas = this._Canvas;
            // this._fAddLayerToCanvas(node.name);
            if (! parent) canvas.addChild(node);  
            else parent.addChild(node);  
            this._layerChilds[module] = node;
            return node;
        } else {
            cc.warn("未创建脚本组件", module);
        }
    }

    /**
     * 更改layer层级
     * 只能更改居于父节点的
     */
    changeLayerIndex (module : string, index) {
        let node : cc.Node = this._layerChilds[module];
        node.setLocalZOrder(index);
    }

    /**
     * 显示unit单元
     */
    showUnit (unit_class, unit_name, data ?: any) : any {
        let node = unit_class.show(unit_name, data);
        return node;
    }

    /**
     * 添加屏蔽层到canvas节点
     */
    _fAddLayerToCanvas (name : string) : void {
        let canvas = this._Canvas;
        let node = new cc.Node();
        node.name = `shield${name}`;
        let btn = node.addComponent(cc.Button);
        node.setContentSize(this.getWinSize());
        canvas.addChild(node);
        node.color = cc.Color.GRAY;
    }

    /**
     * 判断当前节点是否是逻辑节点--会在下一个版本去除，逻辑节点统一由Canvas管理
     * @return 是否是逻辑节点
     */
    _isLogicNode () : boolean {
        let self = this;
        return self.node.name == "LogicNode" ? true : false; 
    }

    /**
     * 设置label属性
     */
    setLabel (data : any) : cc.Label {
        let label : cc.Label = data.label || new cc.Label;
        if (data.color) label.node.color = data.color; 
        if (data.string) label.string = data.string; 
        return label;
    }

    /**
     * 获取当前场景大小
     * @return 场景大小尺寸
     */
    getWinSize () : cc.Size {
        return cc.director.getWinSize();
    }

    /**
     * 获取当前脚本对象名称
     * @return 脚本对象名称
     */
    getObjectName () : string {
        let self = this;
        let name : string = self.name;
        let index : number = name.indexOf("<");
        name = name.slice(index + 1, name.length - 1);
        return name;
    }

    /**
     * 当前组件被销毁时调用
     */
    onDestroy () : void {
       
    }

    /**
     * 场景跳转之前做的一些业务
     */
    onExit () : void {
        let self = this;
        if (self._fExitFunc) self._fExitFunc(); 
        //当前场景资源的释放
        RES.fReleaseRes(RES_TYPE.MODULE);
    }

    /**
     * 清理游戏数据
     * @param key 要清理的对象数据数组 
     */
    _cleanData (key : Array<string>) : void {
        let self = this;
        // self._playerCtrl.fCleanData([LOCAL_KEY.PLAYER]);
    }
}