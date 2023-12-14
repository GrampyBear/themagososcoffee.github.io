// main-script.js

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

// Function to initialize the page and set the home section as active
function initializePage() {
    const homeButton = document.getElementById('nav-home');

    // Set the home section as active initially
    homeButton.classList.add('active');
    showSection('home-section');
}

// Event listener for navigation buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('nav-button')) {
        // Remove the 'active' class from all navigation buttons
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => button.classList.remove('active'));

        // Add the 'active' class to the clicked button
        event.target.classList.add('active');

        // Show the corresponding section
        const sectionClass = event.target.id.replace('nav-', '');
        showSection(`${sectionClass}-section`);
    }
});

// Initialize the page
initializePage();
            
