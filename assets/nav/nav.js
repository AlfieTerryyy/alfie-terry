// navigation.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const navList = document.getElementById('navList');
    const navbar = document.getElementById('navbar');

    // Toggle side menu visibility
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close side menu
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
    
    // Close the menu on smaller screens if the window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sideMenu.classList.remove('active');
        }
    });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    // Keep the header at the top
    // You can remove the hide on scroll logic if you want it always visible
    // const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // if (scrollTop > lastScrollTop) {
    //     header.classList.add('hidden');
    // } else {
    //     header.classList.remove('hidden');
    // }
    // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
});
