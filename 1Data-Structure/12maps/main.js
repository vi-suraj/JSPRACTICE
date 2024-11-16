"use strict";

// set is a create a key value pair where key can be any data types
// set value using .set method
// get value using .get method
// .set method will set the value to the map variable also return all the value

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
rest.set("name", "suruchi");
rest.set(1, "Kandivali East");
rest.set(2, "Borivali West");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]).set("open", 10).set("close", 23).set(true, "Restaurant is open :D").set(false, "Restaurant is Closed :C");
console.log(rest);

console.log(rest.get("categories"), rest.get("name"));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.size);
rest.delete(2);
console.log(rest.has("categories"));
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
console.log(rest);
