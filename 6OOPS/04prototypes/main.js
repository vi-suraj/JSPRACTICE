"use strict";

// Prototypes

// 1. Each And Every Function In Js Has A Property Called Prototype and that includes construtor function
// 2. Every object thats created by a certain construtor function will get access to the methods and properties that we define in the construtors prototypes property

const Person = function (firstName, birthYear) {
  // instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person("John", 1989);
const jay = new Person("jay", 1970);
console.log(john, jay);

// console.log(suraj instanceof Person);

// adding method using prototype

// an object can have access to the all methods and property that are inside the prototype

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

console.log(Person.prototype);

console.log(john.calcAge());
console.log(jay.calcAge());

console.log(john);

// property

Person.prototype.spiecies = "Homo Sepian";
console.log(john);
console.log(jay);
