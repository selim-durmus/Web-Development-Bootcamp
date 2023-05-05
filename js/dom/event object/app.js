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
const tweetInput = document.querySelector("#tweetinput");
const nameInput = document.querySelector("#nameinput");
const tweets = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const tweetContent = tweetInput.value;
  const newLi = document.createElement("li");
  newLi.innerText = tweetContent;
  tweets.append(newLi);
});
