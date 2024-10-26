// Fetch navigation links from JSON and apply to both desktop and mobile layouts
async function fetchNavLinks() {
    try {
        const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Fetched navigation links:', data);
        populateNav(data);
        updateNavDisplay(); // Set initial nav display based on screen size
    } catch (error) {
        console.error('Error loading navigation links:', error);
    }
}

// Populate navigation links for both mobile and desktop views
function populateNav(links) {
    const navList = document.getElementById('navList');

    // Clear existing items
    navList.innerHTML = '';

    // Create navigation links
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Handle navigation display based on screen size
function updateNavDisplay() {
    const sideMenu = document.getElementById('sideMenu');
    const headerContainer = document.querySelector('.header-container');
    const navList = document.getElementById('navList');

    if (window.innerWidth < 769) {
        // Mobile view
        sideMenu.style.display = 'flex'; // Show side menu on mobile
        sideMenu.classList.remove('active');
        navList.style.flexDirection = 'column'; // Stack links in side menu
    } else {
        // Desktop view
        sideMenu.style.display = 'none'; // Hide side menu on desktop

        // Display navigation links inline in the header
        headerContainer.appendChild(navList);
        navList.style.display = 'flex';
        navList.style.flexDirection = 'row'; // Arrange links horizontally
        navList.style.gap = '15px'; // Optional: add space between links
    }
}

// Toggle side menu visibility for mobile
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

// Adjust navigation display when the window is resized
window.addEventListener('resize', updateNavDisplay);
