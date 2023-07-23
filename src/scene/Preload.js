import Phaser from "phaser";
import WebFontFile from "../fonts/WebFontFile";
import config from "../config";

const { fontFamily } = config;

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("background", "images/bg.png");
    this.load.image("bg-bootstrap", "images/bg-bootstrap.png");
    this.load.spritesheet("player", "images/player.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.image("bullet", "images/bullet.png");

    this.load.image("enemy-1-1", "images/enemys/1/level1.png");
    this.load.image("enemy-1-2", "images/enemys/1/level2.png");
    this.load.spritesheet("explore-1", "images/enemys/1/power.png", {
      frameWidth: 640,
      frameHeight: 640,
      startFrame: -1,
    });

    this.load.image("enemy-2-1", "images/enemys/2/level1.png");
    this.load.image("enemy-2-2", "images/enemys/2/level2.png");
    this.load.spritesheet("explore-2", "images/enemys/2/power.png", {
      frameWidth: 640,
      frameHeight: 640,
      startFrame: -1,
    });

    this.load.addFile(new WebFontFile(this.load, fontFamily));
  }

  create() {
    this.scene.start("bootstrap");
  }
}
