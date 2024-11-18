//

// primitive data types

// String
// Number
// Boolean
// BigInt
// null
// undefined
// Symbol

// non-primitive data types

// Object
// Array
// function
// date
// map
// set

// in js there are two way that data store in memory
// stack

// all primitive data type and there value are stored in stack
// its gives copy of the original value

let userName = "Suraj Vishwakarma";
let newUser = userName;
newUser = "John Doe";
console.log(userName);
console.log(newUser);

// heap

// all non primitive data types stored in heap and there variable stored in stack
// it gives refrence of the original value

const userOne = {
  name: "Suraj Vishwakarma",
  upi: "suraj@ybl",
};

const userTwo = userOne;
userTwo.name = "John Doe";

console.log(userOne);
console.log(userTwo);
