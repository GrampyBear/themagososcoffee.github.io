// main-script.js

// Initialize home as active initially
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// Function to toggle section visibility with fade effect
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');

    // Find the current visible section
    const currentVisibleSection = document.querySelector('.section[style="display: block;"]');

    // If there's a current visible section
    if (currentVisibleSection) {
        // Apply fade-out effect
        currentVisibleSection.style.transition = 'opacity 0.5s';
        currentVisibleSection.style.opacity = '0';

        // Set a timeout to hide the section after the fade-out
        setTimeout(() => {
            currentVisibleSection.style.display = 'none';

            // Show the target section after hiding the current section
            showTargetSection();
        }, 500); // 0.5 seconds fade-out effect
    } else {
        // If there's no current visible section, show the target section directly
        showTargetSection();
    }

    // Function to show the target section after hiding the current section
    function showTargetSection() {
        const currentSection = document.querySelector(`.${sectionClass}`);
        if (currentSection) {
            // Display the target section
            currentSection.style.transition = 'opacity 0.5s';
            currentSection.style.display = 'block';

            // Set a timeout to show the section after the fade-in
            setTimeout(() => {
                currentSection.style.opacity = '1';
            }, 0); // No delay for fade-in effect
        }
    }
}

// Function to toggle drop-down visibility
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// Event listeners for navigation buttons
document.getElementById('nav-home').addEventListener('click', () => {
    showSection('home');
    toggleDropdown(); // Close dropdown after selecting a section
});

document.getElementById('nav-my-blog').addEventListener('click', () => {
    showSection('my-blog');
    toggleDropdown();
});

document.getElementById('nav-furry-fat-gallery').addEventListener('click', () => {
    showSection('furry-fat-gallery');
    toggleDropdown();
});

document.getElementById('nav-kitchen').addEventListener('click', () => {
    showSection('kitchen');
    toggleDropdown();
});

document.getElementById('nav-events').addEventListener('click', () => {
    showSection('events');
    toggleDropdown();
});

document.getElementById('nav-wiki').addEventListener('click', () => {
    showSection('wiki');
    toggleDropdown();
});

document.getElementById('nav-curiosities-extras').addEventListener('click', () => {
    showSection('curiosities-extras');
    toggleDropdown();
});

document.getElementById('nav-about-me').addEventListener('click', () => {
    showSection('about-me');
    toggleDropdown();
});

document.getElementById('nav-special-functions').addEventListener('click', () => {
    showSection('special-functions');
    toggleDropdown();
});

document.getElementById('nav-disclaimer').addEventListener('click', () => {
    showSection('disclaimer');
    toggleDropdown();
});

// ... (remaining code)
                                                        
