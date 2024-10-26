document.addEventListener('DOMContentLoaded', async () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = mobileMenuBtn.querySelector('i');

    // Fetch links from JSON file
    try {
        const response = await fetch('urls.json');
        const links = await response.json();

        // Generate and insert links into nav
        links.forEach(link => {
            const navItem = document.createElement('a');
            navItem.href = link.url;
            navItem.textContent = link.name;
            navItem.classList.add('nav-link');
            navLinks.appendChild(navItem);
        });
    } catch (error) {
        console.error('Error loading URLs:', error);
    }

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });
});

