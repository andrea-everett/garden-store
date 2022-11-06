// import items from './books.json'
// import formatCurrency from '../../server/util/formatCurrency'
// import addGlobalEventListener from '../../server/util/addGlobalEventListener'
// import { addToCart } from "./shoppingCart.js.js"

// const storeItemTemplate = document.querySelector('#store-item-template')
// const storeItemContainer = document.querySelector("[data-store-container]")
// const IMAGE = "flower-books.png"

// console.log(items)

// export function setupStore() {
//   addGlobalEventListener('click',"[data-add-to-cart-button]", e => {
//     const id = e.target.closest('[data-store-item]').dataset.itemId
//     addToCart(parseInt(id))
//   })
//   items.forEach(renderStoreItem)
// }

// function renderStoreItem(item) {
//     const storeItem = storeItemTemplate.content.cloneNode(true)

//     const container = storeItem.querySelector("[data-store-item]")
//     container.dataset.itemId = item.itemId

//     const name = storeItem.querySelector("[data-name]")
//     name.innerText = item.name

//     const image = storeItem.querySelector("[data-image]")
//     image.src = `${IMAGE}/${item.imageColor}/${item.imageColor}`

//     const price = storeItem.querySelector("[data-price]")
//     price.innerText = formatCurrency(item.priceCents / 100) 

//     storeItemContainer.appendChild(storeItem)
// }

// toggle seeds menu
// open cart modal
// open cart modal
// / open cart modal

const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal
// var cartId = "cart";
   
// var localAdapter = {
 
//     saveCart: function (object) {
 
//         var stringified = JSON.stringify(object);
//         localStorage.setItem(cartId, stringified);
//         return true;
 
//     },
//     getCart: function () {
 
//         return JSON.parse(localStorage.getItem(cartId));
 
//     },
//     clearCart: function () {
 
//         localStorage.removeItem(cartId);
 
//     }
// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  const cartItem = button.parentElement;
  const price = cartItem.getElementsByClassName('product-price')[0].innerText;
  const name = cartItem.getElementsByTypeName('figcaption')[0].innerText;

  const imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  let products = [];
  if(localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }
  products.push({'productId' : productId + 1, image : '<imageLink>'});
  localStorage.setItem('products', JSON.stringify(products));

  const productRow = document.createElement('div');
  productRow.classList.add('product-row');
  const productRows = document.getElementsByClassName('product-rows')[0];
  const cartImage = document.getElementsByClassName('cart-image');
  
  for (const i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  const cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart
// local storage
var cartId = "cart";
 
var localAdapter = {
 
    saveCart: function (object) {
 
        var stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;
 
    },
    getCart: function () {
 
        return JSON.parse(localStorage.getItem(cartId));
 
    },
    clearCart: function () {
 
        localStorage.removeItem(cartId);
 
    }
 
};
// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}

