// nav.js

// Fetch navigation links from JSON
async function fetchNavLinks() {
    try {
        const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Fetched navigation links:', data);
        populateNav(data);
        switchNavbar();
    } catch (error) {
        console.error('Error loading navigation links:', error);
    }
}

// Populate both mobile and desktop nav lists
function populateNav(links) {
    const navListMobile = document.getElementById('navList');
    const navListDesktop = document.getElementById('navListDesktop');

    // Clear existing items
    navListMobile.innerHTML = '';
    navListDesktop.innerHTML = '';

    links.forEach(link => {
        // Mobile nav item
        const liMobile = document.createElement('li');
        const aMobile = document.createElement('a');
        aMobile.href = link.url;
        aMobile.textContent = link.text;
        liMobile.appendChild(aMobile);
        navListMobile.appendChild(liMobile);

        // Desktop nav item
        const liDesktop = document.createElement('li');
        const aDesktop = document.createElement('a');
        aDesktop.href = link.url;
        aDesktop.textContent = link.text;
        liDesktop.appendChild(aDesktop);
        navListDesktop.appendChild(liDesktop);
    });
}

// Switch between mobile and desktop navbar
function switchNavbar() {
    const desktopNavbar = document.getElementById('desktopNavbar');
    const mobileNavbar = document.getElementById('sideMenu');

    if (window.innerWidth < 769) {
        // Mobile view
        desktopNavbar.style.display = 'none';
        mobileNavbar.style.display = 'flex'; // Show side menu on mobile
    } else {
        // Desktop view
        desktopNavbar.style.display = 'flex';
        mobileNavbar.style.display = 'none'; // Hide side menu on desktop
    }
}

// Toggle side menu visibility
function setupMobileMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
}

// Setup desktop menu toggle
function setupDesktopMenu() {
    const desktopNavbar = document.getElementById('desktopNavbar');
    desktopNavbar.addEventListener('mouseenter', function () {
        desktopNavbar.classList.add('active');
    });

    desktopNavbar.addEventListener('mouseleave', function () {
        desktopNavbar.classList.remove('active');
    });
}

// Initial fetch and setup
fetchNavLinks();
setupMobileMenuToggle();
setupDesktopMenu();

// Add event listener for window resize
window.addEventListener('resize', switchNavbar);
