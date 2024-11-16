"use strict";

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

// loop object property

const objKey = Object.keys(restaurant.openingHours);
console.log(objKey);

let openStr = `We are open for ${objKey.length}`;

for (const i of objKey) {
  openStr += ` ${i}`;
}
console.log(openStr);

// values

const objValue = Object.values(restaurant.openingHours);
console.log(objValue);

for (const { open, close } of objValue) {
  console.log(`The restaurant will open at ${open} and close at ${close}`);
}

// key value both

const objKeyValue = Object.entries(restaurant.openingHours);
console.log(objKeyValue);

for (const [day, { open, close }] of objKeyValue) {
  console.log(`On ${day} the restaurant will open at ${open} and close at ${close}`);
}
