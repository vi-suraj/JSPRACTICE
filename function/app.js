"use strict";

function logger() {
  console.log("My Name is Suraj");
}

// calling / invoking / running function
logger();
logger();

function fruiteProcessor(apple, orange) {
  //funtion parameters
  console.log(apple, orange);
  const juice = `The Juice Consist of ${apple} apples and ${orange} oranges`;
  return juice;
}

const appleJuice = fruiteProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruiteProcessor(0, 6); //function arguments
console.log(orangeJuice);

// 1 apple and orange in function are parameters and when calling the function the vale are called arguments
// 2 we need to return a value in a funtion to use it if we dont return it will give value as undefined
// 3 when returned the function is immedietly stop executing
// 4 you need to store the function to a variable to get the returned value

// function declaration

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const age = calcAge(1999);
console.log(age);

// function expression

const calcAge2 = function (birthYear) {
  // expression produce value
  return 2024 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2);

// 1 annanomious function because its doest have a function name it is an expression that getting stored in a variable
// 2 you can call function declaration before defining it

// Arrow Function

const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

// 1 we do not need to write return keyword in arrow function it return automatically
// has no this keyword

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

const retirementAge = yearsUntilRetirement(1999, "Suraj");
console.log(retirementAge);

// function calling another function

const cutPieces = function (fruite) {
  return fruite * 3;
};

const fruitProcess = function (apples, oranges) {
  const applePices = cutPieces(apples);
  const orangesPices = cutPieces(oranges);
  return `The Juice is made up of ${applePices} apple and ${orangesPices} orange`;
};

console.log(fruitProcess(4, 6));

// why use function calling another function
// to make it dry code we use function calling another function we can do multiplication in fruiteprocess function but the multiplication will get repeated and the dry code rule get violated

// function review

function calAge4(birthYear) {
  return 2024 - birthYear;
}

const untilRetirement = function (birthYear, firstName) {
  const age = calAge4(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} will be retireing in ${retirement} years`;
  } else {
    return `${firstName} has been retired since ${Math.abs(retirement)} years`;
  }
};

console.log(untilRetirement(1999, "Suraj"));
console.log(untilRetirement(1940, "Jay"));

// coding challange

const calcAvg = function (a, b, c) {
  return (a + b + c) / 3;
};

const avgDolphins = calcAvg(85, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins Wins (${avgDolphins} vs. ${avgKoalas})`;
  } else {
    return `Koalas Wins (${avgKoalas} vs. ${avgDolphins})`;
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));
