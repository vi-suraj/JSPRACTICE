"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUS = 1.1;

// const movementUS = movements.map(function (mov) {
//   return mov * eurToUS;
// });

// arrow function

const movementUS = movements.map((mov) => mov * eurToUS);

console.log(movements);
console.log(movementUS);

// const movementDescription = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} You Deposite ${mov}`;
//   } else {
//     return `Movement ${i + 1} You Withdraw ${Math.abs(mov)}`;
//   }
// });

// simplified way
const movementDescription = movements.map((mov, i) => `Movement ${i + 1} You ${mov > 0 ? "Deposite" : "Withdraw"} ${Math.abs(mov)}`);
console.log(movementDescription);
