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
