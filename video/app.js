const videoContainer = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

btn.addEventListener('click', (e) => {
  if (e.currentTarget.classList.contains('slide')) {
    e.currentTarget.classList.remove('slide');
    videoContainer.play();
  } else {
    e.currentTarget.classList.add('slide');
    videoContainer.pause();
  }
});

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});
