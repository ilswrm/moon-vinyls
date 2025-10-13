document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('.navbar-left ul');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});