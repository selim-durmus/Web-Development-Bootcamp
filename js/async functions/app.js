async function hello() {}

const sing = async () => {
  throw "throw error!";
  return "lalala";
};

// sing()
//   .then((data) => {
//     console.log("promise resolved", data);
//   })
//   .catch((error) => {
//     console.log("oh no error!", error);
//   });

/////////////////////////////////////////////////////////////////////////////////////

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials";
  if (password === "corgifeetarecute") return "welcome!";
  throw "invalid password";
};

login("selim", "corgifeetarecutes")
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

const changeColor = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

// changeColor("olive", 1000).then(() =>
//   changeColor("red", 1000).then(() =>
//     changeColor("yellow", 1000).then(() =>
//       changeColor("green", 1000).then(() =>
//         changeColor("blue", 1000).then(() => changeColor("white", 1000))
//       )
//     )
//   )
// );

/////////////////////////////////////////////////////////////////////////////////////

async function rainbow() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("yellow ", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
  await changeColor("white", 1000);
  return "all done";
}

// rainbow().then((end) => {
//   console.log(end);
// });

async function printAllDone() {
  await rainbow();
  console.log("all done");
}

/////////////////////////////////////////////////////////////////////////////////////

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//       if (rand < 7) {
//         resolve(`your fake data from ${url}`);
//       } else {
//         reject("request error!");
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("done with request");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error with request");
//     console.log(err);
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      if (delay < 2000) {
        resolve(`your fake data from ${url}`);
      } else {
        reject("request error!");
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("caught an error!");
    console.log("error is:", e);
  }
}
