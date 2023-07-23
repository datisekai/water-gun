import Phaser from "phaser";
import WebFontFile from "../fonts/WebFontFile";
import config from "../config";

const {fontFamily} = config

export default class Preload extends Phaser.Scene{
    constructor(){
        super('preload')
    }

    preload(){
        this.load.addFile(new WebFontFile(this.load, fontFamily));
    }

    create(){
        this.scene.start('play')
    }
}