import * as PIXI from "pixi.js";
import { Game } from "./system/game";

export class Application {
  private renderer: PIXI.Renderer;
  private game: Game;

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

    this.game = new Game(this);
  }

  get view() {
    return this.renderer.view;
  }

  start() {
    this.ticker.start();
    this.game.start();
  }

  render() {
    this.renderer.render(this.root);
  }

  destroy() {
    this.ticker.destroy();
    this.renderer.destroy();
  }
}
