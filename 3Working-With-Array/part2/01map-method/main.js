"use strict";

// map is another method that we can use to loop over the array
// unlike forEach map method will give us a new array
// this new array will contain each position app

// in for each method each method create side effect but in map method it just return a new array with new values

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUs = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUs;
// });

// console.log(movements);
// console.log(movementsUSD);

// arrow function

const movementsUSD = movements.map((mov) => mov * eurToUs);
console.log(movements);
console.log(movementsUSD);

// const movementDescription = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} :You Deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1} :You Withdrow ${Math.abs(mov)}`;
//   }
// });

// console.log(movementDescription);

// simplified version

const movementDescription = movements.map((mov, i) => `Movement ${i + 1} You ${mov > 0 ? "Deposite" : "Withdraw"} ${Math.abs(mov)}`);
console.log(movementDescription);
