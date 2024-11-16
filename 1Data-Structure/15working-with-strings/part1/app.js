"use strict";

const airline = "Top Air India";
const plane = "A420";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

console.log("B420"[0]);
console.log("B420".length);

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
console.log(airline.slice(0, 4));

// practicle example

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// negative slice

console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

const middleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "E" || s === "B") {
    return `You Have a Middle Seat`;
  } else {
    return `You Dont have middle seat`;
  }
};

console.log(middleSeat("11E"));
console.log(middleSeat("12B"));
console.log(middleSeat("20C"));
console.log(middleSeat("2C"));
console.log(middleSeat("32E"));
