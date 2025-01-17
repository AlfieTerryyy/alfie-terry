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



document.addEventListener('DOMContentLoaded', () => {
    // Create the theme toggle button (like iPhone mute switch)
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id = 'theme-toggle';
    themeToggleButton.setAttribute('aria-label', 'Toggle Theme');
    document.body.appendChild(themeToggleButton); // Add the button to the body

    // Create the <link> element for the theme
    const linkElement = document.createElement('link');
    linkElement.id = 'theme-stylesheet';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement); // Add the link to the head

    // Check localStorage for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        linkElement.href = 'https://alfieterry.co.uk/assets/css/pounder-light.css';
    } else {
        linkElement.href = 'https://alfieterry.co.uk/assets/css/pounder.css';
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        let currentTheme = linkElement.getAttribute('href');
        if (currentTheme === 'https://alfieterry.co.uk/assets/css/pounder.css') {
            linkElement.setAttribute('href', 'https://alfieterry.co.uk/assets/css/pounder-light.css');
            localStorage.setItem('theme', 'light');
        } else {
            linkElement.setAttribute('href', 'https://alfieterry.co.uk/assets/css/pounder.css');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Styling the button to float and look like an iPhone mute switch
    const buttonStyle = themeToggleButton.style;
    buttonStyle.position = 'fixed';
    buttonStyle.bottom = '20px'; // Position at the bottom of the page
    buttonStyle.right = '20px';
    buttonStyle.width = '60px';
    buttonStyle.height = '30px';
    buttonStyle.borderRadius = '50px';
    buttonStyle.backgroundColor = '#aaa';
    buttonStyle.border = 'none';
    buttonStyle.cursor = 'pointer';
    buttonStyle.transition = 'background-color 0.3s, transform 0.2s';
    buttonStyle.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    
    // Styling for the "switch" part of the button
    const switchStyle = document.createElement('div');
    switchStyle.style.position = 'absolute';
    switchStyle.style.top = '3px';
    switchStyle.style.left = '3px';
    switchStyle.style.width = '24px';
    switchStyle.style.height = '24px';
    switchStyle.style.borderRadius = '50%';
    switchStyle.style.backgroundColor = 'white';
    switchStyle.style.transition = 'transform 0.2s ease';
    themeToggleButton.appendChild(switchStyle);

    // Toggle switch style when the button is clicked
    themeToggleButton.addEventListener('click', () => {
        if (switchStyle.style.transform === 'translateX(30px)') {
            switchStyle.style.transform = 'translateX(0)';
        } else {
            switchStyle.style.transform = 'translateX(30px)';
        }
    });

    
});











// Create the arrow button dynamically
const arrowButton = document.createElement('button');
arrowButton.classList.add('arrow-btn');
arrowButton.innerHTML = '&#8595;'; // Downward arrow symbol
document.body.appendChild(arrowButton);

// Get the footer and set up initial scroll position
const footer = document.querySelector('.footer-dark');
let lastScrollTop = 0;
let isMobile = window.innerWidth <= 768;  // Detect if the user is on mobile

// Function to check scrollability and adjust footer behavior
function checkScrollability() {
    const bodyHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (bodyHeight <= viewportHeight) {
        // If content isn't enough to scroll, always show the footer
        footer.style.bottom = '0';
        arrowButton.style.display = 'none'; // Hide arrow button
    } else {
        // Handle scroll behavior for desktop
        arrowButton.style.display = 'block'; // Show arrow button if scrollable
    }
}

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
}

// Toggle the footer when the arrow button is clicked
arrowButton.addEventListener('click', () => {
    if (footer.style.bottom === '0px') {
        footer.style.bottom = "-100%"; // Slide footer out
    } else {
        footer.style.bottom = "0"; // Slide footer in
    }
});

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Check for resizing and adjust based on screen size
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768; // Recalculate if it's mobile
    checkScrollability(); // Check scrollability on resize
});

// Initial footer position on page load
footer.style.bottom = "-100%"; // Make sure the footer starts off-screen on desktop
checkScrollability(); // Check if content allows scrolling or not
