import Phaser from "phaser";
import config from "../config";
import Button from "../game-object/Button";

const { width, height } = config;

export default class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  create() {
    this.background = this.add.rectangle(
      650 / 2,
      150 / 2,
      650,
      150,
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
          break;
      }
    });
  }
}
