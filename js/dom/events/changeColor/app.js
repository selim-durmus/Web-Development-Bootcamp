const changeButton = document.querySelector("#change");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

function createColor() {
  let first = Math.floor(Math.random() * 255 + 1);
  let second = Math.floor(Math.random() * 255 + 1);
  let third = Math.floor(Math.random() * 255 + 1);
  let newColor = `${first},${second},${third}`;
  h1.innerText = `RGB(${newColor})`;
  body.bgColor = newColor;
}

changeButton.addEventListener("click", createColor);
