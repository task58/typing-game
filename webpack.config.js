//パス名の生成
var path = require("path");
var pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
var phaser = path.join(pathToPhaser, "dist/phaser.js");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');  

//webpackの出力設定
module.exports = {
    mode : "production",
    //実行開始地点となるファイル
    entry: './src/game.ts',
    //出力先
    output: {
        //カレントパス/dist
        path: path.resolve(__dirname, "dist"),
        //出力ファイル名
    filename: "bundle.js"
    },
    //依存関係解決の対象とするモジュール
  module: {
        rules: [
            //*.ts なファイルはts-loaderに処理を依頼。但し/node_modules/内は除く
            { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" },
            //phaser.jsなファイルはexposer-loaderに処理を依頼。phaserをグローバルオブジェクトとして出力
      {
        test: /phaser\.js$/,
        loader: "expose-loader",
        options: {
          exposes:['phaser']
        }
      },
      
      
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/Assets/', to: 'Assets/' }
      ]
    })
  ],
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      phaser: phaser,
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true
  }
};