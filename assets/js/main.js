// Save theme preference to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Apply saved theme preference on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDark);
        saveThemePreference(prefersDark ? 'dark' : 'light');
    }
}

// Update footer year dynamically
function updateFooterYear() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').textContent = year;
}

// Scroll progress bar functionality
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
}

// Navbar toggle functionality
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    updateFooterYear();
    window.addEventListener('scroll', updateScrollProgress);
    document.querySelector('.menu-toggle').addEventListener('click', toggleNavbar);
});

// Adjust footer height
function adjustFooter() {
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector('footer');
    const documentHeight = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
    const viewportHeight = window.innerHeight;
    const content = document.querySelector('main');
    content.style.minHeight = documentHeight < viewportHeight
        ? `${viewportHeight - footer.offsetHeight}px`
        : 'auto';
}

document.addEventListener('DOMContentLoaded', adjustFooter);
window.addEventListener('resize', adjustFooter);

document.addEventListener("DOMContentLoaded", function() {
    if (!document.cookie.includes("accepted_cookies=true")) {
        document.querySelector(".cookie-overlay").style.display = "block";
    }

    document.querySelector(".accept-cookies").addEventListener("click", function() {
        document.cookie = "accepted_cookies=true; path=/; max-age=" + 60*60*24*365;
        document.querySelector(".cookie-overlay").style.display = "none";
    });
});