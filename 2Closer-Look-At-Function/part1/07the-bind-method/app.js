"use strict";

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

const bookAIR = book.bind(airIndia);
const bookVIS = book.bind(vistara);
const bookARA = book.bind(arab);
bookAIR(23, "Suraj Vishwakarma");

// partial application

const bookAIR23 = book.bind(airIndia, 23);
bookAIR23("John Doe");
bookAIR23("Virat Kohli");

// using event Listeners

airIndia.plans = 300;
airIndia.buyPlans = function () {
  console.log(this);
  this.plans++;
  console.log(this.plans);
};

document.querySelector(".buy").addEventListener("click", airIndia.buyPlans.bind(airIndia));

// partial application

const taxAdd = (rate, value) => console.log(value + value * rate);
taxAdd(0.1, 200);
taxAdd(0.1, 400);

const taxVAT = taxAdd.bind(null, 0.27);
taxVAT(200);
taxVAT(2000);
taxVAT(4000);

// function return function

const taxVat = function (value) {
  return function (rate) {
    console.log(value + value * rate);
  };
};

taxVat(2000)(0.27);
