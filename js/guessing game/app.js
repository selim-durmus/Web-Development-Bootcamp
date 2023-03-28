let levelSelector = parseInt(prompt("type your level"));

while (!levelSelector) {
  let levelSelector = parseInt(prompt("you can only enter a number"));
}

const correctNum = Math.floor(Math.random() * levelSelector + 1);

let guess = parseInt(prompt("guess your number"));

let attempts = 1;

while (parseInt(guess) !== correctNum) {
  if (guess === "q") break;

  attempts++;
  if (guess > correctNum) {
    guess = prompt("too high");
  } else guess = prompt("too low");
}

if (guess == "q") console.log("you quit");
else console.log(`correct! it took you ${attempts} guesses`);
