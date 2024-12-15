"use strict";

const Person = function (firstName, birthYear) {
  // instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
  // instance method
  // never use the method in CF
  //   this.calcAge = function () {
  //     return 2024 - birthYear;
  //   };
};

// instances
const suraj = new Person("Suraj", 1999);
console.log(suraj);
const jay = new Person("Jay", 1989);
console.log(jay);

// 1. new empty object created {}
// 2. function gets called and this become that empty object (this = {})
// 3. object linked to prototype
// 4. function automatically returns the object

const tom = function () {};

console.log(suraj instanceof Person);
console.log(tom instanceof Person);
