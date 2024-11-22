"use strict";

let arr = ["a", "b", "c", "d", "e"];

// slice

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));

// shallow copy

console.log(arr.slice());
// used only when we need to chain multiple array method
console.log([...arr]);

// splice (MUTATE)

// console.log(arr.splice(3));
console.log(arr);

// only used when we need to delete elements from array

console.log(arr.splice(-1));
console.log(arr.splice(2, 2));
console.log(arr);

arr = ["a", "b", "c", "d", "e"];

// REVERSE

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// concat

const letter = arr.concat(arr2);
console.log(letter);

// join

console.log(letter.join(" "));

// at method

// at methods used to method chaining

const number = [22, 11, 45];
console.log(number[number.length - 1]);
console.log(number.slice(-1)[0]);
console.log(number.at(-1));

const userName = "Suraj";
console.log(userName.at(1));
console.log(userName.at(-1));
