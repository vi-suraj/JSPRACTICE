"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currentBalance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(currentBalance);
