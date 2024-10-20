const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let counter = 0;

const counterColor = () => {
  if (counter > 0) {
    value.style.color = 'green';
  } else if (counter === 0) {
    value.style.color = '#222';
  } else {
    value.style.color = 'red';
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase')) {
      counter += 1;
      counterColor();
    } else if (e.target.classList.contains('decrease')) {
      counter -= 1;
      counterColor();
    } else {
      counter = 0;
      counterColor();
    }
    value.textContent = counter;
  });
});
