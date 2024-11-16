"use strict";

// js uses callbacks all the times
// 1 its make it easy to split our code into more resusable and interconnected parts
// 2 callback function allows us to create abstractions

// ABSTRACTION

//abstarction means we hide the detail of some code implementation because we dont really care about all that details and this allow us to think about problem at a higher more abstract level and thats why its called an abstraction

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperOneWord = function (str) {
  const [first, ...otherWord] = str.split(" ");
  return [first.toUpperCase(), ...otherWord].join(" ");
};

// Higher Order Function

const tranformer = function (str, fn) {
  console.log(`Actual String: ${str}`);
  console.log(`Converted String: ${fn(str)}`);
  console.log(`Function Name: ${fn.name}`);
};

tranformer("JAvascript is Awesome", upperOneWord);
tranformer("JAvascript is Awesome", oneWord);

const highFive = function () {
  console.log("🙌");
};
