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

// OR

console.log(0 || "suraj");
console.log(null || undefined);
console.log(13 || "");
console.log(null || undefined || "" || "suraj");

restaurant.numGuest = 23;
const guest = restaurant.numGuest || 10;
console.log(guest);

// AND

console.log(undefined && null);
console.log(null && "");
console.log("suraj" && 0);

restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Onion");
