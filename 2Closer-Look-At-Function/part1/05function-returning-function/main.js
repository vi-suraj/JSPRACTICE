"use strict";

// function return function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetingHey = greet("Hey");
// greetingHey("Suraj");
// greetingHey("Sam");

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greetHey = greet("Hey");
greetHey("Suraj");
greetHey("Sam");

greet("Hey")("Suraj");
