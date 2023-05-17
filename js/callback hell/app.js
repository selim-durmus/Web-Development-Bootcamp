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

//Legacy bad callback hell method

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange("olive", 2000, () => {
//   delayedColorChange("red", 2000, () => {
//     delayedColorChange("yellow", 2000, () => {
//       delayedColorChange("green", 2000, () => {
//         delayedColorChange("blue", 2000, () => {
//           delayedColorChange("white", 2000);
//         });
//       });
//     });
//   });
// });

//New Promise method

const changeColor = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

changeColor("olive", 2000).then(() =>
  changeColor("red", 2000).then(() =>
    changeColor("yellow", 2000).then(() =>
      changeColor("green", 2000).then(() =>
        changeColor("blue", 2000).then(() => changeColor("white", 2000))
      )
    )
  )
);
