// navigation.js - Handle mobile menu and navigation
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('navbar');
    const navList = document.getElementById('navList');
    
    let hasOpenedOnce = false; // Track if the menu has opened once

    // Toggle mobile menu
    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
            menuToggle.classList.add('active');
            
            // Set clear opacity after first animation
            if (!hasOpenedOnce) {
                hasOpenedOnce = true;
                setTimeout(() => {
                    menuToggle.classList.add('clear'); // Set clear opacity
                }, 400); // Match this duration with the CSS transition time
            }
        });
    }

    // Close mobile menu
    if (closeBtn && sideMenu) {
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (sideMenu && menuToggle && 
            !sideMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Handle navigation links
    const loadNavLinks = async () => {
        // ... (your existing code for loading navigation links)
    };

    // Load navigation links
    loadNavLinks();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769 && sideMenu) {
            sideMenu.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
    });
});
