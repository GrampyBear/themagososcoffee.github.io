document.addEventListener("DOMContentLoaded", function(event) { 
    var links = document.querySelectorAll('nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var target = this.getAttribute('href').substring(1);
            var sections = document.querySelectorAll('.section');

            sections.forEach(function(section) {
                section.classList.remove('visible');
            });

            document.getElementById(target).classList.add('visible');

            links.forEach(function(link) {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
