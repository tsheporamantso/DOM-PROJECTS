const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// hex color starts with # sign and has 6 values i.e #f15025

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i += 1) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
