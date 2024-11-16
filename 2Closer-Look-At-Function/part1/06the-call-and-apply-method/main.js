"use strict";

// call and apply allow us mannually set the this keyword for any function call

const airIndia = {
  name: "Air India",
  code: "AI",
  booking: [],
  book(flightNum, name) {
    console.log(`${name} has booked a seat in ${this.name} flight code ${this.code}${flightNum}`);
    this.booking.push({ flight: `${flightNum}`, userName: `${name}` });
  },
};

airIndia.book(289, "Suraj");
airIndia.book(302, "Tom Cruise");
console.log(airIndia.booking);

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
book.call(vistara, "12", "John Doe");

book.call(arab, 28, "Chris Evan");

//apply not used now because of morden js

const flightDetails = [65, "Eren Yegar"];
book.apply(vistara, flightDetails);

book.call(arab, ...flightDetails);
