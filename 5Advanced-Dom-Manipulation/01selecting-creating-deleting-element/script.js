'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// console.log(header);
// const allSection = document.querySelectorAll('section');
// console.log(allSection);

// const sectionId = document.getElementById('section--1');
// console.log(sectionId);

// const allbutton = document.getElementsByTagName('button');
// console.log(allbutton);

// const btn = document.getElementsByClassName('btn');
// console.log(btn);

// creating and inserting element

// prepend before the Element

// append after the element

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'This Site Uses Cookies To Improve User Experience <button class="btn btn-close-cookie">Got It</button>';
// header.prepend(message);

// before and after method

// header.before(message);
// header.after(message);

// delete element

// const closeCookie = document.querySelector('.btn-close-cookie');
// closeCookie.addEventListener('click', () => {
//   message.remove();
// });

// styles

// message.style.background = '#b3b3b3';
// console.log(message.style.color);
// console.log(message.style.background);

// getComputedStyle will get you the style inside of the particluar class

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 7 + 'px';
// console.log(message.style.height);

// setproperty will set diffrent color and all stuff to the particular variable or class

// document.documentElement.style.setProperty('--color-primary', 'red');

// scrolling to the section

const scrollBtn = document.querySelector('.btn--scroll-to');
const scrollSection = document.querySelector('#section--1');

scrollBtn.addEventListener('click', function (e) {
  // gives cordinates of section

  const sectionCords = scrollSection.getBoundingClientRect();

  console.log(sectionCords);
  // window.scrollTo(
  //   sectionCords.left + window.pageXOffset,
  //   sectionCords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: sectionCords.left + window.pageXOffset,
  //   top: sectionCords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // morden way of scroll

  // specify the section you need to scroll

  scrollSection.scrollIntoView({ behavior: 'smooth' });

  // gives scroll of x and y

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // gives current view port cordination

  console.log(
    'height width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});

// // Event Propagation

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);
// console.log(randomInt(1, 20));

// const randomColor = () =>
//   `rgb(${randomInt(1, 255)},${randomInt(1, 255)},${randomInt(1, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.background = randomColor();
//   console.log(e.target, e.currentTarget);
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.background = randomColor();
//   console.log(e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.background = randomColor();
//   console.log(e.target, e.currentTarget);
// });

// page navigation

// event delegation

// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// event deligation

//1. add event listner to common parent element
//2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
