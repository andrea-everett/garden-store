

// change home image
var i = 0; 
var images = [];
var time = 4000;

images[0] = '/docs/imgs/hero-image.jpg';
images[1] = '/docs/imgs/hero-image2.jpeg';
images[2] = '/docs/imgs/hero-image3.jpeg';

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



// Redirect nav pages
// function myFunction() {
//     window.open("", "_self")
// }
// function myFunction() {
//     window.open("", "_self")
// }
// function myFunction() {
//     window.open("", "_self")
// }
// function myFunction() {
//     window.open("", "_self")
// }

