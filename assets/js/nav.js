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

// Populate mobile and desktop nav
function populateNav(links) {
    const navListMobile = document.getElementById('navList'); // Mobile menu list
    const navListDesktop = document.getElementById('navListDesktop'); // Desktop nav list

    // Clear existing items
    navListMobile.innerHTML = '';
    navListDesktop.innerHTML = '';

    links.forEach(link => {
        // Create mobile nav link
        const liMobile = document.createElement('li');
        const aMobile = document.createElement('a');
        aMobile.href = link.url;
        aMobile.textContent = link.text;
        liMobile.appendChild(aMobile);
        navListMobile.appendChild(liMobile);

        // Create desktop nav link
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
    const sideMenu = document.getElementById('sideMenu');
    const navListDesktop = document.getElementById('navListDesktop');

    if (window.innerWidth < 769) {
        // Mobile view
        sideMenu.style.display = 'flex'; // Show side menu on mobile
        navListDesktop.style.display = 'none'; // Hide desktop navbar
        sideMenu.classList.remove('active');
    } else {
        // Desktop view
        sideMenu.style.display = 'none'; // Hide side menu on desktop
        navListDesktop.style.display = 'flex'; // Show desktop navbar
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
