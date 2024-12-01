"use strict";

// subtract 1 date to another date to calculate the days between

const future = new Date(2037, 10, 23, 12, 30);
// console.log(Number(future));
console.log(+future);

// writing a function that takes two parameter and return day between them

const betweenDays = function (firstDate, secondDate) {
  return Math.abs(secondDate - firstDate) / (1000 * 60 * 60 * 24);
};
const days = betweenDays(new Date(2024, 11, 28), new Date(2024, 11, 1));
console.log(days);
