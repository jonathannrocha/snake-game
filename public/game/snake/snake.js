import { gameboard } from "../board/index.js"
import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5

export const snakeBody = [{ x: 11, y: 11 }]

let newSegments = 0

export function update() {
  addSegments()

  const inputDirection = getInputDirection()

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
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

    gameboard.appendChild(snakeElement)
  })
}

export function collision(position) {
  return snakeBody.some((segment) => {
    return equalPositions(position, segment)
  })
}
export function expandSnake(amount) {
  newSegments += amount
}

function addSegments() {
  if (newSegments > 0) {
    snakeBody.push({
      ...snakeBody[snakeBody.length - 1],
    })

    newSegments -= 1
  }
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function selfCollision() {
  const snakeHead = snakeBody[0]

  return snakeBody.some((segment, index) => {
    if (index === 0) return false

    return equalPositions(snakeHead, segment)
  })
}

export function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}
