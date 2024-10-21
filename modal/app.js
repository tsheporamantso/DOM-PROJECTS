const modalOverlay = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalParagraph = document.querySelector('p');

const openModal = () => modalOverlay.classList.add('open-modal');
const closeModal = () => modalOverlay.classList.remove('open-modal');

modalBtn.addEventListener('click', () => {
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

modalParagraph.style.fontSize = '20px';
modalParagraph.style.padding = '0px';
modalParagraph.style.marginTop = '0px';
