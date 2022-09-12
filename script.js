const mainContainer = document.querySelector(".main");
const thankyouContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const textRating = document.getElementById("rating");

let ratingsbtns = Array.from(ratings);

submitButton.addEventListener('click', () => {
    mainContainer.style.display = "none"
    thankyouContainer.classList.remove("hidden")
})

for (const btn of ratingsbtns) {
    btn.addEventListener('click', ()=> {
        textRating.innerHTML = btn.innerHTML ;
    });
}
