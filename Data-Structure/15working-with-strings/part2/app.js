"use strict";

const userName = function (name) {
  const userLower = name.toLowerCase();
  const userTitle = userLower[0].toUpperCase() + userLower.slice(1);
  console.log(userTitle);
};
userName("SuRAJ");
userName("KARaN");
userName("AShish");

// const userEmail = function (email) {
//   const normaliseEmail = email.toLowerCase().trim();
//   console.log(normaliseEmail);
// };

// userEmail(prompt("Enter Your Email Id"));

// replace

const priceUK = "123,24#";
console.log(priceUK.replace("#", "$").replace(",", "."));

const announcement = "Please gather at door no 3,Please gather at door no 3!";
console.log(announcement.replaceAll("door", "gate"));

// boolean

const plane = "Airbus A320bin";
console.log(plane.includes("A320"));
console.log(plane.includes("Bing"));
console.log(plane.startsWith("A32"));

if (plane.startsWith("Air") && plane.endsWith("bin")) {
  console.log("Its part of new Airbus");
} else {
  console.log("Its old Airbus");
}
