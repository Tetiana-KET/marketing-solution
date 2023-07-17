"use strict"
document.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu(e) {
  const targetItem = e.target;

  if(targetItem.closest('.burger-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}