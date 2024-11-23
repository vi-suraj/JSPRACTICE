"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter((mov) => mov > 0);
console.log(deposit);

const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);
