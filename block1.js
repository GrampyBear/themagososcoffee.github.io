// Add this function to show/hide sections based on the section ID
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.display = 'none'; // Hide all sections
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block'; // Show the target section
    }
}

// Example usage: showSection('section1');

