const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-bar-link");
const links = document.querySelectorAll(".nav-bar-link li");



// $(function () {
//     var img = $('img'),
//         imgshow = $('#imgshow'),
//         overly = $('#over'),
//         close = $('#close');
//     img.on('click', function () {
//         alert("hii")
//         overly.show();
//         imgshow.attr('src', $(this).attr('src'));
//         close.click(function () {
//             overly.hide();
//         });
//     });
// });


const header = document.querySelector("header");
// Set the initial scroll position
let lastScrollPosition = 0;
// // Add an event listener for the scroll event
window.addEventListener("a", () => {
    // Get the current scroll position
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition - lastScrollPosition > 0) {
        // If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
        header.classList.add("hide");
    } else {
        // If the scroll direction is up or the user is at the top of the page, show the navbar
        header.classList.remove("hide");
    }
    // Set the last scroll position to the current scroll position
    lastScrollPosition = currentScrollPosition;
})


hamburger.addEventListener('click', () => {

    const colors = ["#B3D9A6", "#FAC601", "#47A2DB"];

    const random = Math.floor(Math.random() * colors.length);

    //Animate Links
    navLinks.classList.toggle("open");
    navLinks.style.background = "#B3D9A6";
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000

)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

let activeSlide = 0;
const slides = document.querySelectorAll('.slide');

let left = document.querySelector('#click-left');

left.onclick = function () {
    updatePrevSlide()
}


let right = document.querySelector('#click-right');

right.onclick = function () {
    updateNextSlide();
}

function updateNextSlide() {
    slides[activeSlide].classList.add("prev");
    let nextSlide = (activeSlide < slides.length - 1) ? activeSlide + 1 : 0;
    slides[nextSlide].classList.remove("prev");
    slides[nextSlide].classList.remove("next");
    slides[nextSlide].classList.add("active");

    if (nextSlide < slides.length - 1) {
        slides[nextSlide + 1].classList.add("next");
        slides[nextSlide + 1].classList.remove("prev");
    }
    else {
        slides[0].classList.remove("prev");
        slides[0].classList.add("next");
    }
    activeSlide = nextSlide;
}


function updatePrevSlide() {
    slides[activeSlide].classList.add("next");
    let prevSlide = (activeSlide > 0) ? activeSlide - 1 : slides.length - 1;
    slides[prevSlide].classList.remove("next");
    slides[prevSlide].classList.remove("prev");
    slides[prevSlide].classList.add("active");

    if (prevSlide > 0) {
        slides[prevSlide - 1].classList.add("prev");
        slides[prevSlide - 1].classList.remove("next");
    }
    else {
        slides[slides.length - 1].classList.remove("next");
        slides[slides.length - 1].classList.add("prev");
    }

    activeSlide = prevSlide;
}