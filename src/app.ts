import * as PIXI from "pixi.js";
import { Level } from "./levels";
import { Main as MainLevel } from "./levels/main";
import { Bunny as BunnyLevel } from "./levels/bunny";

export class Application {
  private renderer: PIXI.Renderer;
  private level: Level;

  root: PIXI.Container;
  ticker: PIXI.Ticker;

  constructor() {
    this.renderer = new PIXI.Renderer({
      width: 720,
      height: 1280,
      backgroundColor: 0xffc0cb,
    });
    this.root = new PIXI.Container();
    this.ticker = new PIXI.Ticker();

    this.ticker.add(() => {
      this.render();
    }, -25);

    this.level = new MainLevel({});
  }

  get view() {
    return this.renderer.view;
  }

  start() {
    this.ticker.start();
    this.level.init(this);

    setTimeout(() => {
      this.level = new BunnyLevel({});
      this.level.init(this);
    }, 3000);
  }

  render() {
    this.renderer.render(this.root);
  }

  destroy() {
    this.ticker.destroy();
    this.renderer.destroy();
  }
}
