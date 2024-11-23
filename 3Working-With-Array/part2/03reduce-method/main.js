"use strict";

// reduce method used to combine all Element from array to one single element

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumaltor ->snoball

// const currentBalance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(acc);
//   return acc + cur;
// }, 0);
// console.log(currentBalance);

const currentBalance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(currentBalance);

const maximumValue = movements.reduce((acc, mov, i) => (acc > mov ? acc : mov), movements[0]);
console.log(maximumValue);
