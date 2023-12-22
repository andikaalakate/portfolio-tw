// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Programmer.', 'Web Developer.', 'Game Develeper.', 'Photographer'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.sec-text').textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 175);
    })();
});

const animatedText = document.getElementById('animatedText');

// Function to add new animation after zoomInRight animation finishes
function addNewAnimation() {
    animatedText.classList.remove('animate__zoomInRight');

    // Reset the animation after 5 seconds
    setTimeout(() => {
        animatedText.classList.remove('animate__pulse');
        void animatedText.offsetWidth; // Trigger reflow to restart the animation
        animatedText.classList.add('animate__pulse');
    }, 5000);
}

// Event listener to detect when zoomInRight animation finishes
animatedText.addEventListener('animationend', addNewAnimation);

