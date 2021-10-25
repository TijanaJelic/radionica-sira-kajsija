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
if(mediaQuery.matches) {
  showSlides(slideIndex);
};

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Scroll button

var scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", scrollToTop, false);

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}


function scrollToTop() {
    document.body.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

