// Initialize Bootstrap carousels with custom settings
document.addEventListener('DOMContentLoaded', function () {
    const mensCarousel = new bootstrap.Carousel('#mensCarousel', {
        interval: 5000,
        pause: 'hover'
    });

    const womensCarousel = new bootstrap.Carousel('#womensCarousel', {
        interval: 5000,
        pause: 'hover'
    });
});
