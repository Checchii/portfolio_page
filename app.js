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
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // change button's text depending on what is toggled
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Toggle Light Mode';
    } else {
        this.textContent = 'Toggle Dark Mode';
    }
});