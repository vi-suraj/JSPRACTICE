"use strict";

// loop over object property name or values or both together

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ address, time, starter, main }) {
    return `Order Recived ! Your ${this.starterMenu[starter]}, ${this.mainMenu[main]} will be delived at ${address} at ${time}`;
  },
};

// object property name

const name = Object.keys(restaurant.openingHours);
console.log(name);

for (const day of name) {
  console.log(day);
}

// object value

const objValue = Object.values(restaurant.openingHours);
console.log(objValue);

for (const { open, close } of objValue) {
  console.log(`The restaurant will open at ${open} and close at ${close}`);
}

// object key and value both

const obj = Object.entries(restaurant.openingHours);
for (const [day, { open: o, close: c }] of obj) {
  console.log(`On ${day} the restaurant will open at ${o} and close at ${c}`);
}
