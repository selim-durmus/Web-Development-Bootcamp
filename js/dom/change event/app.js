const input = document.querySelector("input");

const h1 = document.querySelector("h1");

// input.addEventListener("change", function (e) {
//   console.log("hey");
// });

input.addEventListener("input", function (e) {
  const inputValue = input.value;
  h1.textContent = `${inputValue}`;
});
