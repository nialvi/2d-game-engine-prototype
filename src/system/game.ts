import { Application } from "../app";
import { Level } from "../levels";
import { Main as MainLevel } from "../levels/main";
import { Bunny as BunnyLevel } from "../levels/bunny";

export class Game {
  private app: Application;
  private level: Level;

  constructor(app) {
    this.app = app;

    this.level = new MainLevel({});
  }

  start() {
    const { app } = this;

    this.level.init(app);

    setTimeout(() => {
      this.level = new BunnyLevel({});
      this.level.init(app);
    }, 3000);
  }
}
