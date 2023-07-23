import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.scene = scene;

    scene.anims.create({
      key: "shoot",
      frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 9 }),
      repeat: 0,
    });
  }

  shoot() {
    this.play("shoot");
  }

  display() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
  }
}
