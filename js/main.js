var resetButton = document.getElementById('reset');
var gameBoardEl = document.getElementsByClassName('square');
var currentBoard = [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                  ];
var moves = 0;
var r;
var c;
var turn = 'X';


// function to run when the reset button is clicked
function resetBoard() {
  // for each square in the board
  for (var i = 0; i < gameBoardEl.length; i++) {
    gameBoardEl[i].textContent = '';
  }
  for (var i = 0; i < currentBoard.length; i++) {
    for (var j = 0; j < currentBoard.length; j++) {
      currentBoard[i][j] = '';
    }
  }
  document.getElementById('winMessage').textContent = '';
  document.getElementById('turn').textContent = 'X is up';
  turn = 'X'
  moves = 0;
}

// function to fill in box with 'X' or 'O' when player clicks
function playerMove() {
  moves++;

  if (this.className.indexOf('top') > -1) {
    r = 0;
  } else if (this.className.indexOf('middle') > -1) {
    r = 1;
  } else {
    r = 2;
  }

  if (this.className.indexOf('left') > -1) {
    c = 0;
  } else if (this.className.indexOf('center') > -1) {
    c = 1;
  } else {
    c = 2;
  }

  if (this.textContent !== '') {
    alert('This box has already been played. Choose another box.')
    moves--;
  } else if (turn === 'X') {
    this.textContent = 'X';
    currentBoard[r][c] = 'X';
    turn = 'O';
    document.getElementById('turn').textContent = 'O is up';
  } else {
    this.textContent = 'O';
    currentBoard[r][c] = 'O';
    turn = 'X';
    document.getElementById('turn').textContent = 'X is up';
  }

  // run functions to check for a winner
  checkRows();
  checkColumns();
  checkDiagonals();
  catsGame();

}

// check the rows of currentBoard to see if there is a winner
function checkRows() {
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i][0] === 'X' && currentBoard[i][1] === 'X' && currentBoard[i][2] === 'X') {
      document.getElementById('winMessage').textContent = 'X is the Winner!!!';
    }
  }
  // check the rows of currentBoard to see if there is a winner
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i][0] === 'O' && currentBoard[i][1] === 'O' && currentBoard[i][2] === 'O') {
      document.getElementById('winMessage').textContent = 'O is the Winner!!!';
    }
  }
}

// check the columns of currentBoard to see if there is a Winner
function checkColumns() {
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[0][i] === 'X' && currentBoard[1][i] === 'X' && currentBoard[2][i] === 'X') {
      document.getElementById('winMessage').textContent = 'X is the Winner!!!';
    }
  }
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[0][i] === 'O' && currentBoard[1][i] === 'O' && currentBoard[2][i] === 'O') {
      document.getElementById('winMessage').textContent = 'O is the Winner!!!';
    }
  }
}

// check diagonals to see if there is a winner
function checkDiagonals() {
  if ((currentBoard[0][0] === 'X' && currentBoard[1][1] === 'X' && currentBoard[2][2] === 'X') || (currentBoard[0][2] === 'X' && currentBoard[1][1] === 'X' && currentBoard[2][0] === 'X')) {
    document.getElementById('winMessage').textContent = 'X is the Winner!!!';
  }
  if ((currentBoard[0][0] === 'O' && currentBoard[1][1] === 'O' && currentBoard[2][2] === 'O') || (currentBoard[0][2] === 'O' && currentBoard[1][1] === 'O' && currentBoard[2][0] === 'O')) {
    document.getElementById('winMessage').textContent = 'O is the Winner!!!';
  }
}

// check for a draw (all boxes have been played, there is no winner)
function catsGame() {
  if (moves === 9 && document.getElementById('winMessage').textContent === '') {
    document.getElementById('winMessage').textContent = 'This game is a draw'
  }
}

// set event listener for each box, when clicked run fcn playerMove on that box
function boxListen() {
  for (var i = 0; i < gameBoardEl.length; i++) {
    gameBoardEl[i].addEventListener('click', playerMove);
  }
}

boxListen();
