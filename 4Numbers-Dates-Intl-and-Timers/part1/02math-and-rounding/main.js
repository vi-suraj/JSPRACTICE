"use strict";

// taking a sqrt

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(20 ** (1 / 3));

// getting maximu value from given data
// its also does type coersion of the number
// but its not parse the number

console.log(Math.max(11, 22, 43, 20, 36));
console.log(Math.max(11, 22, "43", 20, 36));
console.log(Math.max(11, 22, "43px", 20, 36));

// min value

console.log(Math.min(11, 22, 43, 20, 36));
console.log(Math.min("11", 22, 43, 20, 36));

// random values

console.log(Math.trunc(Math.random() * 6 + 1));

// random number between 2 number

const randomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + 1 + min);

console.log(randomNumber(10, 20));

// rounding

console.log(Math.round(23.3));
console.log(Math.round(23.9));
