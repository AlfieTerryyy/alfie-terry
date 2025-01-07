document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const navList = document.getElementById('navList');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
    
    const loadNavLinks = async () => {
        try {
            const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
            if (!response.ok) throw new Error('Failed to fetch navigation');

            const links = await response.json();
            const linkElements = links.map(link => {
                // Ensure the href attributes are correct
                const fixedUrl = link.url.replace(/\/+/g, '/'); // Fix multiple slashes
                return `<li><a href="${fixedUrl}">${link.text}</a></li>`;
            }).join('');
            
            navbar.innerHTML = `<ul>${linkElements}</ul>`;
            navList.innerHTML = linkElements;
        } catch (error) {
            console.error('Error loading navigation:', error);
        }
    };
    
    loadNavLinks();

    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = Math.max(scrollTop, 0);
    });
});
