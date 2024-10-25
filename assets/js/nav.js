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
        switchNavbar(); // Call to set initial navbar based on screen size
    } catch (error) {
        console.error('Error loading navigation links:', error);
    }
}

// Populate mobile nav
function populateNav(links) {
    const navListMobile = document.getElementById('navList');

    // Clear existing items
    navListMobile.innerHTML = '';

    links.forEach(link => {
        const liMobile = document.createElement('li');
        const aMobile = document.createElement('a');
        aMobile.href = link.url;
        aMobile.textContent = link.text;
        liMobile.appendChild(aMobile);
        navListMobile.appendChild(liMobile);
    });
}

// Switch between mobile and desktop navbar
function switchNavbar() {
    const sideMenu = document.getElementById('sideMenu');

    if (window.innerWidth < 769) {
        // Mobile view
        sideMenu.style.display = 'flex'; // Show side menu on mobile
        sideMenu.classList.remove('active');
    } else {
        // Desktop view
        sideMenu.style.display = 'none'; // Hide side menu on desktop
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

// Initial fetch and setup
fetchNavLinks();
setupMobileMenuToggle();

// Add event listener for window resize
window.addEventListener('resize', switchNavbar);
