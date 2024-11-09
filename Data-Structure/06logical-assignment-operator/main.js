"use strict";

const rest1 = {
  name: "Sagar",
  numGuest: 0,
};

const rest2 = {
  name: "Suruchi",
  owner: "Suraj Vishwakarma",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// OR assignment operator

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish coleration operator

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// ANd operator

rest1.owner &&= "Ananomus";
rest2.owner &&= "Ananomus";

console.log(rest1);
console.log(rest2);
