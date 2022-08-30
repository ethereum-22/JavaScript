// Dom is basically the Interface between all JavaScript Code and the  browser or more specifically HTML documents  that are rendered in and by the browser
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/*

// Selecting Elements
// Selecting the Entire document
console.log(document.documentElement);

// If we apply css style to entire Page we always need to select the document element

// Select Head and Body
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

// If we select multiple element then we select document.querySelectorAll
const allSections = document.querySelector('.section');
console.log(allSections);
document.getElementById('section--1');

// This method all returns all HTML Collection
const allButtons = document.getElementsByTagName('button'); // And in this it updates autometically
console.log(allButtons);
document.getElementsByClassName('btn'); //return a life HTML Collection


*/

/*
// Creating and Inserting Elements

// we can create HTML Elements using inset adjacing HTML function that we used before in the bankist Application
//.insertAdjacentHTML;

const message = document.createElement('div');
message.classList.add('cookie-message');

// Add text into this element we do that using text content
// And by using these to property in below we can read and set properties
//message.textContent = 'we use cookied to improve functionality and analytics';
//message.textContent = 'we use cookied for improved functionality and analytics'; // To insert Text
message.innerHTML =
  'we use cookied to improve functionality and analytics.<button class="btn btn--close-cookie">Got it</button></button>';
header.prepend(message); // prepending basically adds the element as the first child of this element.But we can also added as last child and that is append method

header.append(message); // by using append we moved the element form the first child to last childd and using prepend and append we not only adds element but also moved the element and as DOM is unique and for that we only use it one place at a time.

// There are two more methods:-> Before and After and as the name says: before add before header and after add after header

header.before(message);
header.after(message);

// Delete Elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });

// Style,Attributes and Classes

// Styles
// This Sytles are applied as inline Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// Increase the height of message banner by 40 px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Work with CSS Custom Properties or CSS Variables
document.documentElement.style.setProperty('--color-primary', 'orangered'); // Change all color property in total page
//document.documentElement indicates the root and then .style means we perform on root

// Attributes
// in HTML src,alt,class,id all are attributes of img element
// Select Attribute

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Set Property
logo.alt = 'minimalist logo';

// Non Standard
console.log(logo.designer);
// Another method to read this method from DOM
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

// Absolute Version
console.log(logo.src);

// Relative Version
console.log(logo.getAttribute('src'));

// in case of href link all are absolute version
const link = document.querySelector('.twitter-link');
console.log(link.href); // Return the aboulute url
console.log(link.getAttribute('href')); // Return the url which is written in HTML file

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toogle('c');
logo.classList.contains('c');

// Don't use
logo.className = 'Jonas';

*/

// Implementing Smooth Scroling
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('currentScroll (X,Y)', window.pageXOffset, window.pageYOffset); // Here y indicates the distance form the top of the webpage

  // current window Position
  console.log(
    'height/width viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Current Scroll Position

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); // first argument is the left position

  // Old-School Way of calculating
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way of Calculating
  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

/*
// Type of events and Event Handelers
// An event is basically a signal that is generated by a certain DOM node and signal means that something has happend
// For example click somewhere or mouse moving or user triggering on fall screen mode

// Mouse Enter Event

const h1 = document.querySelector('h1');

// mosue enter event is littlebit hover event in CSS and it fires whenever a mouse enter in certain element

const alertH1 = function (e) {
  alert('addEventListner: Great ,You are reading the heading :D ');

  // For listening only once time
  // h1.removeEventListener('mouseenter', alertH1);
};

// Removing after a certain Time:
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.addEventListener('mouseenter', alertH1), 3000);

// To find more event visit to MDN javascript Event

// On Event Property Directly on the Element

// This is the oldschool ways and nowdays we always use the addeventListner to fire an action

// h1.onmouseenter = function (e) {
//   alert('nmouseenter: Great ,You are reading the heading :D ');
// };

*/

/*
// Event Propagation: Capturing and Bubling

//rgb(255,255,255)

const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// This Keyword is attached with the current Event listener

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); // e.target returns where the link happend and it is not the element where the event handler attached

  // Stop Event Propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

*/

// Event Delegation: Implement Page Navigation
/*

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });

  // The above thing is good well but this method is not efficient
});


*/

/*
// Event Delegation

// In event delegation we basically needs two steps
// 1. Add eventListner to common parent element
// 2. Determine what element origanated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  // Matching Strategy
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


*/

/*

// Traversing DOM

const h1 = document.querySelector('h1');

// Going Downwords: Child
//console.log(h1.querySelector('.highlight'));

// Selecting the direct Children
///console.log(h1.childNodes);
// It shows all of childs thats are message,comment,text and etc

// If we have only need the HTML element Collection then we should try with this and it is a life collection
//console.log(h1.children);

// Access for the first and last element child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'blue';

// Going Upwords: Parent

// In case of direct parent

console.log(h1.parentNode);
console.log(h1.parentElement); // most useful

// For any parent of an element
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // The closest method receives a query String,just like query selector and query Selector All
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going Sideways:'Siblings'
// In case of javascript we access the direct siblings and basically only the previous and next one

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// And it is actually same for the nodes.

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// In case of really need all of siblings

console.log(h1.parentElement.children);

// We wanted to change some styles to all the siblings but except the element itself

[...h1.parentElement.children].forEach(function (el) {
  if (el != h1) {
    el.style.transform = 'scale(0.5)'; // Now after implementing all the siblings are 0.5% smaller itself
  }
});


*/

/*

// Building a Tabbed Component:

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

//tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));

// Implement the above things by Event Delegation

tabContainer.addEventListener('click', function (e) {
  // Matching Strategy
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard Clause

  // Active Tab

  if (!clicked) return;

  // Remove Active Classes

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active Tab

  clicked.classList.add('operations__tab--active');

  // Active Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


*/

/*

// Menu Fade Animation

// Passing Arguments to Eventhandler Function

const handleOver = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

/*
nav.addEventListener('mouseover', function (e) {
  handleOver(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleOver(e, 1);
});


// Implement the above code using bind Method

// Passing Argument into handler
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));


*/

// Implement sticky navigation Bar

/*
const section1 = document.querySelector('#section--1');

const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  //console.log(e);
  console.log(window.scrollY); /// Get the position of Scroll from the point of the viewport

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});


*/

// A better Way: The Intersection Observer API

/*

const section1 = document.querySelector('#section--1');

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOption = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOption);

observer.observe(section1);

/*
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
*/

// Reval Sections
/*
const allSections = document.querySelectorAll('.section');
const revelSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

*/

// Lazy Loading Image
// here we don't select all of the images.We only select those images whose attribute is data-src attribute

/*

const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace Source Attribute with data-src
  entry.target.src = entry.target.dataset.src;
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

*/

// Building A slider Componenet: Part-1

const slide = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__button--left');
const btnRight = document.querySelector('.slider__button--right');

let currentSlide = 0;
const maxSlide = slide.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.5) translateX(-1200px)'; // translateX to shift the element into left

// slider.style.overflow = 'visible';

// slide.forEach((s, i) => (s.style.transform = `translateX(${100 * i})`));
//0,100,200,300 %
// translate X move the poition form 100% and that means width of the each images is 100%

const goSlide = function (slide) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)})`)
  );
};
goSlide(0);
// Go to Next Slide

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goSlide(currentSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevslide);

// Building Slider Component-Part-2

document.addEventListener('keydown', function (e) {
  console.log(e);
});
