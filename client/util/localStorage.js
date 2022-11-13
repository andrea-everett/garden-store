// fetch("books.js")
// .then(function(response){
//    return response.json();
// })
// .then(function(data){
//    localStorage.setItem("products", JSON.stringify(data));
//    if(!localStorage.getItem("cart")){
//       localStorage.setItem("cart", "[]");
//    }
// });
export function setLocalStorage() {
    const cartName= "cart-quantity";
   
    const localAdapter = {
     
        saveCart: function (object) {
     
            const stringified = JSON.stringify(object);
            localStorage.setItem('cart-quantity', stringified);
            return true;
     
        },
        getCart: function () {
     
            return JSON.parse(localStorage.getItem('cart-quantity'));
     
        },
        clearCart: function () {
     
            localStorage.removeItem('cart-quantity');
     
        }
    };
} 

// export function getLocalStorage() {
//     const quantity = localStorage.getItem('cart-quantity');
// } 

// .setItem