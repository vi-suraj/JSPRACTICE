"use strict";

// bind also allow us to manualy set the this keyword for any function call the diffrence is bind does not immedietly call the funtion its returns a new function where this keyword is bound
// so its set to whatever value we pass into bind

const airIndia = {
  name: "Air India",
  code: "AI",
  booking: [],
  book(flightNum, name) {
    console.log(`${name} has booked a seat in ${this.name} flight code ${this.code}${flightNum}`);
    this.booking.push({ flight: `${flightNum}`, userName: `${name}` });
  },
};

const vistara = {
  name: "Vistara Airline",
  code: "VI",
  booking: [],
};

const arab = {
  name: "Arab Airline",
  code: "AA",
  booking: [],
};

const book = airIndia.book;

const bookVIS = book.bind(vistara);
const BookAIR = book.bind(airIndia);
const bookARA = book.bind(arab);
bookVIS(12, "John Snow");

// partial calling partial application means that a part of the original function are alredy applied
const bookVIS23 = book.bind(vistara, 23);
bookVIS23("Rohit Sharma");
bookVIS23("Virat Kohli");

// with Event Listeners

airIndia.plans = 300;
airIndia.buyPlans = function () {
  console.log(this);
  this.plans++;
  console.log(this.plans);
};

document.querySelector(".buy").addEventListener("click", airIndia.buyPlans.bind(airIndia));

// partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const taxVAT = addTax.bind(null, 0.23);
console.log(taxVAT(2000));
console.log(taxVAT(3000));

// function return another function

const taxVAT1 = (rate, value) => (rate) => {
  console.log(value + value * rate);
};
