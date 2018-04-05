
export class MsgCode {
    private static _msgCode : any = null;

    static initCode (init) {

        this._msgCode = init;
    }


    /**
     * 获取文本描述
     * @param key 表的code字段
     * @param str 是否替换消息内容的%符号-替换成str字符串
     */
    static getMsg (key, str ?: string) : string {
        let msg = this._msgCode;
        for (let i = 0; i < msg.length; i ++) {
            if (key == msg[i].Code) {
                if (str) {
                    return msg[i].Content.replace(/%/, str);
                }
                return msg[i].Content;
            }
        }
    }
}