"use strict";

// chain method can only be used on those method that return new array filter and map return new array reduce return a single value so cannot chain to reduce

// *** do not chain a method that mutate array like splice and reverce method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// pipeline

const totalDepositeUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositeUSD);

// debuging each array

const totalDepositeUSD1 = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov, i, arr) => {
    console.log(arr);
    return acc + mov, 0;
  });

console.log(totalDepositeUSD1);
