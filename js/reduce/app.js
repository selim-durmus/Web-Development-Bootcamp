const prices = [9.99, 42.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

const total = prices.reduce((total, price) => total + price);

const min = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

const highestRated = movies.reduce((max, movie) => {
  if (max.score > movie.score) {
    return max;
  }
  return movie;
});

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num, 100);
