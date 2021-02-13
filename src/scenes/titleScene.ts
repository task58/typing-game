import "../data"
import { data } from "../data"
import { InputManager } from "phaser3-components-ts/InputManager"

export class TitleScene extends Phaser.Scene{
    private inputManager:InputManager

    constructor(){
        super({
            key : "title"
        })
    }

    create():void{
        this.cameras.main.setBackgroundColor("#ffffff");
        let centerX = data.window.width / 2;
        let centerY = data.window.height / 2;

        this.add.sprite(centerX,centerY,"title")

        this.add.text(centerX,centerY + 150,"Press the spacebar to start!",{color : "#000000"})
    }

    update():void{
        if(this.inputManager.getKeyDown("SPASE")){
            this.scene.start("menu");
        }

    }
}