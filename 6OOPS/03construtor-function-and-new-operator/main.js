"use strict";

// the diff betw regular fn and construtor fn is that we call the constructor function with the new operator
// construtor function always starts with the capital letter
// all function works as construtor function only the arrow function will not work because it dont have his own this keyword

const Person = function (firstName, birthYear) {
  // instance property
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create method in CF
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

const suraj = new Person("Suraj", 1999);
console.log(suraj);

// when used new operator what happens

// 1. New empty object will be created {}
// 2. Function Gets called this is that empty object(this = {})
// 3. empty object {} linked to prototype
// 4. function automatically returns object {}

// instances
const john = new Person("John", 1989);
const jay = new Person("jay", 1970);
console.log(john, jay);

console.log(suraj instanceof Person);
