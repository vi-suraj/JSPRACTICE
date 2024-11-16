"use strict";

// passing a primitive type to a function is really as same as creating a copy outside the fucntion so the value simply copied
// in object when we pass object to a function it is really just like copying object so whenever we change in copy will reflect in original

const flight = "A320";
const suraj = {
  name: "Suraj Vishwakarma",
  passport: 789654123,
};

const checkIn = function (flightNum, userDetail) {
  flightNum = "A340";
  userDetail.name = "Mrs" + " " + userDetail.name;
};

checkIn(flight, suraj);
console.log(flight);
console.log(suraj);
