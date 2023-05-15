const playerOneBtn = document.querySelector("#player_one_btn");
const playerTwoBtn = document.querySelector("#player_two_btn");
const reset = document.querySelector("#reset");
const score = document.querySelector("#score_table");
const playing_to = document.querySelector("#playing_to");
const playerOneScore = document.querySelector("#player_one_score");
const playerTwoScore = document.querySelector("#player_two_score");
let scr1 = 0;
let scr2 = 0;
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
let gameEnded = false;
let playingTo = 5;

playing_to.addEventListener("change", function () {
  playingTo = parseInt(playing_to.value);
  resetGame();
});

playerOneBtn.addEventListener("click", function () {
  if (!gameEnded) {
    const playingTo = parseInt(playing_to.value);
    scr1 = scr1 + 1;
    console.log(scr1);
    playerOneScore.textContent = `${scr1}`;
  }

  if (scr1 + scr2 === playingTo) {
    gameEnded = true;
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
    changeColor();
  }
});

playerTwoBtn.addEventListener("click", function () {
  if (!gameEnded) {
    const playingTo = parseInt(playing_to.value);
    scr2 = scr2 + 1;
    console.log(scr2);
    playerTwoScore.textContent = `${scr2}`;
  }

  if (scr1 + scr2 === playingTo) {
    gameEnded = true;
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
    changeColor();
  }
});

reset.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  gameEnded = false;
  scr1 = 0;
  scr2 = 0;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;

  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
  playerOneScore.style.color = "";
  playerTwoScore.style.color = "";
}

function changeColor() {
  if (scr1 > scr2) {
    playerOneScore.style.color = "rgb(92, 184, 92)";
    playerTwoScore.style.color = "rgb(217, 83, 79)";
  } else {
    playerTwoScore.style.color = "rgb(92, 184, 92)";
    playerOneScore.style.color = "rgb(217, 83, 79)";
  }
}
