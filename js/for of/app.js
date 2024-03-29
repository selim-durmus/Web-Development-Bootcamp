let chickens = ["a", "b", "c", "d", "e"];

for (i = 0; i < chickens.length; i++) {
  console.log(`visit ${chickens[i]}`);
}

for (let tur of chickens) {
  console.log(tur);
}

const seatingChart = [
  ["Kristen", "Ali", "Osman"],
  ["Mehmet", "Huseyin", "Kemal"],
  ["Selim", "Azra", "Mustafa"],
];

console.log("regular for loops");

for (i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

console.log("for of loop");

for (let row of seatingChart) {
  for (let people of row) {
    console.log(people);
  }
}

for (let char of "hello world") {
  console.log(char);
}

const scores = {
  selim: 100,
  fatih: 90,
  mehmet: 10,
  elif: 20,
  kerim: 30,
};

for (let people in scores) {
  console.log(`${people} scored ${scores[people]}`);
}

let total = 0;
let points = Object.values(scores);
for (let score of points) {
  total += score;
}

console.log(total / points.length);
