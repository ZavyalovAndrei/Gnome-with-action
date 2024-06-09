import GamePlay from "./gamePlay/GamePlay";
import GameController from "./gameController/GameController";

document.addEventListener("DOMContentLoaded", () => {
  const gamePlay = new GamePlay(document.querySelector(".board"));
  const gameController = new GameController();
  let appeapance = 5;
  const fieldSize = 16
  const delay = 1000;

  gamePlay.renderBoard(fieldSize);
  const boardEl = document.querySelectorAll(".board-el");

  let previousCell = 1;

  function generateNumber() {
    let cell = Math.floor(Math.random() * (fieldSize - 1) + 1);
    return cell;
  }
  function setGoblin() {
    let cell = generateNumber();
    if (cell === previousCell) {
      cell = generateNumber();
    } else {
      previousCell = cell;
    }

    boardEl.forEach((el) => {
      if (el.classList.contains("active")) {
        appeapance -= 1;
        el.classList.remove("active");
      }

      if (el.dataset.id === cell.toString()) {
        el.classList.add("active");
      }
    });
  }

  const interval = setInterval(() => {
    setGoblin();
    if (appeapance === 0) {
    gameController.finishGame();
      clearInterval(interval);
    }
  }, delay);
});