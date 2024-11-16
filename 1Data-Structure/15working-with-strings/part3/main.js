"use strict";

// split(); split string with the space in between
// join(); join string with value of array by adding a space in it
// startPad();
// endPad();
// repeat();

console.log("a+very+nice+string".split("+"));
console.log("Suraj Vishwakarma".split(" "));

const [firstName, lastName] = "Suraj Vishwakarma".split(" ");
const newName = ["Mrs", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizame = function (name) {
  const nameArr = name.split(" ");
  const nameUpper = [];
  for (const n of nameArr) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

capitalizame("suraj vishwakarma");
capitalizame("john doe");

// padding

const message = "Go To Gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Suarj".padStart(15, "*").padEnd(30, "*"));

// practicle example

const creditCard = function (card) {
  const cardNumber = card + "";
  const hiddenCard = cardNumber.slice(-4).padStart(cardNumber.length, "*");
  console.log(hiddenCard);
};

creditCard(456987123012);
creditCard(789640237896);

// repeat methods

const message2 = "Bad Weather All Depature Delayed ... ";
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planeInLine(5);
planeInLine(10);
planeInLine(15);
