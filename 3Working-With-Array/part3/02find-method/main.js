"use strict";

// find method also loop over the array and takes a condition just like filter but it does not return a new array its just return a first value in that array that satisfy that condition

// we use find method to find only 1 element

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);
