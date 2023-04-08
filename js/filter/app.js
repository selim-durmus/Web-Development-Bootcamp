const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// this is the long version
// const odds = nums.filter(n => {
//     return n % 2 === 1;
// })

const odds = nums.filter((n) => n % 2 === 1);

const smalls = nums.filter((n) => n < 3);

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

//Long way
// const highRated = movies.filter((movie) => movie.score >= 95);
// const goodMovies = highRated.map((movie) => movie.title);

//short way
const highRated = movies
  .filter((movie) => movie.score >= 95)
  .map((m) => m.title);

function validUserNames(usernames) {
  return usernames.filter((short) => short.length < 10);
}
