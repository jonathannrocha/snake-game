import "./public/style/index.css"

import { ReturnstartGame } from "./public/game/index.js"
import { restartGame, snakeBody } from "./public/game/snake/snake"

let start = false

const play = document.querySelector(".play")
const home = document.querySelector("#screen-home")
const game = document.querySelector("#game-board")

play.addEventListener("click", (e) => {
  home.style.display = "none"
  game.style.display = "grid"
  ReturnstartGame()
  console.log("restate")
})

export function gameOverHome() {
  home.style.display = "flex"
  game.style.display = "none"

  const h1 = document.querySelector("h1")
  h1.innerHTML = "Game Over"

  document.querySelector(".heart").style.display = "none"
  document.querySelector(".dead").style.display = "flex"

  //trocando play e restart
  document.querySelector(".play svg:nth-child(2)").style.display = "block"
  document.querySelector(".play svg:nth-child(1)").style.display = "none"

  const h2 = document.querySelector("h2")
  h2.innerHTML = "Restart?"
  h2.style.fontSize = "2em"

  for (let i in snakeBody) {
    snakeBody.pop()
  }
  snakeBody.pop()
  snakeBody.push({ x: 11, y: 11 })

  restartGame(true)
}
