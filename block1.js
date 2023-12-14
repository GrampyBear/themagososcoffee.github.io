// main-script.js

// Function to hide the dropdown content
function hideDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}

// Function to toggle drop-down visibility
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

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

    // Hide the dropdown content when navigating to a new section
    hideDropdown();
}

// Initialize home as active initially
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// Event listener for the dropdown button
document.querySelector('.dropdown-btn').addEventListener('click', toggleDropdown);

// Event listeners for navigation buttons
document.getElementById('nav-home').addEventListener('click', () => showSection('home'));
document.getElementById('nav-my-blog').addEventListener('click', () => showSection('my-blog'));
document.getElementById('nav-furry-fat-gallery').addEventListener('click', () => showSection('furry-fat-gallery'));
document.getElementById('nav-kitchen').addEventListener('click', () => showSection('kitchen'));
document.getElementById('nav-events').addEventListener('click', () => showSection('events'));
document.getElementById('nav-wiki').addEventListener('click', () => showSection('wiki'));
document.getElementById('nav-curiosities-extras').addEventListener('click', () => showSection('curiosities-extras'));
document.getElementById('nav-about-me').addEventListener('click', () => showSection('about-me'));
document.getElementById('nav-special-functions').addEventListener('click', () => showSection('special-functions'));
document.getElementById('nav-disclaimer').addEventListener('click', () => showSection('disclaimer'));

// ... (remaining code)
