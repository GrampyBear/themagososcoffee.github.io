// main-script.js

// ... (previous code)

// Function to toggle section visibility with fade effect
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');

    // Find the current active section
    const currentActiveSection = document.querySelector('.nav-button.active');

    // If there's a current active section
    if (currentActiveSection) {
        // Remove the active class from the current active section link
        currentActiveSection.classList.remove('active');
    }

    // Activate the clicked section link
    const clickedSectionLink = document.getElementById(`nav-${sectionClass}`);
    clickedSectionLink.classList.add('active');

    // Hide all sections
    sections.forEach(section => {
        section.style.transition = 'opacity 1s'; // Updated to 1 second
        section.style.opacity = '0';
        section.style.display = 'none';
    });

    // Show the target section after hiding others
    const targetSection = document.querySelector(`.${sectionClass}`);
    targetSection.style.transition = 'opacity 1s'; // Updated to 1 second
    targetSection.style.display = 'block';

    // Set a timeout to show the section after the fade-in
    setTimeout(() => {
        targetSection.style.opacity = '1';
    }, 0); // No delay for fade-in effect
}

// Activate the "Home" section by default
showSection('home');

// ... (remaining code)
