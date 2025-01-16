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

























// Theme Settings -------------------------------------------------------------------------------------------------------------------

  // Inject CSS styles dynamically
const settingsCSS = `
  #settings-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    color: white;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000;
  }
  #settings-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  #settings-menu {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: var(--dark-lighter);
    border: 1px solid var(--primary-light);
    border-radius: var(--border-radius);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    width: 300px;
    padding: 1rem;
    display: none;
    flex-direction: column;
    gap: 1rem;
    z-index: 1000;
    animation: fadeIn 0.3s ease forwards;
  }
  #settings-menu h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text);
    text-align: center;
  }
  #settings-menu label {
    font-size: 1rem;
    color: var(--text-muted);
  }
  #settings-menu select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--text);
    background: var(--dark);
    border: 1px solid var(--primary-light);
    border-radius: var(--border-radius);
    outline: none;
  }
  #settings-menu button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: var(--primary);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  #settings-menu button:hover {
    background: var(--primary-light);
    transform: translateY(-2px);
  }
  #settings-menu button#close-menu {
    background: var(--dark-lighter);
    color: var(--text-muted);
    border: 1px solid var(--primary-light);
  }
  #settings-menu button#close-menu:hover {
    background: var(--dark);
    color: var(--text);
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject the CSS into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.textContent = settingsCSS;
document.head.appendChild(styleSheet);

// Create and inject HTML
const settingsHTML = `
  <div id="settings-button">⚙️</div>
  <div id="settings-menu">
    <div class="menu-content">
      <h2>Settings</h2>
      <label for="theme-select">Choose a theme:</label>
      <select id="theme-select">
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <button id="save-settings">Save</button>
      <button id="close-menu">Close</button>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', settingsHTML);

// JavaScript functionality
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const themeSelect = document.getElementById('theme-select');
const saveButton = document.getElementById('save-settings');
const closeButton = document.getElementById('close-menu');

// Apply the selected style dynamically using CSS variables
function applyStyle(theme) {
  const root = document.documentElement;
  switch (theme) {
    case 'blue':
      root.style.setProperty('--primary', '#2563eb');
      root.style.setProperty('--primary-light', '#60a5fa');
      root.style.setProperty('--dark', '#0f172a');
      root.style.setProperty('--dark-lighter', '#1e293b');
      root.style.setProperty('--text', '#f1f5f9');
      root.style.setProperty('--text-muted', '#94a3b8');
      root.style.setProperty('--secondary', '#2563eb');
      root.style.setProperty('--gradient-start', 'rgba(29, 78, 216, 0.1)');
      root.style.setProperty('--gradient-end', 'rgba(29, 78, 216, 0.25)');
      break;
    case 'red':
      root.style.setProperty('--primary', '#dc2626');
      root.style.setProperty('--primary-light', '#f87171');
      root.style.setProperty('--dark', '#1a202c');
      root.style.setProperty('--dark-lighter', '#2d3748');
      root.style.setProperty('--text', '#edf2f7');
      root.style.setProperty('--text-muted', '#a0aec0');
      root.style.setProperty('--secondary', '#ff7276');
      root.style.setProperty('--gradient-start', 'rgba(230, 57, 70, 0.1)');
      root.style.setProperty('--gradient-end', 'rgba(230, 57, 70, 0.25)');
      break;
    case 'green':
      root.style.setProperty('--primary', '#16a34a');
      root.style.setProperty('--primary-light', '#4ade80');
      root.style.setProperty('--dark', '#1e293b');
      root.style.setProperty('--dark-lighter', '#374151');
      root.style.setProperty('--text', '#e5e7eb');
      root.style.setProperty('--text-muted', '#9ca3af');
      root.style.setProperty('--secondary', '#34d399');
      root.style.setProperty('--gradient-start', 'rgba(16, 185, 129, 0.1)');
      root.style.setProperty('--gradient-end', 'rgba(16, 185, 129, 0.25)');
      break;
    case 'yellow':
      root.style.setProperty('--primary', '#ca8a04');
      root.style.setProperty('--primary-light', '#facc15');
      root.style.setProperty('--dark', '#18181b');
      root.style.setProperty('--dark-lighter', '#27272a');
      root.style.setProperty('--text', '#f3f4f6');
      root.style.setProperty('--text-muted', '#d1d5db');
      root.style.setProperty('--secondary', '#fcd34d');
      root.style.setProperty('--gradient-start', 'rgba(245, 158, 11, 0.1)');
      root.style.setProperty('--gradient-end', 'rgba(245, 158, 11, 0.25)');
      break;
  }
}

// Load saved style from localStorage
function loadStyle() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyStyle(savedTheme);
    themeSelect.value = savedTheme;
  }
}

// Event Listeners
settingsButton.addEventListener('click', () => {
  settingsMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  settingsMenu.style.display = 'none';
});

saveButton.addEventListener('click', () => {
  const selectedTheme = themeSelect.value;
  applyStyle(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
  settingsMenu.style.display = 'none';
});

// Initialize
document.addEventListener('DOMContentLoaded', loadStyle);





