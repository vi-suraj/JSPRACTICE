"use strict";

// flat method used when you have multiple nested array and you want to create one array holding all the number
// flat method only flat array to one level if parameter is not given if you want flat deeper you need to tell how much deeper it shoud go

const arr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16],
];

console.log(arr.flat());

const arr1 = [[2, [4, 6]], [[8, 10], 12], 14, 16];
console.log(arr1.flat());
// by defalt it goes only one level deep inside first array if you want to go deeper you need to assign parameter
// in the above example there are three array so we need to go to deep to 2

console.log(arr1.flat(2));
