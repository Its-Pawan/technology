var slideIndex = 1;
showSlide(slideIndex);

// Call the autoPlay function to start the slideshow autoplay
autoPlay();

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("card");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("user-active");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("user-active");
  }

  slides[slideIndex - 1].classList.add("user-active");
  dots[slideIndex - 1].classList.add("user-active");
}

function autoPlay() {
  setInterval(function() {
    slideIndex++;
    showSlide(slideIndex);
  }, 3000); // Adjust the interval (in milliseconds) for the desired autoplay speed
}
