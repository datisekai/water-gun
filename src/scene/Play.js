import Phaser from "phaser";
import config from "../config";
import Player from "../game-object/Player";
import Bullet from "../game-object/Bullet";
import Enemy from "../game-object/Enemy";

const { width, height, fontFamily } = config;

export default class Play extends Phaser.Scene {
  constructor() {
    super("play");
  }

  create() {
    this.background = this.add.tileSprite(
      width / 2,
      height / 2,
      576,
      324,
      "background"
    );
    this.bulletGroup = this.physics.add.group();
    this.enemyGroup = this.physics.add.group();
    this.player = this.createPlayer();
    this.score = 0;
    this.scoreLabel = this.createLabel();

    setInterval(() => {
      this.playerShoot();
    }, 600);

    setInterval(() => {
      this.createEnemy();
    }, 3000);

    this.cursor = this.input.keyboard.createCursorKeys();

    this.input.on("pointermove", (pointer) => {
      if (pointer.y > height - this.player.height / 2) {
        this.player.y = height - this.player.height / 2;
        return;
      }

      if (pointer.y < -this.player.height / 2) {
        this.player.y = -this.player.height / 2;
        return;
      }

      this.player.y = pointer.y;
    });

    this.physics.add.overlap(
      this.bulletGroup,
      this.enemyGroup,
      (bullet, enemy) => {
        bullet.destroy();
        if (enemy.x >= width) {
          return;
        }
        switch (enemy.level) {
          case 1:
            enemy.levelUp();
            break;
          case 2:
            enemy.explore();
            this.score++;
            this.scoreLabel.setText(`Score: ${this.score}`);
            if (Phaser.Math.Between(1, 2) == 1) {
              this.createEnemy();
            }
            break;
        }
      },
      null,
      this
    );

    this.physics.add.collider(this.player, this.enemyGroup, () => {
      this.scene.launch("game-over");
      this.scene.pause();
    });
  }

  createLabel() {
    const scoreLabel = this.add
      .text(width - 50, 20, `Score: 0`, {
        fontFamily: fontFamily,
        color: "#fff",
      })
      .setOrigin(0.5);

    return scoreLabel;
  }

  createEnemy() {
    const enemy = new Enemy(this, Phaser.Math.Between(1, 2));
    this.enemyGroup.add(enemy);
    enemy.display();
    return enemy;
  }

  createPlayer() {
    const player = new Player(this, 70, 100, "player");
    player.display();
    return player;
  }

  playerShoot() {
    this.player.shoot();
    const bullet = new Bullet(
      this,
      this.player.x + 20,
      this.player.y + 19,
      "bullet"
    );
    this.bulletGroup.add(bullet);
    bullet.display();
  }

  update() {
    this.background.tilePositionX += 3;

    this.bulletGroup.getChildren().forEach((bullet) => {
      if (bullet.x > width + 100) {
        bullet.destroy();
      }
    });
  }
}
