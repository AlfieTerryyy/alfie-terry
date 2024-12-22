var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

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
    updateFooterYear();

    window.addEventListener('scroll', updateScrollProgress);

    // Initialize menu toggle functionality
    document.querySelector('.menu-toggle').addEventListener('click', toggleNavbar);
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustFooter() {
        const body = document.body;
        const html = document.documentElement;
        const footer = document.querySelector('footer');

        // Calculate the total height of the document
        const documentHeight = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        
        // Set the minimum height of the content to the viewport height
        const viewportHeight = window.innerHeight;
        const content = document.querySelector('main');
        if (documentHeight < viewportHeight) {
            content.style.minHeight = `${viewportHeight - footer.offsetHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    }

    // Adjust footer on page load and resize
    adjustFooter();
    window.addEventListener('resize', adjustFooter);
});


}
