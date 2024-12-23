"use strict";

// logical operator can use ANY data type,return any data type,can do short ciruting

// OR
// if the first value is the truthly value it will immedietly return that first value
// to set default value

// *** in or operator at least 1 operand is true it will return that true value
// if all value are falsy then the last value get returned

// AND
// and operator short circuit when the first value is falsy
// used to execute second operand if the first one is true

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasts: function (ing1, ing2, ing3) {
    return `Your Pasta Ready! The Ingredients are ${ing1},${ing2} and ${ing3}`;
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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    return [mainIngredient, otherIngredient];
  },
};

console.log(3 || "Suraj");
console.log("" || 0);
console.log(undefined || null);
console.log(true || 0);

console.log(undefined || "" || 0 || "Hello");

// restaurant.numGuest = 23;
// const guest = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest);

// AND

console.log(0 && "Suraj");
console.log(undefined && null);
console.log("" && true);
console.log(false && 0);

restaurant.orderPizza && console.log(restaurant.orderPizza("Onion", "Corn"));

// nullish operator
// it will only execute when the value is null or undefined

restaurant.numGuest = 0;
const guest = restaurant.numGuest ?? 10;
console.log(guest);
