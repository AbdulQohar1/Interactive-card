// select and declare the submit button
// select and declare each of the rate star button
// select and declare the rating-message
// select and declare the review-page && the feedback page
// add event listener to the submit btn
// Submit btn backgroundColour changes to white and the color to yellow
// The class "review-page" gets a display of none && the thankYou page gets a display of block.
// 

let submitBtn = document.querySelector('.submitBtn');
let rateStar = document.querySelector('.rate-star');
let message = document.querySelector('.rating-message');
let reviewPage = document.querySelector('.review-page');
const feedbackPage = document.querySelector('.feedback');

submitBtn.addEventListener('click' , function() {
  // submitBtn.style.backgroundColor = "#fff";
  // submitBtn.style.color = "rgb(252,118,19)"
  reviewPage.classList.add("hidden");
  feedbackPage.classList.remove("hidden");

});








/* 
// Simplier  code
// Select the necessary classes and store them into a variable. 
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btncloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (i = 0; i < btnOpenModal; i++) {
  btnsOpenModal.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })
}

btnCloseModal.addEventListeners("click" , function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
})
 */