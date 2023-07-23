import Phaser from "phaser";
import config from "../config";

const { width, height } = config;

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, type) {
    const y = Phaser.Math.Between(50, height - 50);
    super(scene, width, y, `enemy-${type}-1`);

    this.level = 1;
    this.scene = scene;
    this.type = type;

    scene.anims.create({
      key: `explore-${type}-anims`,
      frames: scene.anims.generateFrameNumbers(`explore-${type}`, {
        start: 0,
        end: 3,
      }),
      repeat: 0,
      hideOnComplete: true,
    });

    this.on("animationcomplete", (animation, frame) => {
      if (animation.key === `explore-${type}-anims`) {
        console.log("destroy");
        this.destroy();
      }
    });
  }

  display() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setScale(0.1);

    this.setSize(this.width * 0.5, this.height * 0.5);

    this.setVelocityX(-50);
    this.setVelocityY(Phaser.Math.Between(-100,100))

    this.setBounce(1)
    this.setCollideWorldBounds(true)
  }

  levelUp() {
    this.level = 2;
    this.setTexture(`enemy-${this.type}-2`);
  }

  explore() {
    this.disableBody()
    this.setTexture(`explore-${this.type}`);
    this.play(`explore-${this.type}-anims`);
  }
}
