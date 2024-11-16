"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperOneWord = function (str) {
  const [first, ...otherWord] = str.split(" ");
  return [first.toUpperCase(), ...otherWord].join(" ");
};

const tranformer = function (str, fn) {
  console.log(`Actual string : ${str}`);
  console.log(`Converted String : ${fn(str)}`);
  console.log(`Function Name: ${fn.name}`);
};

tranformer("JavsScript is Awesome", upperOneWord);
tranformer("JavsScript is Awesome", oneWord);
