"use strict";

// if you want to run a function only once then only use IIFE

// not used in js because of ES6

// immediate invoke function expression

// in global scope we do not have access of the variable of the any function but the function can have the access of the global scope variable

(function () {
  console.log("This will never run again");

  // in global scope we do not have access of the variable of the any function but the function can have the access of the global scope variable

  //   all data defined inside the scope is private (that this data is enscapsulated)
  //   isPrivate is enscapsulated inside the function scope

  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will never run again"))();
