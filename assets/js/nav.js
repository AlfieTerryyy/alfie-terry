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

    // Fetch and populate navigation links dynamically
    const loadNavLinks = async () => {
        try {
            const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
            if (!response.ok) throw new Error('Failed to fetch navigation');

            const links = await response.json();
            const linkElements = links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('');

            // Populate both desktop and mobile nav
            navbar.innerHTML = linkElements;
            navList.innerHTML = linkElements;
        } catch (error) {
            console.error('Error loading navigation:', error);
            const fallbackLinks = [
                { url: '/', text: 'Home' },
                { url: '/about', text: 'About' },
                { url: '/contact', text: 'Contact' }
            ];
            const fallbackHTML = fallbackLinks.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('');
            navbar.innerHTML = fallbackHTML;
            navList.innerHTML = fallbackHTML;
        }
    };

    loadNavLinks();

    // Close the menu on smaller screens if the window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sideMenu.classList.remove('active');
        }
    });
});
