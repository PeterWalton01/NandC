const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

/* list cells */
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartButton = document.getElementById("restartButton");

function startGame() {
  circleTurn = false;
  /* add event listner to each cell 
       ensure the event listner only fires once
       also include logic to un set last game
  */
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS); /* unset */
    cell.classList.remove(CIRCLE_CLASS); /* unset */
    cell.removeEventListener("click", handleClick); /* unset */
    cell.addEventListener("click", handleClick, { once: true }); /* setup */
  });
  setBoardHoverClass(); /* setup */
  winningMessageElement.classList.remove("show"); /* unset */
}

startGame();

restartButton.addEventListener("click", startGame);

function handleClick(e) {
  //   console.log("clicked");
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    console.log("winner");
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? "O's " : "X's "
    } Wins!`;
  }
  winningMessageElement.classList.add("show");
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(CIRCLE_CLASS) || cell.classList.contains(X_CLASS)
    );
  });
}
