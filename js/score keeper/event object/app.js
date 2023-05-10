const playerOne = document.querySelector("#player_one");
const playerTwo = document.querySelector("#player_two");
const reset = document.querySelector("#reset");
const score = document.querySelector("#score_table");
const playing_to = document.querySelector("#playing_to");
const playerOneScore = document.querySelector("#player_one_score");
const playerTwoScore = document.querySelector("#player_two_score");
let scr1 = 0;
let scr2 = 0;
playerOne.addEventListener("click", function () {
  const playingTo = playing_to.value;
  scr1 = scr1 + 1;
  console.log(scr1);
  playerOneScore.textContent = `${scr1}`;
});

playerTwo.addEventListener("click", function () {
  const playingTo = playing_to.value;
  scr2 = scr2 + 1;
  console.log(scr2);
  playerTwoScore.textContent = `${scr2}`;
});

reset.addEventListener("click", function () {
  console.log("clicked on reset");
});
