import {
  SNAKE_SPEED,
  draw as snakeDraw,
  update as snakeUpadte,
  snakeBody,
  selfCollision as hasSelfSnakeColision,
} from "./snake/snake.js"

import { draw as foodDraw, update as foodUpdate } from "../game/food/index.js"
import { gameboard, isOutsideBoard } from "./board/index.js"
import { gameOverHome } from "../../main.js"
let lasTimeRender = 0
let startGame = false

function main(currenTime) {
  if (checkGameOver()) {
    startGame = false
    gameOverHome()
    return
  }

  window.requestAnimationFrame(main)

  const secondsSinceLastRender = (currenTime - lasTimeRender) / 1000

  // verifica se o tempo corrente é menor que a velocidade exigida
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lasTimeRender = currenTime
  update()
  draw()
}

function update() {
  gameboard.innerHTML = ""
  snakeUpadte()
  foodUpdate()
}

function draw() {
  snakeDraw()
  foodDraw()
}

function checkGameOver() {
  return isOutsideBoard(snakeBody[0]) || hasSelfSnakeColision()
}

export const ReturnstartGame = () => {
  window.requestAnimationFrame(main)
  return (startGame = true)
}
