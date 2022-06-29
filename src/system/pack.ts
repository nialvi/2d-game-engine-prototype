import * as PIXI from "pixi.js";
import { Application } from "../app";
import { Main as MainLevel } from "../levels/main";
import { Bunny as BunnyLevel } from "../levels/bunny";

export class Pack {
  app: Application;
  loader: PIXI.Loader;

  constructor(app) {
    this.app = app;
    this.loader = new PIXI.Loader();
  }

  start() {
    const { app } = this;
    const { game } = app;

    game.initLevel(new MainLevel());

    setTimeout(() => {
      game.initLevel(new BunnyLevel());
    }, 3000);
  }
}
