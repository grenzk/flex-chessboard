const chessboard = document.querySelector(".chessboard-container");

function generateBoard() {
  for (let row = 0; row < 8; row++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");

    for (let column = 0; column < 8; column++) {
      const square = document.createElement("div");
      square.classList.add("square");

      squares.appendChild(square);
    }
    chessboard.appendChild(squares);
  }
}

generateBoard();
