// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

const secret = "pass";

let guess = prompt("guess the secret");

while (guess !== secret) {
  guess = prompt("guess the secret");
}
console.log("CORRECT!");
