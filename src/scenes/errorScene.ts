export class ErrorScene extends Phaser.Scene{
    private Errordata;
    constructor(){
        super({
            key : "error"
        })
    }

    init(data:object){
        this.Errordata = data;
    }

    create():void{
        this.add.text(30,30,this.Errordata.msg);
    }
}