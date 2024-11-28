"use strict";

// js bug

// base 10 = 0-9
// binary base 2 - 0 1

console.log(0.1 + 0.2 === 0.3);

// converting string to numbers

console.log(Number("24"));
console.log(+"24");

// parsing

// parseint ignore the string and only return the value but it needed to start with number
// these function are global function

console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("rem30", 10));

console.log(Number.parseFloat("2.5"));

// check if the input is number or not

console.log(isNaN(20));
console.log(isNaN("20"));
console.log(isNaN(+"20X"));
console.log(isNaN(20 / 0));

// better way to check if its a number

console.log(isFinite(20));
console.log(isFinite("20"));
console.log(isFinite(+"20X"));
console.log(isFinite(20 / 0));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.5));
console.log(Number.isInteger(20 / 0));
