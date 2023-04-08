const nums = [1, 2, 3, 4, 5];

function numsSquare() {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] * nums[i]);
  }
}

function numsSquare2() {
  for (el of nums) {
    console.log(el);
  }
}

function numsSquare3() {
  nums.forEach(function (element) {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
}

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

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});
