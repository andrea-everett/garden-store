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
  