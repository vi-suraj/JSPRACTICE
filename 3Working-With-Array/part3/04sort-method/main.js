"use strict";

// The compare function must return a number:
// Positive value (e.g., 1): It means a should be placed after b.
// Negative value (e.g., -1): It means a should be placed before b.
// Zero (0): It means a and b are considered equal, and their order remains unchanged.

const names = ["tom", "jay", "allen", "bob"];
console.log(names.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort());

// asscending
// const assMovements = movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

const assMovements = movements.sort((a, b) => a - b);

console.log(assMovements);

const desMovements = movements.sort((a, b) => b - a);

// const desMovements = movements.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
// });

console.log(desMovements);
