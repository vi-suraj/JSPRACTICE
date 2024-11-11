"use strict";

// const passanger = "sUrAJ";
// const lowerPassanger = passanger.toLowerCase();
// const upperPassanger = lowerPassanger[0].toUpperCase() + lowerPassanger.slice(1);
// console.log(upperPassanger);

function titleCase(passanger) {
  const allLower = passanger.toLowerCase();
  const firstUpper = allLower[0].toUpperCase() + allLower.slice(1);
  return firstUpper;
}
console.log(titleCase("SuRaJ"));
console.log(titleCase("KaRAN"));
console.log(titleCase("aSHISH"));

//

// comparing emails

// const compareEmail = function (email) {
//   const normaliseEmail = email.toLowerCase().trim();
//   return normaliseEmail;
// };
// const userEmail = "hello@gmail.in";
// const inputEmail = compareEmail(prompt("Enter Your Email"));
// console.log(inputEmail);

// console.log(userEmail === inputEmail);

// replacing

const priceUK = "123,23#";
console.log(priceUK.replace("#", "$").replace(",", "."));

const announcement = `Please gather at the door 3,Please gather at the door 3!`;
console.log(announcement.replaceAll("door", "gate"));

// boolean

const plane = "Airbus A320bin";
console.log(plane.includes("A320"));
console.log(plane.includes("bin"));
console.log(plane.startsWith("bong"));

if (plane.startsWith("Air") && plane.endsWith("bin")) {
  console.log("Its the part of new Airbus");
}

// practicle exmaple

const checkBaggage = function (item) {
  const input = item.toLowerCase();
  if (input.includes("gun") || input.includes("food")) {
    console.log("Sorry You Are Not Allowed To Board");
  } else {
    console.log("Welcome");
  }
};

checkBaggage("I have some Snaks and Some socks");
checkBaggage("I have Guns FOR Protection");
checkBaggage("I have food and clothes");
