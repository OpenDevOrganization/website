console.log("This is working")
window.onscroll = function () { scroll() }
function scroll() {
    var s = window.pageYOffset;
    document.getElementById("a").style.top = ((s / (window.outerHeight + 200)) * 100) + "%";
}

// projects

const carouselSlide = document.querySelector(".projects-list");
const screenSize = document.querySelector("#projects")
const carouselProject = document.querySelectorAll(".projects-list div");

let counter = 1
const size = screenSize.clientWidth < 769 ? screenSize.clientWidth : carouselProject[0].clientWidth
const carouselLength = carouselProject.length / 4;
const nextButton = document.querySelector('#next-button')
const prevButton = document.querySelector('#prev-button')


setInterval(() => {
    if (counter === 0) {
        counter++
        return
    } if (counter < carouselLength) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        counter++
    } else {
        carouselSlide.style.transition = 'none';
        counter = 0
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        counter++
    }
}, 8000);

nextButton.addEventListener('click', () => {
    if (counter === 0) {
        counter++
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        return
    } else if (counter < carouselLength) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        counter++
    } else {
        carouselSlide.style.transition = 'none';
        counter = 0
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        counter++
    }
});

prevButton.addEventListener('click', () => {
    if (counter === 1) {
        counter--
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if (counter <= 0) {
        carouselSlide.style.transition = 'none';
        counter = carouselLength - 1
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        return
    } else {
        counter--
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});
