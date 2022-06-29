import * as PIXI from "pixi.js";
import { Level } from "./index";
import { Application } from "../app";

export class Main extends Level {
  private image: HTMLImageElement;
  private phase: number;
  private sprite: PIXI.Sprite;

  constructor(json = {}) {
    super(json);

    this.image = new Image();
    this.image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YjuHXt2z0ZXBa2j37SRcA9zrvoK-Ra3wUQ&usqp=CAU";
    this.image.crossOrigin = "*";
  }

  init(app: Application) {
    const { game } = app;
    const { width, height } = app.view;
    this.phase = 0;

    this.sprite = new PIXI.Sprite(PIXI.Texture.from(this.image));
    this.sprite.position.set(width / 2, height / 2);
    this.sprite.anchor.set(0.5, 0.5);

    game.world.addChild(this.sprite);

    game.ticker.add(() => {
      this.phase += 0.01;

      const tex = this.sprite.texture;

      tex.frame.width = tex.baseTexture.width * this.phase;

      tex.updateUvs();
    });
  }
}
