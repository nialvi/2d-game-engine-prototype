import * as PIXI from "pixi.js";
import { Application } from "../app";
import { Level } from "../levels";
import { Main as MainLevel } from "../levels/main";
import { Bunny as BunnyLevel } from "../levels/bunny";

export class Game {
  app: Application;
  world: PIXI.Container;
  ticker: PIXI.Ticker;
  private level: Level;

  constructor(app) {
    this.app = app;

    this.level = new MainLevel();

    this.app.ticker.add(() => {
      if (this.ticker) {
        this.ticker.update();
      }
    });

    this.reset();
  }

  reset() {
    if (this.world) {
      this.world.destroy({ children: true });
    }

    this.world = new PIXI.Container();
    this.ticker = new PIXI.Ticker();
    this.app.root.addChild(this.world);
  }

  initLevel(level) {
    this.level = level;
    this.reset();
    this.level.init(this.app);
  }

  start() {
    this.initLevel(new MainLevel());

    setTimeout(() => {
      this.initLevel(new BunnyLevel());
    }, 3000);
  }
}
