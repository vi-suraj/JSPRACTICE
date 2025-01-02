// building promises

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

lotteryPromise.then((res) => console.log(res)).catch((rej) => console.error(rej));

const wait = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

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
