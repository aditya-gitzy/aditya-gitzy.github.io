// 1. Scroll Fade-in Animations (Lightweight & smooth)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element hits the screen
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stops observing once shown to keep the site fast
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Grab all elements with the 'hidden' class
document.querySelectorAll('.hidden').forEach((el) => {
    observer.observe(el);
});

// 2. Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulating a successful send for now!
        formStatus.style.color = 'var(--accent)';
        formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = "";
        }, 5000);
    } else {
        formStatus.style.color = '#ff6b6b';
        formStatus.textContent = "Please fill out all fields.";
    }
});
