"use strict";

console.log("what+a+nice+string".split("+"));
console.log("suraj vishwakarma".split(" "));

const [firstName, lastName] = "suraj vishwakarma".split(" ");
const newName = ["Mrs", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const userTitle = function (name) {
  const userName = name.split(" ");
  const users = [];
  for (const i of userName) {
    // users.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
    // userName.push(i.replace(i[0], i[0].toUpperCase()).replace(i.slice(1), i.slice(1).toLowerCase()));
  }
  console.log(users);
};

userTitle("suraj VISHWAkarma");
userTitle("JOhn DoE");

// padding

const userName = "Suraj Vishwakarma";
console.log(userName.padStart(30, "+").padEnd(40, "+"));

// real example

const cardNumber = function (number) {
  const cardNum = number + "";
  const hideNumber = cardNum.slice(-4).padStart(cardNum.length, "*");
  console.log(hideNumber);
};

cardNumber(789654123012);
cardNumber(124789631102);

// repeat method

const message2 = "Due to bad Weather all flights are delayed... ";
console.log(message2.repeat(3));

const nPlane = function (n) {
  console.log(`${n} plane are waiting ${"✈️".repeat(n)}`);
};

nPlane(4);
nPlane(8);
nPlane(12);
