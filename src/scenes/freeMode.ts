import { Button } from "phaser3-components-ts/Button";
import { InputManager } from "phaser3-components-ts/InputManager";
import { Char, TextCharList } from "../text";

export class FreeModeScene extends Phaser.Scene{
    private jsonData:any;
    private words:Array<string>;
    private wordText:TextCharList
    private nextWord:boolean;
    private typeCount:number;
    private inputManager:InputManager;
    private word:Array<string>;

    constructor(){
        super({
            key : "freemode"
        })
        this.words = new Array<string>();
    }

    init(){
        this.cameras.main.setBackgroundColor("ffffff")
    }

    create(){
        this.inputManager = this.scene.get("InputManager") as InputManager
        this.jsonData = this.cache.json.get("words");
        console.log(this.jsonData)
        if(!this.jsonData){
            this.scene.start("error",{
                msg:"Error:words.json get failure."
            })
        }
        for(let id in this.jsonData){
            let elem = this.jsonData[id];
            if(!elem.words){
                this.scene.start("error",{
                    msg:"Error:The format of words.json is strange."
                })
            }
            for(let word of elem.words){
                if (typeof(word) != "string") {
                    this.scene.start("error",{
                        msg:"Error:The data type of words.json is incorrect"
                    })
                }
                this.words.push(word)
            }
            
        }

        let centerX = this.game.canvas.width/ 2;
        let centerY = this.game.canvas.height / 2;

        this.nextWord = true;
        
        let button = this.add.existing(new Button(this,0,0,"return menu"))
        button.setCallBack(()=>{
            this.scene.start("menu");
        },this)
    }

    update(){
        if(this.nextWord){
            this.nextWord=false;
            let index = Math.floor(Math.random() * (this.words.length))
            let str = this.words[index]
            this.word = str.split("");
            let chars = new Array<Char>();
            for(let char of this.word){
                chars.push(new Char(char))
            }
            this.wordText = new TextCharList(this,chars)
            this.typeCount = 0;
        }
        
        if(this.inputManager.getKeyDown(this.wordText.getNowChar())){
            console.log("押されたよ")
            if(!this.wordText.next()){
                this.nextWord = true;
                this.wordText.delete();
            }
        }
    }
}