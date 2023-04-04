function greet(firstName, LastName) {
  console.log(`Hi ${firstName} ${LastName}!`);
}

function repeat(x, y) {
  let result = "";
  for (let i = 0; i < y; i++) {
    result += x;
  }
  console.log(result);
}

// define isSnakeEyes below:

function isSnakeEyes(x, y) {
  if ((x == 1) == y) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

function add(x, y) {
  let sum = x + y;
  return sum;
}

// DEFINE YOUR FUNCTION BELOW:

function lastElement(x) {
  if (x.length === 0) {
    return null;
  }
  return x[x.length - 1];
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

function makeBetweenFunc2(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const myMath = {
  PI: 3.14,
  square(x) {
    return x * x;
  },
  cube(x) {
    return x ** 3;
  },
};

const cat = {
  name: "Blue",
  color: "grey",
  breed: "scottish",
  meow() {
    console.log(this.name);
  },
};

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};

function countLetters(word) {
  let counts = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (counts[letter]) {
      counts[letter]++;
    } else counts[letter] = 1;
  }
  return counts;
}
