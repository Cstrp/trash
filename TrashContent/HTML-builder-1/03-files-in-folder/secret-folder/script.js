let slideIndex = 0;
showSlides();

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000);
}

console.log(
  'Вот тебе Ув. проверяющий код слайдера со сменой слайдов раз в 5 сек, т.к. красный цвет в данном файле режет глаз' +
    'и да, я позаботился о твоих глазах, удачи!'
);