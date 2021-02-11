import "phaser";
import {Scenes} from "./scenes/scenes";
import "./data";
import { data } from "./data";

const config: Phaser.Types.Core.GameConfig = {
    title: "Green Typing",    //タイトル
    version: "0.0.1",       //バージョン
    width: data.window.width,             //画面幅
    height: data.window.height,            //画面高さ
    parent:"game",          //DOM上の親
    type: Phaser.AUTO,      //canvasかwebGLかを自動選択
    scene: Scenes      //利用するSceneクラス
};

//ゲームメインのクラス
export class Game extends Phaser.Game{
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

//windowイベントで、ロードされたらゲーム開始
window.addEventListener("load", () => {
    var game = new Game(config);
});