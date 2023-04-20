// Default Parameter//
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides + 1);
}

function greet(msg, person) {
  console.log(`${msg}, ${person}!`);
}

function greet2(person, msg = "Hey there") {
  console.log(`${msg}, ${person}`);
}

// SPREAD //
const nums = [123, 2, 3, 45123, 4, 12, 5];

// This returns NaN as it expects a single argument and insted receives several from the array
Math.max(nums);

// This returns the expected number as it spreads each element in the array
Math.max(...nums);

const cats = ["Blue", "Scout", "Rocket"];

const dogs = ["Rusty", "Wyatt"];

// This will concat the two arrays into a new array//
const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

// Can add new element to the object
const catDog = { ...feline, color: "black" };

// There is a conflict so the element in common is taken from the last object
const both = { ...feline, ...canine };

// ARGUMENTS //
//'arguments' can be used for input into function
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// REST //

function sumAll(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`gold goes to: ${gold}`);
  console.log(`silver goes to: ${silver}`);
  console.log(`and thanks to: ${everyoneElse}`);
}

// DESTRUCTURING //

const scores = [78667, 65464, 23423, 12112, 123, 12];

const [gold, silver, bronze, ...everyOther] = scores;
// gold; returns scores[1] in this example

const user = {
  email: "test@gmail.com",
  password: "123",
  firstName: "selim",
  lastName: "durmus",
  born: 1996,
  died: 2200,
};

// const firstName = user.firstName;
// const lastNAme = user.firstName;

// this is equivalent of above//
const { born, email, firstName, lastName } = user;

// you can rename elements in the object
const { born: birthYear, died: deathYear } = user;

const user2 = {
  email2: "test2@gmail.com",
  password2: "1234",
  firstName2: "selim2",
  lastName2: "durmus2",
  born2: 19962,
};

// you can set default values
const { firstName2, lastName2, died2 = "N/A" } = user2;

function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// function fullName(user) {
//   const { firstname, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

// can destructure like so:
function fullName({ firstName, lastName }) {
  return `${firstName}, ${lastName}`;
}
