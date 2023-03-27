// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// const animals = ["lion", "elephant", "sheep"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`     j is: ${j}`);
//   }
// }

const seatingChart = [
  ["Kristen", "Ali", "Osman"],
  ["Mehmet", "Huseyin", "Kemal"],
  ["Selim", "Azra", "Mustafa"],
];

for (i = 0; i < seatingChart.length; i++) {
  console.log(`ROW #${i + 1}`);
  const row = seatingChart[i];
  for (j = 0; j < seatingChart.length; j++) {
    console.log(row[j]);
  }
}
