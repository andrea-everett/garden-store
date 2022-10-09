import items from '/items.json';

const cartButton = document.querySelector("[data-cart-button]")
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")
let shoppingCart = []
const IMAGE =''
const cartItemTemplate = document.querySelector('#cart-item-template')
const cartItemContainer = document.querySelector("[data-cart-items]")
const cartQuantity = document.querySelector("[data-cart-quantity]")
const cartTotal = document.querySelector("[data-cart-total]")

export function setupShoppingCart() {}

cartButton.addEventListener('click',() => [
    cartItemsWrapper.classList.toggle("invisible")
] )

export function addToCart(id) {
    const existingItem = shoppingCart.find(entry => entry.id === id)
    if (existingItem) {
        existingItem.quantity++
    } else {
    shoppingCart.push({ id: parseInt(id), quantity: 1 })
    }
    renderCart()
}

function renderCart() {
    cartQuantity.innerText = shoppingCart.length

    const totalCents = shoppingCart.reduce((sum, entry) => {
        const item = items.find(i => entry.id === i.id)
        return sum + item.priceCents * entry.quantity 
    }, 0 )

    cartTotal.innerText = formatCurrency(totalCents / 100)

    cartItemContainer.innerHTML = ""
    shoppingCart.forEach(entry => {
        const item = items.find(i => entry.id === i.id)
        const cartItem = cartItemTemplate.content.cloneNode(true)

        const container = cartItem.querySelector("[data-item]")
        container.dataset.itemId = item.itemId

        const name = cartItem.querySelector("[data-name]")
        name.innerText = item.name

        if (entry.quantity > 1 ) {
        const quantity = cartItem.querySelector("[data-quantity]")
        quantity.innerText =`*${entry.quantity}`
        }

        const image = cartItem.querySelector("[data-image]")
        image.src = `${IMAGE}/${item.imageColor}/${item.imageColor}`

        const price =cartItem.querySelector("[data-price]")
        price.innerText = formatCurrency(item.priceCents * entry.quantity / 100) 

       cartItemContainer.appendChild(cartItem)
})
}

// Add items to cart
