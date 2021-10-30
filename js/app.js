// Navigation menu

function openNav() {
  document.getElementById('myNav').style.height = "100%";
  document.querySelector('body').style.overflow = 'hidden';
}
function closeNav() {
  document.getElementById('myNav').style.height = "0";
  document.querySelector('body').style.overflow = 'visible';
}

// Pocetna - Image slider

var mediaQuery = window.matchMedia('(max-width: 768px)');

var slideIndex = 1;

if (mediaQuery.matches) {
  showSlides(slideIndex, 'slide_1')
  showSlides(slideIndex, 'slide_2')
};

function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

function currentSlide(n) {
  showSlides(slideIndex = n, className);
}

function showSlides(n, className) {
  var i;

  var slides = document.getElementsByClassName(className);
  if (slides && mediaQuery.matches) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

  }
}

// Scroll to top

const scrollToTopButton = document.getElementById('scrollBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollToTopButton.style.display = 'block'
  } else {
    scrollToTopButton.style.display = 'none'
  }
}

function scrollToTop() {
  document.body.scrollTo({top: 0, behavior: 'smooth'});
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}