"use strict";

//01 Execution Context
//02 Call Stack

// we have memory how will function go into memory and how will they execute and how will they come outside

const one = function () {
  console.log("one");
  two();
};

const two = function () {
  console.log("two");
  three();
};

const three = function () {
  console.log("three");
};

one();
two();
three();
