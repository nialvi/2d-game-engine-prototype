export class Application {
  view: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private phase: number;

  constructor() {
    this.view = document.createElement("canvas");

    this.view.width = 800;
    this.view.height = 600;

    this.context = this.view.getContext("2d");

    this.image = new Image();
    this.image.src =
      "https://www.clipartmax.com/png/full/479-4796082_praise-the-sun-transparent-dark-souls-sun-logo.png";
  }

  start() {
    this.phase = 0;
    const gameLoop = () => {
      this.phase += 0.01;

      this.render();
      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
  }

  render() {
    const { width, height } = this.view;

    this.context.fillStyle = "pink";
    this.context.fillRect(0, 0, width, height);

    const imageWidth = this.image.width;
    const imageHeight = this.image.height;

    this.context.save();
    this.context.translate(width / 2, height / 2);
    this.context.scale(0.3, 0.3);
    this.context.rotate(this.phase);

    this.context.drawImage(this.image, -imageWidth / 2, -imageHeight / 2);
    this.context.restore();
  }
}
