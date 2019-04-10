const CANVAS_BORDER_COLOR = "black";
const CANVAS_BACKGROUND_COLOR = "white";
const SNAKE_COLOR = "lightgreen";
const SNAKE_BORDER_COLOR = "darkgreen";
const FOOD_COLOUR = "red";
const FOOD_BORDER_COLOUR = "darkred";
const SPIDER_COLOR = "yellow";
const SPIDER_BORDER_COLOR = "darkblue";

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
];

let score = 0;
let dx = 10;
let dy = 0;
let foodX, foodY, spiderX, spiderY;
let changingDirection = false;
let isSpiderPresent = true;

const gameCanvas = document.getElementById("gameCanvas");
const scoreId = document.getElementById("score");
const timerId = document.getElementById("spider-timer");
const ctx = gameCanvas.getContext("2d");

function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (didCollide) return true;
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > gameCanvas.width - 10;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > gameCanvas.height - 10;

  return hitBottomWall || hitRightWall || hitTopWall || hitLeftWall;
}

function randomTen(min, max) {
  return Math.round((Math.random() * (max - min)) / 10) * 10;
}

function createSpider() {
  spiderX = randomTen(0, gameCanvas.width - 10);
  spiderY = randomTen(0, gameCanvas.height - 10);

  snake.forEach(function(part) {
    const foodIsOnSnake = part.x === spiderX && part.y === spiderY;
    if (foodIsOnSnake) {
      createSpider();
    }
  });
}

function createFood() {
  foodX = randomTen(0, gameCanvas.width - 10);
  foodY = randomTen(0, gameCanvas.height - 10);

  snake.forEach(function(part) {
    const foodIsOnSnake = part.x === foodX && part.y === foodY;
    if (foodIsOnSnake) {
      createFood();
    }
  });
}

function clearSpider() {
  spiderX = spiderY = undefined;
}

function drawSpider() {
  ctx.fillStyle = SPIDER_COLOR;
  ctx.strokeStyle = SPIDER_BORDER_COLOR;
  ctx.fillRect(spiderX, spiderY, 10, 10);
  ctx.strokeRect(spiderX, spiderY, 10, 10);
}

function drawFood() {
  ctx.fillStyle = FOOD_COLOUR;
  ctx.strokeStyle = FOOD_BORDER_COLOUR;

  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

function clearCanvas() {
  ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
  ctx.strokeStyle = CANVAS_BORDER_COLOR;

  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = SNAKE_COLOR;
  ctx.strokeStyle = SNAKE_BORDER_COLOR;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function advanceSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
  const didEatSpider = snake[0].x === spiderX && snake[0].y === spiderY;
  if (didEatFood) {
    score += 10;
    scoreId.innerHTML = score;
    createFood();
  } else if (didEatSpider) {
    score += 50;
    scoreId.innerHTML = score;
    spiderX = spiderY = undefined;
    setTimeout(function() {
      createSpider();
    }, 3000);
  } else {
    snake.pop();
  }
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if (changingDirection) return;

  changingDirection = true;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }

  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }

  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }

  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

document.addEventListener("keydown", changeDirection);
function main() {
  if (didGameEnd()) return;
  setTimeout(function() {
    changingDirection = false;
    clearCanvas();
    drawFood();
    drawSpider();
    advanceSnake();
    drawSnake();
    main();
  }, 100);
}

main();
createFood();
createSpider();
