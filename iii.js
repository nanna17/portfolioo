// Dark Mode Toggle with Local Storage
const toggleSwitch = document.getElementById('toggle-switch');
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
const body = document.body;

// Check dark mode preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.toggle(currentTheme);
    if (currentTheme === 'dark') {
        moonIcon.classList.add('active');
    } else {
        sunIcon.classList.add('active');
    }
}

toggleSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark');
        moonIcon.classList.add('active');
        sunIcon.classList.remove('active');
        localStorage.setItem('theme', 'dark');
    }
});

// Background Color Change every 4 seconds
const backgrounds = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12']; // Add more colors as needed
let index = 0;

function changeBackground() {
    body.style.backgroundColor = backgrounds[index];
    index = (index + 1) % backgrounds.length;
}

setInterval(changeBackground, 4000); // Change background every 4 seconds

// Scroll Animation for Buttons and Links
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('active');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('active');
    });
});

// Smooth Scroll to Section
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Typewriter Effect for Name
const typedTextSpan = document.querySelector('.typedText');
const textArray = ['NANDINI SINGH GURJAR', 'WEB DEVELOPER', 'WEB DESIGNER'];
const typingDelay = 80;
const erasingDelay = 100;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Smooth Scroll to Top Button
const scrollButton = document.querySelector('.scroll-to-top');

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

