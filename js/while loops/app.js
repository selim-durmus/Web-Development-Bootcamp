// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const secret = "password";

// let guess = prompt("make a guess");

// while (guess !== secret) {
//   guess = prompt("make a guess");
// }

// console.log("congratz");

let input = prompt("type something");

while (true) {
  input = prompt(input);
  if (input === "stop") break;
}

console.log("you won");
