document.addEventListener('DOMContentLoaded', () => {
    // Enable scrolling
    document.body.style.overflow = 'auto';
    console.log('Scrolling enabled');

    // Update scroll progress bar
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        if (!scrollProgress) return;
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Function to handle infinite scrolling
function handleScroll() {
    const scrollThreshold = 100; // Threshold from the bottom to trigger loading more content
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold;
    if (nearBottom) {
        loadMoreContent();
    }
}

// Load more content and append it to the container
async function loadMoreContent() {
    // You can show a loading spinner here if you want
    const container = document.querySelector('.grid-container'); // Adjust to your container class
    const newContent = await fetchMoreContent(); // Define this function based on how you fetch new content
    container.appendChild(newContent);
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        // Dynamically change a scrollbar-specific color variable
        const hue = Math.round((scrollPercent / 100) * 240); // Range: 0-240 (blue to red)
        const dynamicColor = `hsl(${hue}, 90%, 50%)`;

        // Use a scrollbar-specific variable
        root.style.setProperty("--scrollbar-color", dynamicColor);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const content = document.querySelector('main'); // Assuming main holds the rest of the page content

    const adjustFooter = () => {
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;
        const contentHeight = content.offsetHeight;

        // If the content height is less than the viewport height, adjust the footer
        if (contentHeight + footerHeight < windowHeight) {
            content.style.minHeight = `${windowHeight - footerHeight}px`;
        } else {
            content.style.minHeight = 'auto';
        }
    };

    // Adjust footer position on page load and resize
    adjustFooter();
    window.addEventListener('resize', adjustFooter);
});
