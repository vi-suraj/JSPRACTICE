"use strict";

// rest operator usas same sytax as spread operator but it collect the individual value to an array
// the rest syntax collect all element after the last variables(its doesnt include any skipped element)
// rest pattern always used at last position in destruturing pattern

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

// 1) Destruturing

// array

// SPREAD BECAUSE RIGHT SIDE OF =

const arr = [2, 4, ...[6, 8]];
console.log(arr);

// REST BECAUSE LEFT SIDE OF =

const [a, b, ...other] = arr;
console.log(a, b, other);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// object

const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekend, weekdays);

// 2) Function

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
};

console.log(add(2, 4));
console.log(add(2, 4, 6));
console.log(add(2, 4, 6, 8, 10));

const x = [56, 55, 89, 20];
console.log(add(...x));

console.log(restaurant.orderPizza("Mushroom", "Onion", "Capsicum", "Corn"));
