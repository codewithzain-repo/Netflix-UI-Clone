// Card Swipe Listeners

const slider = document.querySelector(".cards");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click", function () {
    slider.scrollBy({
        left: -500,
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click", function () {
    slider.scrollBy({
        left: 500,
        behavior: "smooth"
    });
});

// FAQ'S TOGGLE

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(function (box) {
    box.addEventListener("click", function () {

        if (box.classList.contains("active")) {
            box.classList.remove("active");
        } else {
            faqBoxes.forEach(function (item) {
                item.classList.remove("active");
            });

            box.classList.add("active");
        }

    });
});
