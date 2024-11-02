const nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    runningTime = document.querySelector('.carousel .timeRunning');

const timeRunning = 3000; 
const timeAutoNext = 7000;

let runTimeOut, runNextAuto;

// Function to handle the next button click
nextBtn.onclick = () => showSlider('next');

// Function to handle the previous button click
prevBtn.onclick = () => showSlider('prev');

// Automatic slider advancement
runNextAuto = setTimeout(() => nextBtn.click(), timeAutoNext);

// Resetting the animation for the running time
function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Trigger reflow
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

// Show the slider based on the direction
function showSlider(type) {
    const sliderItemsDom = list.querySelectorAll('.item');
    
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
    }

    // Clear existing timeout and reset animations
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next', 'prev');
    }, timeRunning);

    // Reset automatic next timeout
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => nextBtn.click(), timeAutoNext);
    
    resetTimeAnimation();
}

// Start the initial animation
resetTimeAnimation();
