document.addEventListener('DOMContentLoaded', () => {
    // Enable scrolling and log to the console
    document.body.style.overflow = 'auto';
    console.log('Scrolling enabled');

    // Scroll progress bar functionality
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        });
    }

    // Set the current year in footer or other places
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dynamic scrollbar color based on scroll position
    const root = document.documentElement;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        const hue = Math.round((scrollPercent / 100) * 240);
        const dynamicColor = `hsl(${hue}, 90%, 50%)`;
        root.style.setProperty("--scrollbar-color", dynamicColor);
    });

    // Adjust footer position based on content height
    const footer = document.querySelector('footer');
    const content = document.querySelector('main');
    const adjustFooter = () => {
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;
        const contentHeight = content.offsetHeight;
        if (contentHeight + footerHeight < windowHeight) {
            content.style.minHeight = `${windowHeight - footerHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    };
    adjustFooter();
    window.addEventListener('resize', adjustFooter);






document.addEventListener('DOMContentLoaded', () => {
  const footerItems = document.querySelectorAll('.footer-dark .item');
  const maxHeight = Math.max(...Array.from(footerItems).map(item => item.offsetHeight));

  footerItems.forEach(item => {
    item.style.height = `${maxHeight}px`;
  });
});



