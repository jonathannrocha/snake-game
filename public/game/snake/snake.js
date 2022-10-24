import { gameBoard } from "../board/index.js"
import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5

export const snakeBody = [{ x: 11, y: 11 }]

let newSegments = 0

export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i - 1] }
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw() {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div")

    snakeElement.classList.add("snake")

    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x

    gameBoard.appendChild(snakeElement)
  })
}

export function collision(position) {
  return snakeBody.some((segment) => {
    return position.x === segment.x && position.y === segment.y
  })
}

export function expandSnake(amount) {
  newSegments += amount
}

function addSegments() {
  if (newSegments > 0) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    newSegments -= 1
  }
}

export function hasSelfColision() {
  const snakeHead = snakeBody[0]
  snakeBody.some((segment, index) => {
    if (index === 0) return false
    console.log("aqui")
    if (snakeHead.x === segment.x && snakeHead.y === segment.y) {
      return true
    }
    return false
  })
}
