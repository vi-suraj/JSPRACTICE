"use strict";

// we create promise using promise constructor

// new Promise()

// its only take 1 argument exicutor function

// when promise construtor run it automatically run the exicutor function

// when fucntion run it run with the 2 argument and those 2 arguments are resolve and reject

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("You Win");
//   } else {
//     reject("You Loss Your Money");
//   }
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

// asynchronus promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Drawn");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win");
    } else {
      reject(new Error("You Loss Your Money"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

const wait = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log("I have waited 2 second");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I have waited 1 second");
//   });

wait(1)
  .then(() => {
    console.log("1 Second Passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 Second Passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 Second Passed");
    return wait(1);
  })
  .then(() => console.log("4 Second Passed"));
