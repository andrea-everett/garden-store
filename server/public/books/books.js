import items from './books.json'
import formatCurrency from '../../util/formatCurrency'
import addGlobalEventListener from '../../util/addGlobalEventListener'
import { addToCart } from "./shoppingCart.js"

const storeItemTemplate = document.querySelector('#store-item-template')
const storeItemContainer = document.querySelector("[data-store-container]")
const IMAGE = "flower-books.png"

console.log(items)

export function setupStore() {
  addGlobalEventListener('click',"[data-add-to-cart-button]", e => {
    const id = e.target.closest('[data-store-item]').dataset.itemId
    addToCart(parseInt(id))
  })
  items.forEach(renderStoreItem)
}

function renderStoreItem(item) {
    const storeItem = storeItemTemplate.content.cloneNode(true)

    const container = storeItem.querySelector("[data-store-item]")
    container.dataset.itemId = item.itemId

    const name = storeItem.querySelector("[data-name]")
    name.innerText = item.name

    const image = storeItem.querySelector("[data-image]")
    image.src = `${IMAGE}/${item.imageColor}/${item.imageColor}`

    const price = storeItem.querySelector("[data-price]")
    price.innerText = formatCurrency(item.priceCents / 100) 

    storeItemContainer.appendChild(storeItem)
}

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
  