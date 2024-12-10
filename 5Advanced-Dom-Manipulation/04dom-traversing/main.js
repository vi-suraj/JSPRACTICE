// dom traversing

// dom traversing basically walking through dom that we can select an element based on another element

// dom traversing

// going downward : child

const h1 = document.querySelector("h1");
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

// select first and last child Element

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// going upward : parent

// these will give you the parent nodes
console.log(h1.parentElement);
console.log(h1.parentNode);

// this will give you the closet one elements that matches the class

console.log(h1.closest(".header"));
h1.closest(".header").style.background = "var(--gradient-secondary)";

// sibling elements sideways

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach((el) => {
  if (el != h1) {
    el.style.transform = "scale(0.5)";
  }
});
