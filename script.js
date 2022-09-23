// / change home image
let i = 0; 
const images = [];
const time = 4000;

images[0] = 'imgs/hero-image.jpg';
images[1] = 'imgs/hero-image2.jpeg';
images[2] = 'imgs/hero-image3.jpeg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1 ){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

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

// stripe payment API
var stripe = Stripe('pk_live_51LgH1XB6d5FKrU8pLOm7kDtW2ls5eTvlkCJhggqL8KwMfMDHtgXGeherqOzgI9EaQ9Q9c7A9OplCd6fmACMJ4PbT00rZV2vs17');

document.getElementById("checkout").addEventListener("click", function(){
stripe.redirectToCheckout({
    lineItems: [
        {
            price: "price_1LgU4yB6d5FKrU8pTDd9Vfvn",
            quantity: 1
        },
    ],
    mode: "subscription",
    successUrl:"https://www.google.com",
    cancelUrl: "https://www.twitter.com",
})
.then(function(result) {
    // alert(result)
});

})



