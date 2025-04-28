// Initialize both carousels with pause on hover
document.addEventListener('DOMContentLoaded', function () {
  var carousels = ['#carouselMen', '#carouselWomen'];

  carousels.forEach(function (id) {
    var carouselElement = document.querySelector(id);
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: 'hover'
    });
  });
});
