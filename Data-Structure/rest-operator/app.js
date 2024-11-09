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

// array

const arr = [2, 4, 6, 8, 10];
const [a, b, other] = arr;
console.log(a, b, other);

const [first, , second, ...otherFood] = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(first, second, otherFood);

const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekend, weekdays);

// function

const add = function (...add) {
  let sum = 0;
  for (let i = 0; i < add.length; i++) {
    sum += add[i];
  }
  return sum;
};

console.log(add(2, 4, 6));
console.log(add(2, 4, 6, 8, 10));
console.log(add(2, 4, 6, 8, 10, 12, 14));

console.log(restaurant.orderPizza("Mushroom", "Onion", "Capsicum", "Corn"));
