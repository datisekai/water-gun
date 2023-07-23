import Phaser from "phaser";
import config from "../config";
import Button from "../game-object/Button";

const { width, height } = config;

export default class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  create() {
    this.add.image(width/2, height/2, "bg-bootstrap").setScale(0.55);
    this.background = this.add.rectangle(
      width / 2,
      height / 2,
      width,
      height,
      0x000000,
      0.6
    );

    this.play = new Button(
      this,
      width / 2,
      height / 2,
      150,
      60,
      "Play",
      0x000000,
      0xffffff
    );

    this.input.on("gameobjectdown", (pointer, gameobject) => {
      switch (gameobject) {
        case this.play:
          this.scene.start("play");
          break;
      }
    });
  }
}
