$(document).ready(() => {
  closeMenu();
});

const openMenu = () => {
  $('html,body').css('overflow', 'hidden');
  $('.menu-modal').addClass('menu-modal-open');
  $('.menu-body').addClass('menu-body-open');
};

const closeMenu = () => {
  $('html,body').css('overflow', 'auto');
  $('.menu-modal').removeClass('menu-modal-open');
  $('.menu-body').removeClass('menu-body-open');
};

window.addEventListener('click', (event) => {
  if (event.target.className && event.target.className.includes('menu-modal')) {
    closeMenu();
  }
});