// smooth scrolling when clicking on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// change to dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
        }
    });
});

// image error handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.onerror = function() {
            this.classList.add('error');
        };
    });
});

// Footer visibility
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const lastSection = document.querySelector('section:last-of-type');

    function checkScrollPosition() {
        const lastSectionRect = lastSection.getBoundingClientRect();
        const footerHeight = footer.offsetHeight;

        if (lastSectionRect.bottom <= window.innerHeight + footerHeight) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    // Initial check
    checkScrollPosition();
});