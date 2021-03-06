import {Button} from "phaser3-components-ts/Button"

export class MenuScene extends Phaser.Scene{
    private freeModeButton:Button;

    constructor(){
        super({
            key : "menu"
        })
    }

    create():void{
        this.freeModeButton = this.add.existing(new Button(this,10,10,"Free Mode"))
        this.freeModeButton.setCallBack(()=>{
            this.scene.start("freemode");
        },{scene:this.scene})

    }
}