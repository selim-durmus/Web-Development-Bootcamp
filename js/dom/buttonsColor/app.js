const createColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function changeColor() {
  this.style.backgroundColor = createColor();
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", changeColor);
}
