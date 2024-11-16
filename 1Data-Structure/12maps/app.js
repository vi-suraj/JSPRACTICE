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
};

const rest = new Map();
rest.set("name", "Suruchu");
rest.set(1, "Kandivali East");
rest.set(2, "Borivali West");
console.log(rest);

rest.set("open", 10).set("close", 23).set(true, "Restaurant is Open :D").set(false, "Restaurant is Closed :C").set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);
console.log(rest);
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);
// console.log(rest.clear());
console.log(rest);

const time = 24;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
