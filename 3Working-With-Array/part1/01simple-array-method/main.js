"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// array are object and they get access to special built in method that we can essentially see as tools for array

// slice()
// splice() (MUTATE)
// reverce()
// concat()
// join

// slice method

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// create shallow copy

// used to chain multiple array method
console.log(arr.slice());
console.log([...arr]);

// SPLICE Method (MUTATE ARRAY)

// splice method delete the element that is selected in it and the original array will remani with the elements that did not gey spliced
// mostly used to delete elements at the last position of the array
// console.log(arr.splice(2));
console.log(arr.splice(-1));

// first where to start second element how much element should get deleted
console.log(arr.splice(1, 1));
console.log(arr);

// REVERSE (MUTATE ARRAY)

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);

// JOIN

console.log(letters.join(" - "));

// at method

// at used for method chaining

const numbers = [22, 11, 45];
console.log(numbers.at(0));
console.log(numbers.at(1));

// retrive last element from array

console.log(numbers[numbers.length - 1]);
console.log(numbers.slice(-1)[0]);
console.log(numbers.at(-1));
