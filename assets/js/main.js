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
    const scrollbarThumb = document.querySelector("::-webkit-scrollbar-thumb");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        // Dynamically change scrollbar thumb's glow color
        const hue = Math.round((scrollPercent / 100) * 240); // Range: 0-240 (blue to red)
        const dynamicColor = `hsl(${hue}, 90%, 50%)`;

        root.style.setProperty("--primary-light", dynamicColor);
    });
});









