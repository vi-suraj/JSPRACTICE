const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// array destruring

const arr = [2, 4, 6];
const [a, b, c] = arr;
console.log(a, b, c);

let [first, , second] = restaurant.starterMenu;
console.log(first, second);

// switching variable

[first, second] = [second, first];
console.log(first, second);

// function destruturing

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested destruring

const marks = [2, 4, [6, 8]];
const [, , [i, j]] = marks;
console.log(i, j);

// default value

const name = ["jay"];
const [p = 0, q = 0, r = 0] = name;
console.log(p, q, r);
