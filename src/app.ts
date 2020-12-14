import * as PIXI from "pixi.js";

export class Application {
  private image: HTMLImageElement;
  private phase: number;
  private renderer: PIXI.Renderer;
  private root: PIXI.Container;
  private sprite: PIXI.Sprite;
  private ticker: PIXI.Ticker;

  constructor() {
    this.renderer = new PIXI.Renderer({
      width: 720,
      height: 1280,
      backgroundColor: 0xffc0cb,
    });
    this.root = new PIXI.Container();

    this.image = new Image();
    this.image.src = "assets/logo.png";

    this.ticker = new PIXI.Ticker();

    this.ticker.add(() => {
      this.render();
    }, -25);
  }

  get view() {
    return this.renderer.view;
  }

  start() {
    const { width, height } = this.view;
    this.phase = 0;

    this.sprite = new PIXI.Sprite(PIXI.Texture.from(this.image));
    this.sprite.position.set(width / 2, height / 2);
    this.sprite.scale.set(0.3, 0.3);
    this.sprite.anchor.set(0.5, 0.5);

    this.root.addChild(this.sprite);

    this.ticker.add(() => {
      this.phase += 0.01;
      this.sprite.rotation = this.phase;
    });

    this.ticker.start();
  }

  render() {
    this.renderer.render(this.root);
  }
}
