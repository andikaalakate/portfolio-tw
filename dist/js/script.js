// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Di luar Hamburger
window.addEventListener('click', function(e){
    if(e.target != Hamburger && e.target != navMenu) {
        Hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Programmer.', 'Web Developer.', 'Game Developer.', 'Photographer'];
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

function addNewAnimation() {
    animatedText.classList.remove('animate__zoomInRight');

    setTimeout(() => {
        animatedText.classList.remove('animate__pulse');
        void animatedText.offsetWidth;
        animatedText.classList.add('animate__pulse');
    }, 5000);
}

animatedText.addEventListener('animationend', addNewAnimation);

