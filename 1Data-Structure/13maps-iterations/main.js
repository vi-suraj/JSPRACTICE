"use strict";

// convert object to map
// convert map to array

const question = new Map([
  ["Question", "What is the most popular programing language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Your Answer is correct"],
  [false, "Wrong Answer try again"],
]);

console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}:${value}`);
  }
}

// const answer = prompt(`Enter Your Answer`);
// console.log(typeof answer);
// if (Number(answer) === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

console.log([...question]);
