"use strict";

// creating dates

// method 1

// const now = new Date();
// console.log(now);

// // creating date by yourself

// console.log(new Date(2037, 10, 30, 11, 30, 10));

// // time stamp from january 1970

// console.log(new Date(0));
// console.log(new Date(24 * 3 * 60 * 60 * 1000));

// working with dates

const future = new Date(2026, 11, 6, 12, 30);
console.log(future);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getMinutes());
console.log(future.getSeconds());

// converting date to string
console.log(future.toISOString());

// gives time stemp of current date from 1970
console.log(Date.now());
console.log(new Date(1732947307678));

future.setFullYear(2040);
console.log(future);
