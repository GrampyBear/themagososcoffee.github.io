// main-script.js

// ... (previous code)

// Function to toggle section visibility
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    const currentSection = document.querySelector(`.${sectionClass}`);
    if (currentSection) {
        currentSection.style.display = 'block';
    }
}

// Set initial section to display
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
