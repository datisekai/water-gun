import Phaser from "phaser";

import Preload from "./scene/Preload";
import Bootstrap from "./scene/Bootstrap";
import Play from "./scene/Play";
import configDefault from "./config";

const { width, height } = configDefault;

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Preload, Bootstrap, Play],
};

export default new Phaser.Game(config);
