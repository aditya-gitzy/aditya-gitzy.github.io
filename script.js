// 1. The Typing Effect (Hero Section)
const textElement = document.getElementById("typewriter");
const texts = ["Developer.", "Unity Enthusiast.", "Problem Solver."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2 seconds before typing next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// 2. Scroll Animation (The Fade-in Effect)
// This code checks if an element is in the screen view.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the CSS class that makes it visible
        }
    });
});

// Tell the observer to watch all elements with the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));