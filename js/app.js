// Set variable to keep track of current image slider position
let currentSlide = 0;

// Create function for changing the slide 
function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const sliderWidth = document.querySelector('.image-container').offsetWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slider.childElementCount - 1;
    } else if (currentSlide >= slider.childElementCount) {
        currentSlide = 0;
    }

    const translateValue = -currentSlide * sliderWidth;
    slider.style.transform = `translateX(${translateValue}px)`;

}