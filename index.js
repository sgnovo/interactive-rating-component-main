const ratingState = document.querySelector('.rating-state')
const thankYouState = document.querySelector('.thankyou-state')
const submitBtn = document.getElementById('submit-btn')
const rateAgain = document.getElementById('rate-again')
const numberBtn = document.querySelectorAll('.number-btn')
const rating = document.getElementById('rating')


submitBtn.addEventListener("click", () => {
    thankYouState.style.display = 'block'
    ratingState.style.display = 'none'
})

rateAgain.addEventListener("click", () => {
    thankYouState.style.display = 'none'
    ratingState.style.display = 'block'
})

numberBtn.forEach((number) => {
    number.addEventListener("click", () => {
        rating.innerHTML = number.innerHTML
    })
})