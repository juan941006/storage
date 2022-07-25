const menuEmail          = document.querySelector('.navbar-email');
const menuBurguer        = document.querySelector('.menu');
const menuShoppingCart   = document.querySelector('.navbar-shopping-cart');
const desktopMenu        = document.querySelector('.desktop-menu');
const mobileMenu         = document.querySelector('.mobile-menu');
const aside              = document.querySelector('.product-detail');
const cardsContainer     = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'iPad',
  price: 220,
  image: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
  name: 'Computer',
  price: 630,
  image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/300/200'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/200/200'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/200/300'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/301/200'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/300/201'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/302/200'
});

productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/300/202'
});
productList.push({
  name: 'Random',
  price: 830,
  image: ' https://picsum.photos/301/202'
});

function renderProducts (arr) {
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure =document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfoFigure.appendChild(productImgCard);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);