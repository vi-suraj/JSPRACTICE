"use strict";

// IIFE

(function () {
  console.log("This will only run for once");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will only run for once again"))();
