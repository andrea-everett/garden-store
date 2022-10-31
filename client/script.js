// import setupStore from "./books/books.js"
// import { setupShoppingCart } from './shoppingCart.js'

// setupStore()
// setupShoppingCart()

// / change home image
let i = 0; 
const images = [];
const time = 4000;

images[0] = './imgs/hero-image.jpg';
images[1] = './imgs/hero-image2.jpeg';
images[2] = './imgs/hero-image3.jpeg';

// function changeImg(){
//     document.slide.src = images[i];

//     if(i < images.length -1 ){
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

// Send Email Input- Home Page
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "a.deverett@yahoo.com",
        Password : "Comparti1!",
        To : 'a.deverett@yahoo.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

var stripe= Stripe('pk_live_51LgH1XB6d5FKrU8pLOm7kDtW2ls5eTvlkCJhggqL8KwMfMDHtgXGeherqOzgI9EaQ9Q9c7A9OplCd6fmACMJ4PbT00rZV2vs17');

// function grabPrice() {
//     const cartPrice = document.getElementById('total-price').innerHTML 
//     console.log(cartPrice)
//     return cartPrice
// }
const cartButton = document.getElementById("checkout-btn")
const testButton = document.getElementById("test-btn")

testButton.addEventListener("click", () => {
    fetch('http://localhost:3000/test',{
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            test: 'testing'
        })
    })
})

cartButton.addEventListener("click", () => {
    fetch('https://localhost:3000/create-checkout-session', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 3 },
                { id:2, quantity: 1 },
            ]
        })
    }).then(res => {
        console.log('resp in event listener', res)
        // if (res.ok)  return res.json().then(json => Promise.reject(json))
        // if (res.ok)  res.json().then(json => console.log(json)).then( url => console.log(url))
        if (res.ok)  return res.json()
    }).then(( {url} ) => {
        // console.log(url)
        window.location =res.url
    }).catch(e => {
        console.error(e)
    })  
})








    // fetch('http://localhost:3000/create-checkout-session', {
    //     method: "POST", 
    //     headers: {
    //         'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify({
    //         items: [
    //             { id: 1, quantity: 3 },
    //             { id: 2, quantity: 1 }
    //         ]
    //     })
    // }).then(res => {
        
    //     if (res.ok)  return res.json().then(json => Promise.reject(json))
    //     })
    //     .then(({ url }) => {
    //         window.location = res.url
    //     }) 
    //     .catch(e => {
    //         console.error(e.error)
    //     })
    // })
    //         // .then(res => {
    //         //     console.log(res)
    //         //     window.location = res.url
    //         // })
    //         // .catch(json => Promise.reject(json)) 
        
    // // })
    // // .then(({ url }) => {
    // //     window.location = url






