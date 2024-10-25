// Element.getBoundingClientRect() method
// --- returns the size of an element and its position relative to the viewport.

/*
! pageYoffset is deprecated
? instead use scrollY or scrollX
* pageYOffset is a read -
* only window property that returns the number of pixels the document has been scrolled vertically.
*/

// slice extracts a section of a string without modifying original string

// offsetTop -
// A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
