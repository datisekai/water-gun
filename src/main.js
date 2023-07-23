import Phaser from "phaser";

import Preload from "./scene/Preload";
import Bootstrap from "./scene/Bootstrap";
import Play from "./scene/Play";
import configDefault from "./config";
import GameOver from "./scene/Gameover";

const { width, height } = configDefault;

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
    },
  },
 
  scene: [Preload, Bootstrap, Play, GameOver],
};

export default new Phaser.Game(config);
