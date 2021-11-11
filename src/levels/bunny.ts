import * as PIXI from "pixi.js";
import { Level } from "./index";
import { Application } from "../app";

export class Bunny extends Level {
  private image: HTMLImageElement;
  private phase: number;
  private sprite: PIXI.Sprite;

  constructor(json = {}) {
    super(json);

    this.image = new Image();
    this.image.src = "https://pixijs.io/examples/examples/assets/bunny.png";
    this.image.crossOrigin = "*";
  }

  init(app: Application) {
    const { game } = app;
    const { width, height } = app.view;

    this.phase = 0;

    this.sprite = new PIXI.Sprite(PIXI.Texture.from(this.image));
    this.sprite.position.set(width / 2, height / 2);
    this.sprite.anchor.set(0.5, 0.5);

    this.sprite.scale.set(3, 3);
    this.sprite.anchor.set(0.5, 0.5);

    game.world.addChild(this.sprite);

    app.ticker.add(() => {
      this.phase += 0.01;
      this.sprite.rotation = this.phase;
    });
  }
}
