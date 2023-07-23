import Phaser from "phaser";

import Preload from "./scene/Preload";
import Bootstrap from "./scene/Bootstrap";
import Play from "./scene/Play";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Preload, Bootstrap, Play	],
};

export default new Phaser.Game(config);
