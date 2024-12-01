"use strict";

// settimeout

// set timeout takes two things 1 what to show and 1 after how much time passed then the thing should be shown

// setTimeout(() => console.log(`Pizza is ready`), 3000);

// passing parameter to the settimout function

// setTimeout((ing1, ing2) => console.log(`Your pizza is ready ${ing1} and ${ing2}`), 4000, "Onion", "Capsicum");

// want to stop timeout if it has capsicum

// const ingredient = ["Onion", "Cheese"];

// const pizza = setTimeout((ing1, ing2) => console.log(`Your pizza is ready with ${ing1} & ${ing2}`), 5000, ...ingredient);

// if (ingredient.includes("Capsicum")) clearTimeout(pizza);

// setInterval

setInterval(() => {
  const now = new Date();
  const hours = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  const getSeconds = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hours}:${minutes}:${getSeconds}`);
}, 1);
