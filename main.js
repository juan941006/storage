const menuEmail          = document.querySelector('.navbar-email');
const menuBurguer        = document.querySelector('.menu');
const menuShoppingCart   = document.querySelector('.navbar-shopping-cart');
const desktopMenu        = document.querySelector('.desktop-menu');
const mobileMenu         = document.querySelector('.mobile-menu');
const aside              = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurguer.addEventListener('click',toggleMobileMenu);
menuShoppingCart.addEventListener('click',toggleShoppingCart);


function toggleDesktopMenu(){
  mobileMenu.classList.add('inactive');
  aside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  aside.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive'); 
  aside.classList.toggle('inactive');
}