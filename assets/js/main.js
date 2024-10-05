
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

document.addEventListener("DOMContentLoaded", function () {
    // Function to apply the theme
    function applyTheme(theme) {
        document.body.className = theme;
    }