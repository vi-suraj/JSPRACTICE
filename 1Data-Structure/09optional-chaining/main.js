"use strict";

// optional chaining check whether the value before optional chaining exist then only it will get exicuted
// optional chaining also works on methods
// optional chaining even works on array(if the array is empty)

const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
};

console.log(restaurant.openingHours?.fri?.open);

const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const item of day) {
  const open = restaurant.openingHours[item]?.open ?? "closed";
  console.log(`On ${item} the restauarnt is open at ${open}`);
}

// method

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderPizato?.(0, 1) ?? "Method does not exist");

// array

const userArray = [
  // {
  //   name: "suraj",
  //   mail: "suraj@gmail.com",
  // },
];

console.log(userArray[0]?.name ?? "User Array is Empty");
