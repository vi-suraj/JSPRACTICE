"use strict";

const Person = function (firstName, birthYear) {
  // instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person("John", 1989);
const jay = new Person("jay", 1970);
console.log(john, jay);

// console.log(suraj instanceof Person);

// added method using prototype

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

console.log(john.calcAge());
console.log(jay.calcAge());

// adding property

Person.prototype.spicies = "Homo Sepian";
console.log(john);
console.log(jay);
console.log(john.spicies, jay.spicies);
