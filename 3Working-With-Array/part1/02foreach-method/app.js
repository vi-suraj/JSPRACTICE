"use strict";

const movements = [200, 450 - 400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposite ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(movement)}`);
  }
}

console.log("-----------------------FOREACH---------------------------");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You Deposite ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`);
  }
});
