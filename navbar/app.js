const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

const linkValues = links.classList;

const removeLinks = () => linkValues.remove('show-links');

const addLinks = () => linkValues.add('show-links');

navToggle.addEventListener('click', () => {
  if (linkValues.contains('show-links')) {
    removeLinks();
  } else {
    addLinks();
  }
  // linkValues.toggle('show-links'); // Alternative.
});
