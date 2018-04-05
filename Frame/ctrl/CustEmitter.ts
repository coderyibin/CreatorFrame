// /**  
//  * 观察者  
//  */  
// class Observer {  
//     /** 回调函数 */  
//     private callback: Function = null;  
//     /** 上下文 */  
//     private context: any = null;  
  
//     constructor(callback: Function, context: any) {  
//         let self = this;  
//         self.callback = callback;  
//         self.context = context;  
//     }  
  
//     /**  
//      * 发送通知  
//      * @param args 不定参数  
//      */  
//     notify(...args: any[]): void {  
//         let self = this;  
//         self.callback.call(self.context, ...args);  
//     }  
  
//     /**  
//      * 上下文比较  
//      * @param context 上下文  
//      */  
//     compar(context: any): boolean {  
//         return context == this.context;  
//     }  
// }  
// /**  
//  * 事件  
//  */  
// export default class CustEmitter {
//     /** 监听数组 */  
//     private listeners = {};  
  
//     /**   
//      * 注册事件  
//      * @param name 事件名称  
//      * @param callback 回调函数  
//      * @param context 上下文  
//      */ 
//     public on(name: string, callback: Function, context: any) {  
//         let self : CustEmitter = this;
//         let observers: Observer[] = this.listeners[name];  
//         if (observers && name == "runScene") {
//             return;
//         }
//         if (!observers) {
//             self.listeners[name] = [];  
//         }  
//         self.listeners[name].push(new Observer(callback, context));  
//     }  
  
//     /**  
//      * 移除事件  
//      * @param name 事件名称  
//      * @param callback 回调函数  
//      * @param context 上下文  
//      */  
//     public remove(name: string, callback: Function, context: any) { 
//         let self : CustEmitter = this; 
//         let observers: Observer[] = self.listeners[name];  
//         if (!observers) return;  
//         let length = observers.length;  
//         for (let i = 0; i < length; i++) {  
//             let observer = observers[i];  
//             if (observer.compar(context)) {  
//                 observers.splice(i, 1);  
//                 break;  
//             }  
//         }  
//         if (observers.length == 0) {  
//             delete self.listeners[name];  
//         }  
//     }  
  
//     /**  
//      * 发送事件  
//      * @param name 事件名称  
//      */  
//     public emit(name: string, ...args: any[]) {  
//         let self : CustEmitter = this;
//         let observers: Observer[] = self.listeners[name];  
//         if (!observers) return;  
//         let length = observers.length;  
//         for (let i = 0; i < length; i++) {  
//             let observer = observers[i];  
//             observer.notify(name, ...args);  
//         }  
//     }  

//     private static _CustEmitter : CustEmitter;
//     public static getInstance () : CustEmitter {
//         if (! this._CustEmitter) {
//             this._CustEmitter = new CustEmitter();
//             return this._CustEmitter;
//         }
//         return this._CustEmitter;
//     }
// }


export default class CustEmitter {
    private static _gEmit : CustEmitter;
    public static getInstance () : CustEmitter {
        if (! this._gEmit) {
            this._gEmit = new CustEmitter();
        } return this._gEmit;
    }

    _event = {};

    on (name :string, cb : Function, target : any) : void{
        if (! this._event[name]) this._event[name] = {};
        if (! this._event[name]["cb"]) {
            this._event[name]["cb"] = [];
        }
        this._event[name]["cb"].push(cb);
        this._event[name]["target"] = target;
    }

    emit (name, data ?: any) : void {
        if (this._event[name]) {
            for (let i in this._event[name]["cb"]) {
                if (this._event[name]["cb"][i]) {
                    let tar = this._event[name]["target"];
                    this._event[name]["cb"][i](data);
                    // tar[name](data);
                    // tar[name].call(tar, data);
                    console.log('push ->', name);
                }
            }
        } else {
            console.warn("不存在该key订阅->", name);
        }
    }

    off (name : string) : void {
        if (this._event[name]) {
            console.log("remove->", name);
            delete this._event[name];
        } else {
            console.warn("不存在该key订阅->", name);            
        }
    }
}
window["G_Emitter"] = CustEmitter.getInstance();