import { Scene } from "phaser";

export class TextChar extends Phaser.GameObjects.Text{
    constructor(scene: Phaser.Scene, x: number, y: number, char: string){
        super(scene,x,y,char,{
            color : "#000000"
        })
        if(char.length != 1)this.scene.scene.start("error",{msg:""})
    }

    public typing(){
        this.setColor("#008000");
    }
}

export class TextCharList{
    private chars : Array<TextChar>;
    private scene : Phaser.Scene
    private typingCount : number;

    constructor(scene:Phaser.Scene,chars:Char[]){
        this.scene = scene;
        this.chars = new Array<TextChar>();
        for(let char of chars){
            this.chars.push(new TextChar(this.scene,0,0,char.toString()))
        }
        
        this.resize();

        this.typingCount = 0;
    }

    public resize():void{
        let TextWidth = this.scene.game.canvas.width - 30;
        let centerY = this.scene.game.canvas.height / 2;
        let charSize = TextWidth / this.chars.length - 10;
        let pointerPosition = 20;
        for(let char of this.chars){
            char.setFontSize(charSize)
            char.setPosition(pointerPosition,centerY);
            pointerPosition += (charSize+10)
            this.scene.add.existing(char);
        }
        
    }

    public getNowChar():string{
        return this.chars[this.typingCount].text
    }

    public next():boolean{
        this.chars[this.typingCount].typing();
        this.typingCount+=1;
        if(!this.chars[this.typingCount])return false
        return true;
    }

    public delete(){
        for(let char of this.chars){
            char.destroy();
        }
    }
}

export class Char{
    private data:string

    constructor(char:string){
        if(char.length != 1)throw "";
        this.data = char;
    }

    public toString():string{return this.data}
    public static get(char:string):Char{return new Char(char);}
}