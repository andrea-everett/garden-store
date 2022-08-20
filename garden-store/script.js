// change home image
var i = 0; 
var images = [];
var time = 4000;

images[0] = '/imgs/hero-image.jpg';
images[1] = '/imgs/hero-image2.jpeg';
images[2] = '/imgs/hero-image3.jpeg';

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

