import { generateRandomBoardPosition, gameBoard } from "../board/index.js"
import { collision as snakeCollision, expandSnake } from "../snake/snake.js"

let foodPosition = generateRandomFoodPosition()
const EXPANSION_RATE = 2

export function update() {
  if (snakeCollision(foodPosition)) {
    expandSnake(EXPANSION_RATE)
    foodPosition = generateRandomFoodPosition()
  }
}

export function draw() {
  const foodElement = document.createElement("div")

  foodElement.classList.add("food")

  foodElement.style.gridRowStart = foodPosition.y
  foodElement.style.gridColumnStart = foodPosition.x

  gameBoard.appendChild(foodElement)
}

function generateRandomFoodPosition() {
  let newFoodPosition

  while (newFoodPosition == undefined || snakeCollision(newFoodPosition)) {
    newFoodPosition = generateRandomBoardPosition()
  }

  return newFoodPosition
}
