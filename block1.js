// main-script.js
// main-script.js

// ... (previous code)

// Function to toggle section visibility with fade effect
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.transition = 'opacity 0.5s'; // Apply transition
        section.style.opacity = '0'; // Apply fade out
        section.style.display = 'none';
    });

    const currentSection = document.querySelector(`.${sectionClass}`);
    if (currentSection) {
        currentSection.style.display = 'block';

        // Apply fade in
        setTimeout(() => {
            currentSection.style.opacity = '1';
        }, 10); // Set a small delay to trigger the transition
    }

    // Close navigation links container if open
    document.querySelector('.nav-links-container').style.display = 'none';
}

// Function to toggle navigation links visibility
function toggleNavLinks() {
    const navLinksContainer = document.querySelector('.nav-links-container');
    navLinksContainer.style.display = (navLinksContainer.style.display === 'flex') ? 'none' : 'flex';
}

// ... (remaining code)



// Set initial section to display (Home)
showSection('home');

// Add event listeners for navigation
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
