document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

const input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
      break;
  }
});

const form = document.querySelector("#shelter");
const input2 = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = input2.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  list.append(newLi);
  input2.value = "";
});

const tweetForm = document.querySelector("#tweet");
const tweets = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(nameInput.value, tweetInput.value);
  nameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (nameInput, tweetInput) => {
  const newTweet = document.createElement("li");
  const nameTag = document.createElement("b");
  nameTag.append(nameInput);
  newTweet.append(nameTag);
  newTweet.append(` - ${tweetInput}`);
  tweets.append(newTweet);
};
