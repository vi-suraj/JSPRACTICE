"use strict";

// convert string to number
console.log(Number("20"));
console.log(+"20");

// parse integer

console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("24rem", 10));

// parse float

console.log(Number.parseFloat("2.5rem"));

// check if input is number

console.log(Number.isNaN("20"));
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(20 / 0));

// better way

console.log(Number.isFinite("20"));
console.log(Number.isFinite(20));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(20 / 0));
