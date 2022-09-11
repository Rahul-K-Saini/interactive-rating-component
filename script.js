const mainContainer = document.querySelector(".main");
const thankyouContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const textRating = document.querySelector("#rating");

submitButton.addEventListener('click', () => {
    mainContainer.style.display = "none"
    thankyouContainer.classList.remove("hidden")
})


ratings.forEach((buttons) => {
    buttons.addEventListener('click', changeRating)
    
})

function changeRating() {
    ratings.innerHTML = textRating.innerHTML
}
