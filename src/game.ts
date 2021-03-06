import "phaser";
import {Scenes} from "./scenes/scenes";

const config: Phaser.Types.Core.GameConfig = {
    title: "Green Typing",    //タイトル
    version: "0.0.1",       //バージョン
    type: Phaser.AUTO,      //canvasかwebGLかを自動選択
    scene: Scenes,      //利用するSceneクラス
    scale : {
        width : "100%",
        height : "100%",
        parent : "game",
    }
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