// on button click redirect to home page
document.querySelector('#heading')
.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// on button click redirect to shop page
document.querySelector('#products')
    .addEventListener('click', () => {
        window.location.href = '../shop/shop.html';
    });