"use strict";

// its is a collection of unique value(it will never have any duplicates)
// it can hold mix datatypes

const orderSet = new Set(["pizza", "rizotto", "garlic bread", "pizza", "rizotto"]);

const nameSet = new Set("suraj");
console.log(nameSet);
console.log(orderSet.add("butter"));
console.log(orderSet.has("pizza"));
console.log(orderSet.has("pie"));
console.log(orderSet.delete("butter"));
// console.log(orderSet.clear());
console.log(orderSet.size);
console.log(orderSet);
