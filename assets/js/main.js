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



// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    updateFooterYear();
    window.addEventListener('scroll', updateScrollProgress);
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


