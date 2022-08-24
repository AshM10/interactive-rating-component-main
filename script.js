// active state
const ratings = document.querySelectorAll(".rating-circle");
let selectedRating;
ratings.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    //handle click
    ratings.forEach((item) => {
      item.classList.remove("orange-background");
    });

    item.classList.add("orange-background");
    console.log(item.innerText);
    selectedRating = item.innerText;
  });
});

// hides the initial view ratings on submit
const submitButton = document.querySelector(".submit");
const initialView = document.querySelector(".initial-view");
const submittedView = document.querySelector(".submitted-view");
const spanRating = document.querySelector(".rating");

// will show the submitted rating and thank you message
submitButton.addEventListener("click", (event) => {
  ratings.forEach((rating) => {
    if (rating.classList.contains("orange-background")) {
      initialView.classList.add("hidden");
      submittedView.classList.remove("hidden");
      spanRating.innerText = selectedRating;
    }
  });
});
