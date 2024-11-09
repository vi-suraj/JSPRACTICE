"use strict";

// object destruruing use curley braces {}
// provide variable names thats exatly matched as the property name to retrive the value
// giving new variable names
// default value
// mutating values

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

console.log(
  restaurant.orderDelivery({
    address: "Kandivali East",
    time: "22:30",
    starter: 1,
    main: 2,
  })
);

// destruturing object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// giving new variable names

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// default value

const { menu = {}, starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 333;
let b = 444;
const obj = { a: 23, b: 42, c: 49 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = restaurant.openingHours;

console.log(open, close);
