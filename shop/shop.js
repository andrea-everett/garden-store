// on button click redirect to home page
document.querySelector('#heading')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store//index.html';
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
document.querySelector('#seeds')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
});

// on button click redirect to seeds page
document.querySelector('#gloves')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
});

// on button click redirect to seeds page
document.querySelector('#pruners')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
});

// on button click redirect to seeds page
document.querySelector('#veg')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/seeds/seeds.html';
});

// on button click redirect to seeds page
document.querySelector('#snips')
.addEventListener('click', () => {
    window.location.href = 'https://andrea-everett.github.io/garden-store/tools/tools.html';
});





