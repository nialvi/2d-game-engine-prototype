import { Application } from "./app";

const app = new Application();
const container = document.getElementById("app");

container.appendChild(app.view);

app.start();
