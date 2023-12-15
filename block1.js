// Function to hide the dropdown content with fade effect
function hideDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.transition = 'opacity 0.5s';
    dropdownContent.style.opacity = '0';

    // Set a timeout to hide the dropdown content after the fade-out
    setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 500); // 0.5 seconds fade-out effect
}

// Function to toggle drop-down visibility with fade effect
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    if (dropdownContent.style.display === 'block') {
        // Hide the dropdown content with fade-out effect
        dropdownContent.style.transition = 'opacity 0.5s, transform 0.5s';
        dropdownContent.style.opacity = '0';
        dropdownContent.style.transform = 'translateY(100%)';

        // Set a timeout to hide the dropdown content after the fade-out
        setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 500); // 0.5 seconds fade-out effect

        // Set the dropdown button back to normal state
        dropdownBtn.style.borderRadius = '50%';
        dropdownBtn.style.background = 'linear-gradient(#d9534f, #ac2925)';
        dropdownBtn.textContent = 'more~';

        // Set nav links back to visible
        navLinks.forEach(link => {
            link.style.visibility = 'visible';
        });
    } else {
        // Show the dropdown content with fade-in effect
        dropdownContent.style.transition = 'opacity 0.5s, transform 0.5s';
        dropdownContent.style.display = 'block';
        dropdownContent.style.opacity = '1';
        dropdownContent.style.transform = 'translateY(0)';

        // Set a timeout to show the dropdown content after the fade-in
        setTimeout(() => {
            // Set the dropdown button to expanded state
            dropdownBtn.style.borderRadius = '20% 20% 0 0';
            dropdownBtn.style.background = 'linear-gradient(#ac2925, #d9534f)';
            dropdownBtn.textContent = 'less~';

            // Set nav links to invisible
            navLinks.forEach(link => {
                link.style.visibility = 'hidden';
            }
            );
        }, 0); // No delay for fade-in effect
    }
}


// Function to toggle section visibility with fade effect
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.section');

    // Find the current visible section
    const currentVisibleSection = document.querySelector('.section[style="display: block;"]');

    // If there's a current visible section
    if (currentVisibleSection) {
        // Deactivate the previous section
        currentVisibleSection.style.transition = 'opacity 0.5s';
        currentVisibleSection.style.opacity = '0';

        // Set a timeout to hide the section after the fade-out
        setTimeout(() => {
            currentVisibleSection.style.display = 'none';

            // Activate the target section after hiding the current section
            showTargetSection();
        }, 500); // 0.5 seconds fade-out effect
    } else {
        // If there's no current visible section, activate the target section directly
        showTargetSection();
    }

    // Function to activate the target section after hiding the current section
    function showTargetSection() {
        const currentSection = document.querySelector(`.${sectionClass}`);
        if (currentSection) {
            // Display and activate the target section
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
