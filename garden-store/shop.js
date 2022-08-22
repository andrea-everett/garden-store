// get dropdowns from document
const dropDownCategories = document.querySelector('.seeds');

// loop through all dropdown elements
dropDownCategories.addEventListener("click", () => {
    dropDownCategories.classList.remove('.seeds')
    dropDownCategories.classList.add('.seeds')
})

