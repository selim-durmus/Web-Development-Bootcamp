const square = (x) => {
  return x * x;
};

// let add = function (x, y) {
//   return x + y;
// };

// function add(x, y) {
//   return x + y;
// }

// let add = (x, y) => {
//   return x + y;
// };

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// This will not return anything
const rollDice2 = () => {
  Math.floor(Math.random() * 6) + 1;
};

// Implicit return syntax
const rollDice3 = () => Math.floor(Math.random() * 6) + 1;

const add2 = function (x, y) {
  return x + y;
};

const add3 = (x, y) => x + y;

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

const newMovies = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});

const newMovies2 = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`
);
