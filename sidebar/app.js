const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

const addSidebar = () => sidebar.classList.add('show-sidebar');
const removeSidebar = () => sidebar.classList.remove('show-sidebar');

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    removeSidebar();
  }
});

sidebarToggle.addEventListener('click', () => {
  addSidebar();
});

closeBtn.addEventListener('click', () => {
  removeSidebar();
});
