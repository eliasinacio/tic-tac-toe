const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawMap() {
  ctx.fillStyle = "rgb(30, 30, 30)";
  ctx.fillRect(1, 10, 29, 1);
  ctx.fillRect(1, 20, 29, 1);
  ctx.fillRect(10, 1, 1, 29);
  ctx.fillRect(20, 1, 1, 29);
}

function drawCross(x = 0, y = 0) {
  x *= 10; y *= 10;

  ctx.fillStyle = "rgb(30, 30, 30)";

  for (let i = 2; i <= 8; i++) {
    ctx.fillRect(x + i, y + i, 1, 1);
    ctx.fillRect(x + i, y + 10 - i, 1, 1);
  }
}

function drawBall(x = 0, y = 0) {
  x *= 10; y *= 10;

  ctx.fillStyle = "rgb(30, 30, 30)";
  ctx.fillRect(x + 2, y + 4, 1, 1);
  ctx.fillRect(x + 2, y + 5, 1, 1);
  ctx.fillRect(x + 2, y + 6, 1, 1);
  ctx.fillRect(x + 3, y + 3, 1, 1);
  ctx.fillRect(x + 3, y + 7, 1, 1);
  ctx.fillRect(x + 4, y + 2, 1, 1);
  ctx.fillRect(x + 4, y + 8, 1, 1);
  ctx.fillRect(x + 5, y + 2, 1, 1);
  ctx.fillRect(x + 5, y + 8, 1, 1);
  ctx.fillRect(x + 6, y + 2, 1, 1);
  ctx.fillRect(x + 6, y + 8, 1, 1);
  ctx.fillRect(x + 7, y + 3, 1, 1);
  ctx.fillRect(x + 7, y + 7, 1, 1);
  ctx.fillRect(x + 8, y + 4, 1, 1);
  ctx.fillRect(x + 8, y + 5, 1, 1);
  ctx.fillRect(x + 8, y + 6, 1, 1);
}

function drawLineHorizontal(y = 0) {
  y *= 10;
  ctx.fillStyle = "rgba(200, 30, 30, 0.8)";
  ctx.fillRect(1, y + 5, 29, 1);
}

function drawLineVertical(x = 0) {
  x *= 10;
  ctx.fillStyle = "rgba(200, 30, 30, 0.8)";
  ctx.fillRect(x + 5, 1, 1, 29);
}

function drawDiagonal(d = 0) {
  ctx.fillStyle = "rgba(200, 30, 30, 0.8)";

  if (!d) {
    for (let i = 1; i <= 29; i++) {
      ctx.fillRect(i, i, 1, 1);
    }
  } else if (d) {
    for (let i = 29; i >= 1; i--) {
      ctx.fillRect(i, 30 - i, 1, 1);

    }
  }
}

function render(map) {
  drawMap();

  map.forEach((line, i) => {
    line.forEach((el, j) => {
      if (el === 'x') {
        drawCross(j, i);
      }
      if (el === 'o') {
        drawBall(j, i)
      }
    })
  });
}

render([
  ['x', 'o', 'x'],
  ['', 'x', 'x'],
  ['', 'o', ''],
]);