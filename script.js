// active state
const ratings = document.querySelectorAll('.rating-circle');
let index;
ratings.forEach((item, i) => {
    item.addEventListener('click', (event) => {
        //handle click
        ratings.forEach((item, i) => {
            item.classList.remove('orange-background');
        });

        item.classList.add('orange-background');
    });
});