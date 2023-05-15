// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "white";
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("olive", 2000, () => {
  delayedColorChange("red", 2000, () => {
    delayedColorChange("yellow", 2000, () => {
      delayedColorChange("green", 2000, () => {
        delayedColorChange("blue", 2000);
      });
    });
  });
});
