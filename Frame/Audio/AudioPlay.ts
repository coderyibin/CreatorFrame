import { RES } from "../common/resource";

export class AudioPlay  {
    private static _fctro : AudioPlay;
    public static getInstance () : AudioPlay {
        if (! this._fctro) {
            this._fctro = new AudioPlay();
        } return this._fctro
    }

    private _music = null;
    constructor () {
    }

    /** 
     * 播放音乐
    */
    playMusic (name : string) {
        if (! this._music) {
            this._music = cc.audioEngine.play(name, true, 1);
        }
    }

    /**
     * 停止当前音乐
     */
    stopMusic () {
        if (this._music) {
            cc.audioEngine.stop(this._music);
        }
    }
}