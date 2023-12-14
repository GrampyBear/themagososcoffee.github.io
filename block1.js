// main-script.js

// ... (previous code)

// Function to toggle section visibility with fade effect
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');
    
    // Apply fade out to current visible section
    const currentVisibleSection = document.querySelector('.section[style="display: block;"]');
    if (currentVisibleSection) {
        currentVisibleSection.style.transition = 'opacity 0.5s';
        currentVisibleSection.style.opacity = '0';
        
        // Set a timeout to hide the section after the fade-out
        setTimeout(() => {
            currentVisibleSection.style.display = 'none';
        }, 500); // 0.5 seconds fade-out effect
    }

    // Apply fade in to the target section
    const currentSection = document.querySelector(`.${sectionClass}`);
    if (currentSection) {
        currentSection.style.transition = 'opacity 0.5s';
        currentSection.style.display = 'block';
        
        // Set a timeout to show the section after the fade-in
        setTimeout(() => {
            currentSection.style.opacity = '1';
        }, 0); // No delay for fade-in effect
    }
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
