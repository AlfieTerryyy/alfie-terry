// main.js - Handle scroll progress and footer year
document.addEventListener('DOMContentLoaded', () => {
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
    const newContent = await fetchMoreContent();
    container.appendChild(newContent);
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);


// scrolling
        document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.overflow = 'auto';
    console.log('Scrolling enabled');
});