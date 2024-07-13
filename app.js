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

// footer visibility
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const skillsSection = document.getElementById('skills');

    function checkScrollPosition() {
        const skillsSectionRect = skillsSection.getBoundingClientRect();
        const footerHeight = footer.offsetHeight;

        // Check if the bottom of the skills section is within the viewport
        if (skillsSectionRect.bottom <= window.innerHeight) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);


    checkScrollPosition();
});

// Passion list functionality
document.addEventListener('DOMContentLoaded', () => {
    const passionsText = document.getElementById('passions-text');
    const passions = [
        "software engineering",
        "full-stack development",
        "exploring new technologies",
        "solving problems",
        "learning new things",
        "working out",
        "nutrition",
    ];
    let currentPassionIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Speed of typing in milliseconds
    const delayBetweenPassions = 2000; // Delay between each passion

    function typePassion() {
        if (charIndex < passions[currentPassionIndex].length) {
            passionsText.innerHTML += passions[currentPassionIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typePassion, typingSpeed);
        } else {
            setTimeout(erasePassion, delayBetweenPassions);
        }
    }

    function erasePassion() {
        if (charIndex > 0) {
            passionsText.innerHTML = passions[currentPassionIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erasePassion, typingSpeed);
        } else {
            currentPassionIndex = (currentPassionIndex + 1) % passions.length;
            setTimeout(typePassion, typingSpeed);
        }
    }

    // Initial call to start the typing effect
    typePassion();
});