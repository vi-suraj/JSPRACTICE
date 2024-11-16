"use strict";

// first class function

// 1 JS treats function ad first-class citizan
// That means functions are simply values
// function are just another type of object
// store them in variable and object property

const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// pass function as arguments to others functions

const great = () => console.log("Hey Suraj");
btn.addEventListner("click", great);

// return function from another function
// call method on function

counter.inc.bind(someOtherObject);

// because js has first class function thats why we can write higher order function

// a function that recevie another function as an arguments that return a new funtion or both
// this is only possible because of first class funtions

// function that recevie another function
// the function that is passed in is a callback function that the callback function will be called later by the higher order function addEventListerner

const great = () => console.log("Hey Suraj");
btn.addEventListner("click", great);

// addEventListner is higher order function
// greet is a call back function
