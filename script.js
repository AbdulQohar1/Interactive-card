// select and declare the submit button
// select and declare each of the rate star button
// select and declare the rating-message
// select and declare the review-page && the feedback page
// add event listener to the submit btn
// Submit btn backgroundColour changes to white and the color to yellow
// The class "review-page" gets a display of none && the thankYou page gets a display of block.
// select and declare the rating message
// select and declare the uer-review class
// add an event listner to it
// write a function that select user-review's content and dump it in the thank you message.
// call the rating function
// reference/call it in the submitbutton code block

let submitBtn = document.querySelector('.submitBtn');
let rateStar = document.querySelector('.rate-star');
let message = document.querySelector('.rating-message');
let feedbackPage = document.querySelector('.feedback');
let reviewPage = document.querySelector('.review-page');
let userReview = document.querySelectorAll('.user-review');


let rating = function (rating) {
  message.textContent = `You selected ${rating} of 5`;
};

// let rating = function () {
//   message.textContent = `You selected ${userRating.textContent} of 5`;
// let rating = function (rating) {
//   message.textContent = `You selected ${rating} of 5`;
// }




userReview.forEach(function(link) {
  link.addEventListener("click", function(event) {
    
    event.preventDefault();
    var clickedElement = event.target;
    var clickedElementId = clickedElement.id;
      // Deselect all rate stars
      userReview.forEach(function(star) {
        star.classList.remove('active');
      });

    // Adding the class to element and extract the value
    link.classList.add("active");
    rating(clickedElementId[10]);
  });
});

submitBtn.addEventListener('click' , function() {
  reviewPage.classList.add("hidden");
  feedbackPage.classList.remove("hidden");
 
});





/*
let message = document.querySelector('.rating-message');
const feedbackPage = document.querySelector('.feedback');
let reviewPage = document.querySelector('.review-page');
let userReview = document.querySelector('user-review');
let userReview = document.querySelectorAll('.user-review');
let toggleElement = document.querySelectorAll('.toggle');

let rating = function () {
  message.textContent = `You selected ${userRating.textContent} of 5`;
let rating = function (rating) {
  message.textContent = `You selected ${rating} of 5`;
}


userReview.forEach(function(link) {
  link.addEventListener("click", function(event) {

    event.preventDefault();
    var clickedElement = event.target;
    var clickedElementId = clickedElement.id;

      // Deselect all rate stars
      userReview.forEach(function(star) {
        star.classList.remove('active');
      });

    // Adding the class to element and extract the value
    link.classList.add("active");
    rating(clickedElementId[11]);

  });
});

submitBtn.addEventListener('click' , function() {
  // userReview.addEventListener('click', rating
  // });

  reviewPage.classList.add("hidden");
  feedbackPage.classList.remove("hidden");
  rating();
});
*/

/*  
  // Adding the class to element and extract the value
    link.classList.add("active");
    rating(clickedElementId[11]);

  });
});

submitBtn.addEventListener('click' , function() {

  reviewPage.classList.add("hidden");
  feedbackPage.classList.remove("hidden");
});
*/






























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