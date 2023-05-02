const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("you clicked me");
  console.log("I hope it worked");
};

function scream() {
  console.log("ahhhhhh");
  console.log("stopp touching me");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("you clicked the h1");
};

const v3 = document.querySelector("#v3");

v3.addEventListener("mouseup", function () {
  alert("CLICKED");
});
