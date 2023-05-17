// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// 3 nested callbacks

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("it worked");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("page 2 worked");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("it worked for page 3");
//             console.log(response);
//           },
//           function (err) {
//             "error for page 3", err;
//           }
//         );
//       },

//       function (err) {
//         console.log("error!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("error!", err);
//   }
// );

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (rand < 7) {
        resolve(`your fake data from ${url}`);
      } else {
        reject("request error!");
      }
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("done with request");
    console.log(data);
  })
  .catch((err) => {
    console.log("error with request");
    console.log(err);
  });

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("promise resolved for page1");
//     console.log("it worked!");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("promise resolved for page2");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("promise resolved for page3");
//           })
//           .catch(() => {
//             console.log("promise rejected for page3");
//           });
//       })
//       .catch(() => {
//         console.log("promise rejected for page2");
//       });
//   })
//   .catch(() => {
//     console.log("promise rejected for page1");
//     console.log("error on page1");
//   });

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("promise resolved for page1");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("promise resolved for page2");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("promise resolved for page3");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("promise rejected! A request failed");
//     console.log(err);
//   });

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })
