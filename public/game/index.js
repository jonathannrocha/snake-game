import {
  SNAKE_SPEED,
  draw as snakeDraw,
  update as snakeUpadte,
  snakeBody,
  hasSelfColision as hasSelfSnakeColision,
} from "./snake/snake.js"

import { draw as foodDraw, update as foodUpdate } from "../game/food/index.js"
import { gameBoard, isOutsideBord } from "./board/index.js"

let lasTimeRender = 0
let gameOver = false

function main(currenTime) {
  if (gameOver) {
    alert("perdemos")
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currenTime - lasTimeRender) / 1000

  // verifica se o tempo corrente é menor que a velocidade exigida
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lasTimeRender = currenTime
  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  gameBoard.innerHTML = ""
  snakeUpadte()
  foodUpdate()
  checkGameOver()
}

function draw() {
  snakeDraw()
  foodDraw()
}

function checkGameOver() {
  if (isOutsideBord(snakeBody[0]) || hasSelfSnakeColision()) {
    gameOver = true
  }
}
