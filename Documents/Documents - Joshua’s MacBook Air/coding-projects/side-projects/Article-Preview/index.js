const shareDropDownButton = document.querySelector('.icon');
const bottomIcons = document.querySelector('.topnav-right');

shareDropDownButton.addEventListener("click", () => {
    console.log("click")
    bottomIcons.classList.remove('topnav-right')
    bottomIcons.classList.add('active-topnav')
})