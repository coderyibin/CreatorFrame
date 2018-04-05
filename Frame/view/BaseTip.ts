import LayerComponent from "./LayerComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseTip extends LayerComponent {

    onLoad () : void {
        super.onLoad();

        this.node.scale = 0.2;
        let action = cc.scaleTo(0.1, 1.1);
        let _action = cc.scaleTo(0.08, 1.0);
        this.node.runAction(cc.sequence(action, _action));
    }

    removeSelf () : void {
        let _action = cc.scaleTo(0.08, 0.3);
        this.node.runAction(cc.sequence(_action, cc.callFunc(()=>{
            super.removeSelf();
        })));
    }
}