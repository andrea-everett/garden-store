// on button click redirect to home page
document.querySelector('#heading')
.addEventListener('click', () => {
    window.location.href = '../index.html';
});

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
  
  // add products to cart
  const addToCart = document.getElementsByClassName('add-to-cart');
  const productRow = document.getElementsByClassName('product-row');
  
  for (var i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
  }
  
  function addToCartClicked (event) {
    button = event.target;
    var cartItem = button.parentElement;
    var price = cartItem.getElementsByClassName('product-price')[0].innerText;
    
    var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
    addItemToCart (price, imageSrc);
    updateCartPrice()
  }
  
  function addItemToCart (price, imageSrc) {
    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    var productRows = document.getElementsByClassName('product-rows')[0];
    var cartImage = document.getElementsByClassName('cart-image');
    
    for (var i = 0; i < cartImage.length; i++){
      if (cartImage[i].src == imageSrc){
        alert ('This item has already been added to the cart')
        return;
      }
    }
    
    var cartRowItems = `
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
  
  
  // set local storage
  const storage = localStorage.getItem('.total-price');

  localStorage.setItem('total-price', 'cart-count')
  

  document.querySelector('#navmenu')
    .addEventListener('click', () => {
        window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
  });

  document.querySelector('#toolsmenu')
  .addEventListener('click', () => {
      window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
});

document.querySelector('#booksmenu')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
});

// on button click redirect to shop page
document.querySelector('#books')
    .addEventListener('click', () => {
        window.location.href = 'https://andrea-everett.github.io/garden-store/books/books.html';
  });

// on button click redirect to books page
document.querySelector('#product-img')
    .addEventListener('click', () => {
        window.location.href = 'https://andrea-everett.github.io/garden-store/books/books.html';
  });

// on button click redirect to tools page
  document.querySelector('#garden-img')
        .addEventListener('click', () => {
            window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
    });

// on button click redirect to seeds page
document.querySelector('#seeds-img')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
});

// on button click redirect to seeds page
// document.querySelector('#seeds')
// .addEventListener('click', () => {
//     window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
// });

// on button click redirect to seeds page
// document.querySelector('#gloves')
// .addEventListener('click', () => {
//     window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
// });

// on button click redirect to seeds page
// document.querySelector('#pruners')
// .addEventListener('click', () => {
//     window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
// });

// on button click redirect to seeds page
// document.querySelector('#veg')
// .addEventListener('click', () => {
//     window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
// });

// on button click redirect to seeds page
// document.querySelector('#snips')
// .addEventListener('click', () => {
//     window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
// });





