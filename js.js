const cells = document.querySelectorAll("[data-cell]");
const message = document.querySelector(".message");
const restartButton = document.querySelector(".restart-button");

let currentPlayer = "X";
let isGameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            message.textContent = `${currentPlayer} wins!`;
            isGameActive = false;
        }
    }
}

function checkDraw() {
    if ([...cells].every(cell => cell.textContent)) {
        message.textContent = "It's a draw!";
        isGameActive = false;
    }
}

function handleClick() {
    if (!isGameActive || this.textContent) return;

    this.textContent = currentPlayer;
    this.style.backgroundColor = "#ccc";
    checkWinner();
    checkDraw();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = "#eee";
    });
    message.textContent = "";
    isGameActive = true;
    currentPlayer = "X";
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", restartGame);
