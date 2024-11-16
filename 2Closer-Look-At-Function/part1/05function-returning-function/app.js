"use strict";

// function return funtion

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet("Hey");
// greetHey("Suraj");
// greetHey("Tom");
// greet("Hey")("Sam");

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greetHey = greet("Hello");
greetHey("Sam");

greet("Hello")("Suraj");
