const slidersToShow = 1;
const container = document.querySelector('.overlay');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');

const itemWidth = container.clientWidth / slidersToShow;

items.forEach(item => {
  item.style.minWidth = `${itemWidth}px`;
});

var controls = document.querySelectorAll('.controls');
for (var i = 0; i < controls.length; i++) {
  controls[i];
}

var slides = document.querySelectorAll('.slider-track .slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider-item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider-item showing';
}

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

var btnNext = document.getElementById('prev');
var btnPrev = document.getElementById('next');

next.onclick = function () {
  nextSlide();
};
prev.onclick = function () {
  prevSlide();
};
