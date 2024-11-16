"use strict";

// function default parameter
// 1 default value can contain any expression
// 2 can use the value of the other parameter

const bookings = [];

const createBooking = function (flightNum, numPassanger = 1, price = 199 * numPassanger) {
  const booking = {
    flightNum,
    numPassanger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("A320", 2);
createBooking("A320", 3);
createBooking("A320", 4);
