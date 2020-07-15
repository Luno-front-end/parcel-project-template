const slidersToShow = 1;
const container = document.querySelector('.overlay');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const lineCont = document.querySelector('.slider-container');
const line = document.querySelectorAll('.slider-line');

const itemWidth = container.clientWidth / slidersToShow;

items.forEach(item => {
  item.style.minWidth = `${itemWidth}px`;
});
// Кнопкі
var controls = document.querySelectorAll('.controls');
for (var i = 0; i < controls.length; i++) {
  controls[i];
}

var slides = document.querySelectorAll('.slider-track .slider-item');
// Лінія
var slidesP = document.querySelectorAll('.slider-container .slider-line');
///////////////////////
var currentSlide = 0;
var currentSlideP = 0;
var slideInterval = setInterval(nextSlide, 4000);
var slideIntervalP = setInterval(nextSlideP, 4000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function nextSlideP() {
  goToSlideP(currentSlideP + 1);
}

function prevSlideP() {
  goToSlideP(currentSlideP - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider-item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider-item showing';
}

// Лінія
function goToSlideP(n) {
  slidesP[currentSlideP].className = 'slider-line';
  currentSlideP = (n + slidesP.length) % slidesP.length;
  slidesP[currentSlideP].className = 'slider-line showing';
}
///////////////////////

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}
function pauseSlideshowP() {
  playing = false;
  clearInterval(slideIntervalP);
}

var btnNext = document.getElementById('prev');
var btnPrev = document.getElementById('next');

next.onclick = function () {
  nextSlide();
  nextSlideP();
};
prev.onclick = function () {
  prevSlide();
  prevSlideP();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
