const videoContainer = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

btn.addEventListener('click', (e) => {
  if (e.currentTarget.classList.contains('slide')) {
    e.currentTarget.classList.remove('slide');
    videoContainer.play();
  } else {
    e.currentTarget.classList.add('slide');
    videoContainer.pause();
  }
});
