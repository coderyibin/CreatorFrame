import { NET_CODE } from "../common/Common";
import CustEmitter from "../ctrl/CustEmitter";

export class Http {

    private static _http : Http;
    static getInstance () : Http {
        if (! this._http) {
            this._http = new Http();
        } return this._http;
    }

    requestGet (url, param, cb) {
        this._request(url + '?' + param, "GET", cb);
    }

    test () {
        this._request('http://127.0.0.1:1700', "GET", (msg)=>{
            console.log('http测试消息', msg);
        });
    }

    /**
     * http请求
     * @param param 参数-链接与参数-get  链接-post 
     * @param type 
     * @param cb 
     */
    private _request (param, type, cb) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = JSON.parse(xhr.responseText);
                console.log('http->', response);
                if (response.code == NET_CODE.CODE_NONE) {

                } else if (response.code == NET_CODE.CODE_ERROR) {
                    CustEmitter.getInstance().emit("Msg", {content : response.data.content});
                }
            }   
        };
        xhr.open(type, param, true);
        xhr.send();
    }
}
window['http'] = Http.getInstance();