export default function addGlobalEventListener(type, selector, callback) {
    document.addEventListener('click', e => {
        if (e.target.matches(selector)) {
          const id = e.target.closest('[data-store-item]').dataset.itemId
          addToCart(parseInt(id))
        }
      })
}