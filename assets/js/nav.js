// navigation.js - Handle mobile menu and navigation
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('navbar');
    const navList = document.getElementById('navList');

    // Toggle mobile menu
    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
            menuToggle.classList.add('active');
        });
    }

    // Close mobile menu
    if (closeBtn && sideMenu) {
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            menuToggle?.classList.remove('active');
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
        try {
            const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
            if (!response.ok) throw new Error('Failed to fetch navigation');
            
            const links = await response.json();
            
            // Populate desktop navigation
            if (navbar) {
                navbar.innerHTML = links.map(link => 
                    `<a href="${link.url}" style="flex-grow: 1; text-align: center;">${link.text}</a>`
                ).join('');
            }
            
            // Populate mobile navigation
            if (navList) {
                navList.innerHTML = links.map(link => 
                    `<li><a href="${link.url}">${link.text}</a></li>`
                ).join('');
            }
        } catch (error) {
            console.error('Error loading navigation:', error);
            // Fallback navigation
            const fallbackLinks = [
                { url: '/', text: 'Home' },
                { url: '/about', text: 'About' },
                { url: '/contact', text: 'Contact' }
            ];
            
            if (navbar) {
                navbar.innerHTML = fallbackLinks.map(link => 
                    `<a href="${link.url}" style="flex-grow: 1; text-align: center;">${link.text}</a>`
                ).join('');
            }
            
            if (navList) {
                navList.innerHTML = fallbackLinks.map(link => 
                    `<li><a href="${link.url}">${link.text}</a></li>`
                ).join('');
            }
        }
    };

    // Load navigation links
    loadNavLinks();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769 && sideMenu) {
            sideMenu.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
        // Make navbar full-width on resize
        if (navbar) {
            navbar.style.width = `${window.innerWidth}px`;
        }
    });

    // Initial navbar width
    if (navbar) {
        navbar.style.width = `${window.innerWidth}px`;
    }
});
