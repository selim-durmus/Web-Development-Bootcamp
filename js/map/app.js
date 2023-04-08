const text = ["rofl", "lol", "omg"];

const caps = text.map(function (t) {
  return t.toUpperCase();
});

const nums = [1, 2, 3, 4, 5];

const doubles = nums.map(function (num) {
  return num * 2;
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

const movieTitles = movies.map(function (t) {
  return t.title;
});
