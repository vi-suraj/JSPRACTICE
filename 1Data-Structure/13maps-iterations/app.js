"use strict";

const question = new Map([
  ["Question", "What is the most popular language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Wrong Try Again"],
]);

console.log(question);

console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}:${value}`);
  }
}

const answer = prompt("Enter Your Answer");
console.log(answer);
console.log(question.get(question.get("correct") === Number(answer)));

// convert maps to array

console.log([...question]);
