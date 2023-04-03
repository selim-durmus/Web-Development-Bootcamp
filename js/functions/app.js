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
