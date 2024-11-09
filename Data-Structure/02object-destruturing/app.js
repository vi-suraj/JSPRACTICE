const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

  orderDelivery: function ({ start = 1, main = 1, address = "Borivali West", time = "7:00" }) {
    return `Order Recived! Your ${this.starterMenu[start]} and ${this.mainMenu[main]} Will be deliverd at your address ${address} at ${time}`;
  },
};

console.log(
  restaurant.orderDelivery({
    address: "Kandivali East",
    time: "10:30",
    start: 2,
    main: 1,
  })
);

console.log(restaurant.orderDelivery({}));

const { thu: thursday = {}, fri: friday = {}, sun: sunday = {} } = restaurant.openingHours;

console.log(thursday, friday, sunday);

const { openingHours } = restaurant;

console.log(openingHours);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

let a = 222;
let b = 333;
const obj = { a: 26, b: 55, c: 79 };

({ a, b } = obj);
console.log(a, b);
