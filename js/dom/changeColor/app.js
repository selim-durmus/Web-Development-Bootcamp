const changeButton = document.querySelector("#change");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

function createColor() {
  let first = Math.floor(Math.random() * 256);
  let second = Math.floor(Math.random() * 256);
  let third = Math.floor(Math.random() * 256);
  let newColor = `RGB(${first},${second},${third})`;
  h1.innerText = `${newColor}`;
  document.body.style.backgroundColor = newColor;
  if (first + second + third <= 250) {
    h1.style.color = "white";
    console.log("lesser");
  } else {
    h1.style.color = "black";
    console.log("greater");
  }
}

changeButton.addEventListener("click", createColor);
