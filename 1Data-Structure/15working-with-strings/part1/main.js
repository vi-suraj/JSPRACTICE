"use strict";

// whenever we call a method on a string JS will automatically behind the sceen convert that primitive string to a string object with same content and on that object the methods are called this process is called boxing

const airline = "Air India";
const plane = "A420";

// get letter at position

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// now get element directly with string

console.log("B420"[0]);

// get length of a string

console.log(airline.length);

// get length directly from string

console.log("B420".length);

// getting the position of the letter in string using index of

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("india"));

// extract part of string using slice method
// 1 the end value does not included in slice
// 2 the length of extracted string alway will be end - start

console.log(airline.slice(3));
console.log(airline.slice(0, 4));

// practicle example

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// negative slice

console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

// check middle seat

const middleSeat = function (seat) {
  // b and e are middle seat
  const seatRow = seat.slice(-1);
  if (seatRow === "B" || seatRow === "E") {
    return "You have middle seat";
  } else {
    return "You dont have middle seat";
  }
};

console.log(middleSeat("11B"));
console.log(middleSeat("12C"));
console.log(middleSeat("18E"));
console.log(middleSeat("10B"));
console.log(middleSeat("2C"));
