const shareButton = document.getElementById("share-button");
const active = document.getElementById("active");
const shareButton2  = document.getElementById("share-button2");

shareButton.addEventListener("click", () => {
    active.classList.toggle("active");
})

shareButton2.addEventListener("click", () => {
    active.classList.toggle("active");
});