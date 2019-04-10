const CANVAS_BORDER_COLOR = "black";
const CANVAS_BACKGROUND_COLOR = "white";
const SNAKE_COLOR = "lightgreen";
const SNAKE_BORDER_COLOR = "darkgreen";

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  {x: 130, y: 150 },
  {x: 120, y: 150 },
  {x: 110, y: 150 }
];

let dx = 10;
let dy = 0;

function drawSnakePart(snakePart) {
  ctx.fillStyle = SNAKE_COLOR;
  ctx.strokeStyle = SNAKE_BORDER_COLOR;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function advanceSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy}
  snake.unshift(head);
  snake.pop();
}


function drawSnake() {
  snake.forEach(drawSnakePart)
}

const gameCanvas = document.getElementById("gameCanvas");

const ctx = gameCanvas.getContext("2d");

ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
ctx.strokeStyle = CANVAS_BORDER_COLOR;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

drawSnake();
advanceSnake()
dx = 0;
dy = -10;
advanceSnake();
drawSnake();