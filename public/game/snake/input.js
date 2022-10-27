import { restartGame } from "./snake"

let lastInputDirection = {}

const InputDirection = { x: 0, y: 0, group: "" }

let count = 0

window.addEventListener("keydown", (key) => {
  restartGame(false)
  const keyAccept = [
    // eixo inventido
    { key: "ArrowUp", x: 0, y: -1, group: "up/down" },
    { key: "w", x: 0, y: -1, group: "up/down" },

    { key: "ArrowDown", x: 0, y: 1, group: "up/down" },
    { key: "s", x: 0, y: 1, group: "up/down" },

    { key: "ArrowLeft", x: -1, y: 0, group: "left/rigth" },
    { key: "a", x: -1, y: 0, group: "left/rigth" },

    { key: "ArrowRigth", x: 1, y: 0, group: "left/rigth" },
    { key: "d", x: 1, y: 0, group: "left/rigth" },
  ]

  lastInputDirection.x = InputDirection.x
  lastInputDirection.y = InputDirection.y
  lastInputDirection.group = InputDirection.group

  keyAccept.forEach((segment) => {
    if (segment.key === key.key && lastInputDirection.group != segment.group) {
      InputDirection.x = segment.x
      InputDirection.y = segment.y
      InputDirection.group = segment.group
    }
  })
})

export function getInputDirection() {
  return InputDirection
}
