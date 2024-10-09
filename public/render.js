const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLines () {
  ctx.fillStyle = "rgb(30 30 30)";
  ctx.fillRect(1, 10, 29, 1);
  ctx.fillRect(1, 20, 29, 1);
  ctx.fillRect(10, 1, 1, 29);
  ctx.fillRect(20, 1, 1, 29);
}

function drawX (x=0, y=0){
  ctx.fillStyle = "rgb(30 30 30)";
  ctx.fillRect(x+2, y+2, 1, 1);
  ctx.fillRect(x+3, y+3, 1, 1);
  ctx.fillRect(x+4, y+4, 1, 1);
  ctx.fillRect(x+5, y+5, 1, 1);
  ctx.fillRect(x+6, y+6, 1, 1);
  ctx.fillRect(x+7, y+7, 1, 1);
  ctx.fillRect(x+8, y+8, 1, 1);
  ctx.fillRect(x+2, y+8, 1, 1);
  ctx.fillRect(x+3, y+7, 1, 1);
  ctx.fillRect(x+4, y+6, 1, 1);
  ctx.fillRect(x+5, y+5, 1, 1);
  ctx.fillRect(x+6, y+4, 1, 1);
  ctx.fillRect(x+7, y+3, 1, 1);
  ctx.fillRect(x+8, y+2, 1, 1);
}

function drawO (x=0, y=0){
  ctx.fillStyle = "rgb(30 30 30)";
  ctx.fillRect(x+2, y+4, 1, 1);
  ctx.fillRect(x+2, y+5, 1, 1);
  ctx.fillRect(x+2, y+6, 1, 1);
  ctx.fillRect(x+3, y+3, 1, 1);
  ctx.fillRect(x+3, y+7, 1, 1);
  ctx.fillRect(x+4, y+2, 1, 1);
  ctx.fillRect(x+4, y+8, 1, 1);
  ctx.fillRect(x+5, y+2, 1, 1);
  ctx.fillRect(x+5, y+8, 1, 1);
  ctx.fillRect(x+6, y+2, 1, 1);
  ctx.fillRect(x+6, y+8, 1, 1);
  ctx.fillRect(x+7, y+3, 1, 1);
  ctx.fillRect(x+7, y+7, 1, 1);
  ctx.fillRect(x+8, y+4, 1, 1);
  ctx.fillRect(x+8, y+5, 1, 1);
  ctx.fillRect(x+8, y+6, 1, 1);
}

function drawLineVictory () {
  ctx.fillStyle = "rgb(30 30 30)";
  ctx.fillRect(1, 25, 29, 1);
}

drawLines();
drawX(0, 0);
drawX(20, 0);
drawX(0, 10);
drawX(10, 10);
drawO(20, 20);
drawO(0, 20);
drawO(10, 20);

drawLineVictory()