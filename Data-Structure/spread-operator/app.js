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
};

const arr = [2, 4, 6, 8];
const newArr = [...arr, 10, 12];
console.log(newArr);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const userName = "Suraj";
const userLetter = [...userName];
console.log(userLetter);
console.log(...userName);

// const ingredients = [prompt("Lets Make Your Pasta! Ingredient 1"), prompt("Ingredient2"), prompt("Ingredient3")];
// console.log(ingredients);

// console.log(restaurant.orderPasts(...ingredients));

const newRestaurant = { ...restaurant, founder: "Suraj Vishwakarma" };
console.log(newRestaurant);
