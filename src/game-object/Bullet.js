import Phaser from "phaser";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
  }

  display() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setScale(0.2)

    this.setVelocityX(250)
  }
}
