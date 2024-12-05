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

const scrollBtn = document.querySelector('.btn--scroll-to');
const scrollSection = document.querySelector('#section--1');

scrollBtn.addEventListener('click', function (e) {
  const s1cords = scrollSection.getBoundingClientRect();
  console.log(s1cords);
  console.log('Scroll x and y', window.pageXOffset, window.pageYOffset);
  console.log(
    'xy window viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // old school

  // window.scrollTo(s1cords.left, s1cords.top);
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  scrollSection.scrollIntoView({ behavior: 'smooth' });
});
