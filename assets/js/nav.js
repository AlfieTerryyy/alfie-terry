// Fetch navigation links from JSON
async function fetchNavLinks() {
    try {
        const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
        if (!response.ok) throw new Error('Failed to fetch links: ' + response.statusText);
        const links = await response.json();
        populateNav(links);
        updateNavDisplay();
    } catch (error) {
        console.error('Error loading links:', error);
    }
}

// Populate navigation links
function populateNav(links) {
    const navbar = document.getElementById('navbar');
    const navList = document.getElementById('navList');
    navbar.innerHTML = ''; // Clear existing links
    navList.innerHTML = '';

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        
        // Append to desktop and mobile menus
        navbar.appendChild(a.cloneNode(true));
        const li = document.createElement('li');
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Adjust display based on screen size
function updateNavDisplay() {
    const sideMenu = document.getElementById('sideMenu');
    if (window.innerWidth >= 769) {
        sideMenu.classList.remove('active'); // Hide the side menu if screen is wide enough
    }
}

// Mobile menu toggle
function setupMobileMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', () => sideMenu.classList.add('active'));
    closeBtn.addEventListener('click', () => sideMenu.classList.remove('active'));

    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
}

// Initial load
fetchNavLinks();
setupMobileMenuToggle();

// Adjust menu display on resize
window.addEventListener('resize', updateNavDisplay);
