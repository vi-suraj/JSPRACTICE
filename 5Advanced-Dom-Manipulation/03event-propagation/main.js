// // Event Propagation

// created random color
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);
console.log(randomInt(1, 20));

const randomColor = () => `rgb(${randomInt(1, 255)},${randomInt(1, 255)},${randomInt(1, 255)})`;

// attach random color to each event when clicked

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.background = randomColor();
  console.log(e.target, e.currentTarget);

  // e.currentTarget is same as this keyword
  console.log(e.currentTarget === this);

  // to stop the bubbling can use the e.stopPropagation method

  e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.background = randomColor();
  console.log(e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.background = randomColor();
  console.log(e.target, e.currentTarget);
});
