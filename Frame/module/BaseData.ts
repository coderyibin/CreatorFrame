/**
 * 所有数据的基类
 */

export class BaseData {

    constructor () {

    }

    //数据保存到本地
    _fSetLocalStorage (key : string, value : any) : void {
        if (! (value instanceof String)) {
            value = JSON.stringify(value);
        }
        cc.sys.localStorage.setItem(key, value);
    }

    //获取本地数据
    _fGetLocalStorage (key : string) : any {
        let value : string = cc.sys.localStorage.getItem(key);
        let data = JSON.parse(value) || {};
        return data;
    }

    //获取本地数据，不加容错
    getLocalStorage (key : string) : any {
        let value : string = cc.sys.localStorage.getItem(key);
        return value;
    }

    //清理数据
    _fClean (key : Array<string>) : any {
        for (let i in key) {
            cc.sys.localStorage.removeItem(key[i]);
        }
    }

}