document.querySelectorAll('nav ul a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        document.querySelector('.active-section').classList.remove('active-section');
        targetSection.classList.add('active-section');

        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});
