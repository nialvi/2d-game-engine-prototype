export class Application {
  view: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor() {
    this.view = document.createElement("canvas");

    this.view.width = 800;
    this.view.height = 600;

    const { width, height } = this.view;

    this.context = this.view.getContext("2d");
    this.context.fillStyle = "pink";
    this.context.fillRect(0, 0, width, height);
  }
}
