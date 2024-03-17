const carousel = document.querySelector('.carousel');
let counter = 1;

setInterval(() => {
  carousel.style.transform = `translateX(${-counter * 100}%)`;
  counter++;
  if (counter === 8) {
    counter = 1;
    carousel.style.transition = 'none';
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s';
    }, 50);
  }
}, 3000);
