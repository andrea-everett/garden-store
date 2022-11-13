// toggle seeds menu
document.addEventListener("DOMContentLoaded", function(){
  var navToggle = document.getElementById("menutoggle");
  var navMenu = document.getElementById("navmenu");
  navToggle.addEventListener("click", function(e){
    navMenu.classList.toggle("open");
  });
});

// toggle tools menu
document.addEventListener("DOMContentLoaded", function(){
  var navToggle = document.getElementById("toolstoggle");
  var navMenu = document.getElementById("toolsmenu");
  navToggle.addEventListener("click", function(e){
    navMenu.classList.toggle("open");
  });
});

//   toggle books menu
document.addEventListener("DOMContentLoaded", function(){
  var navToggle = document.getElementById("bookstoggle");
  var navMenu = document.getElementById("booksmenu");
  navToggle.addEventListener("click", function(e){
    navMenu.classList.toggle("open");
  });
});

// open cart modal
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

 console.log(price);
  const name = cartItem.getElementsByClassName('product-name')[0].innerText;

  console.log(name);

  const imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, name, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, name, imageSrc) {
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    const productRows = document.getElementsByClassName('product-rows')[0];
    const cartImage = document.getElementsByClassName('cart-image');
  
  for (let i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  const cartRowItems = `
  <div class="product-item">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="product-price">${price}</span>
        <span class="product-name">${name}</span>
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
 
// };
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
let quantityInput = document.getElementsByClassName('product-quantity')[0];

for (let i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  let total = 0
  let cartQuantity = 0
  for (let i = 0; i < productRow.length; i += 1) {
    cartRow = productRow[i]
    const priceElement = cartRow.getElementsByClassName('product-price')[0]
    const quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
    const price = parseFloat(priceElement.innerText.replace('$', ''))
    const quantity = quantityElement.value
    cartQuantity = cartQuantity + parseInt(quantity)
    total = total + (price * quantity )
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total.toFixed(2)
  document.getElementsByClassName('cart-quantity')[0].textContent = cartQuantity
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
