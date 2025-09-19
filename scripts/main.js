document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});