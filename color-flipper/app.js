const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

const random = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[random()];
  color.textContent = colors[random()];
});
