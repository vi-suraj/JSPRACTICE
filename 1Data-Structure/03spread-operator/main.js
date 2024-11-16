"use strict";

// we can only use spread operator in string or when we pass value to a function
// can only be used where are multiple value seperated by commas like array and function parameter
// spread operator spread the array element individually
// when we need the element of the array individually then we use spread operator or when we need to pass multiple element into function
// creating a array with existing value and add new value in it
// creating shallow copies of an array
// merge two array
// object are not iterables all built in data struture are iterables in js

// iterables: array,strings,maps,sets // NOT OBJECT

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    return `Your Delicious Pasta is ready having ${ing1},${ing2} and ${ing3}`;
  },
};

const arr = [7, 8, 9];

const newArr = [2, 4, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Samosa Pav"];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// merge array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const userName = "Suraj";
const userLetter = [...userName];
console.log(userLetter);
console.log(...userLetter, "", "v");

// passing individual value in function

// const ingredient = [prompt("Lets make pasta! Ingredient 1"), prompt("Ingredient 2"), prompt("Ingredient 2")];
// console.log(ingredient);

// console.log(restaurant.orderPasta(...ingredient));

const newRestaurant = { ...restaurant, founder: "Suraj Vishwakarma" };
console.log(newRestaurant);

const newRestaurant2 = { ...restaurant, location: "Kandivali East" };
console.log(newRestaurant2);
