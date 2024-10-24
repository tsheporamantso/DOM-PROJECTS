// selecting elements
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

// toggle video button
btn.addEventListener('click', (e) => {
  const currentTarget = e.currentTarget.classList;
  if (!currentTarget.contains('slide')) {
    currentTarget.add('slide');
    video.pause();
  } else {
    currentTarget.remove('slide');
    video.play();
  }
});

// preloader
window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});
