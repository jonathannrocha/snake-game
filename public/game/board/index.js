export const gameBoard = document.querySelector("#game-board")
const BOARD_SIZE = 21

export function generateRandomBoardPosition() {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE) + 1,
    y: Math.floor(Math.random() * BOARD_SIZE) + 1,
  }
}

export function isOutsideBord(position) {
  return (
    position.x > BOARD_SIZE ||
    position.x < 1 ||
    position.y > BOARD_SIZE ||
    position.y < 1
  )
}
