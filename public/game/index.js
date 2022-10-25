import {
  SNAKE_SPEED,
  draw as snakeDraw,
  update as snakeUpadte,
  snakeBody,
  selfCollision as hasSelfSnakeColision,
} from "./snake/snake.js"

import { draw as foodDraw, update as foodUpdate } from "../game/food/index.js"
import { gameboard, isOutsideBoard } from "./board/index.js"

let lasTimeRender = 0

function main(currenTime) {
  if (checkGameOver()) {
    if (confirm("Você Perdeu o Jogo")) {
      window.location.reload()
    } else {
      window.requestAnimationFrame(main)
    }

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
  console.log("isOutsideBoard", isOutsideBoard(snakeBody[0]))
  console.log("hasSelfSnakeColision", hasSelfSnakeColision(snakeBody[0]))
  return isOutsideBoard(snakeBody[0]) || hasSelfSnakeColision()
}

// if (startGame) {
//   window.requestAnimationFrame(main)
// }
