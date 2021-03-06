import { InputManager } from "phaser3-components-ts/InputManager"

export class TitleScene extends Phaser.Scene{
    private inputManager:InputManager

    constructor(){
        super({
            key : "title"
        })
    }

    init():void{
        this.scene.launch("InputManager")
        this.inputManager = this.scene.get("InputManager") as InputManager;
    }

    create():void{
        this.cameras.main.setBackgroundColor("#ffffff");
        let centerX = this.game.canvas.width/ 2;
        let centerY = this.game.canvas.height / 2;

        this.add.sprite(centerX,centerY,"title")

        this.add.text(centerX,centerY + 150,"Press the spacebar to start!",{color : "#000000"})
    }

    update():void{
        if(this.inputManager.getKeyDown("SPACE")){
            this.scene.start("menu");
        }
    }
}