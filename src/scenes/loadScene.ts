import { Scene } from "phaser";
export class LoadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'load', active: false });
    }

    init():void{
        this.scene.launch("ScreenManager")
    }

    preload() {

        let centerX = this.game.canvas.width/ 2;
        let centerY = this.game.canvas.height / 2;

        let typeText = this.add.text(centerX,30,"loading files...",{fontSize : "40px"})
        typeText.setOrigin(0.5);

        //プログレスバー用のgraphics
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(centerX - 150,centerY - 50, 300, 54);

        let text = this.add.text(centerX,centerY + 80,"load");
        text.setOrigin(0.5);

        //ロードが進行したときの処理
        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(centerX - 150 , centerY - 50, 300 * value, 50);
        });

        //ファイルのロードに入ったときの処理
        this.load.on('fileprogress', function (file) {
            text.text = file.key;
        });

        //すべてのロードが完了したときの処理
        this.load.on('complete', function () {
            text.text = 'complete';
            function start(scene){
                scene.start("title")
            }
            setTimeout(start,3000,this.scene);
        },{scene:this.scene});
        
    }

    create(){

        this.load.image("title","Assets/images/Title.png");
        this.load.json("words","words.json");
        this.load.css("Assets/style");
        this.load.start();
    }
}

