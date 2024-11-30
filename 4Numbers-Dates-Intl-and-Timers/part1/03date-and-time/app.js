"use strict";

// creating dates

const now = new Date();
console.log(now);

console.log(new Date(2040, 9, 12, 20, 30, 0));

// creating time stamp from 1970

console.log(new Date(0));
console.log(new Date(24 * 3 * 60 * 60 * 1000));

// working with dates

const future = new Date();
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());

// converting date to String

console.log(future.toISOString());

// converting date to timestamp

console.log(Date.now());
console.log(new Date(1732948249442));
