// main.js
class WebsiteUI {
    constructor() {
        // Cache DOM elements
        this.scrollProgress = document.getElementById('scroll-progress');
        this.currentYear = document.getElementById('current-year');
        this.navbar = document.getElementById('navbar');
        this.navList = document.getElementById('navList');
        this.sideMenu = document.getElementById('sideMenu');
        this.menuToggle = document.getElementById('menuToggle');
        this.closeBtn = document.getElementById('closeBtn');

        // Bind methods to maintain context
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        
        // Initialize
        this.init();
    }

    init() {
        // Initialize all functionality
        this.setupEventListeners();
        this.updateFooterYear();
        this.fetchNavLinks();
        
        // Initial checks
        this.handleResize();
    }

    setupEventListeners() {
        // Optimize scroll listener with requestAnimationFrame
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Debounced resize listener
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => this.handleResize(), 250);
        });

        // Mobile menu listeners
        this.menuToggle?.addEventListener('click', () => this.toggleMobileMenu(true));
        this.closeBtn?.addEventListener('click', () => this.toggleMobileMenu(false));
        document.addEventListener('click', this.handleClickOutside);

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.toggleMobileMenu(false);
        });
    }

    handleScroll() {
        if (!this.scrollProgress) return;
        
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        
        // Use transform instead of width for better performance
        this.scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
    }

    handleResize() {
        if (!this.sideMenu) return;
        
        if (window.innerWidth >= 769) {
            this.toggleMobileMenu(false);
        }
    }

    handleClickOutside(event) {
        if (!this.sideMenu || !this.menuToggle) return;
        
        if (!this.sideMenu.contains(event.target) && 
            !this.menuToggle.contains(event.target)) {
            this.toggleMobileMenu(false);
        }
    }

    toggleMobileMenu(show) {
        if (!this.sideMenu || !this.menuToggle) return;
        
        this.sideMenu.classList.toggle('active', show);
        this.menuToggle.classList.toggle('active', show);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = show ? 'hidden' : '';
    }

    updateFooterYear() {
        if (!this.currentYear) return;
        this.currentYear.textContent = new Date().getFullYear();
    }

    async fetchNavLinks() {
        if (!this.navbar || !this.navList) return;

        try {
            const response = await fetch('https://alfieterry.co.uk/easier/nav-links.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const links = await response.json();
            this.populateNav(links);
        } catch (error) {
            console.error('Error loading navigation:', error);
            // Fallback to basic navigation if needed
            this.handleNavError();
        }
    }

    populateNav(links) {
        if (!Array.isArray(links) || !this.navbar || !this.navList) return;

        const createNavLink = (link) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            // Add aria-label for accessibility
            a.setAttribute('aria-label', `Navigate to ${link.text}`);
            return a;
        };

        // Clear existing links
        this.navbar.innerHTML = '';
        this.navList.innerHTML = '';

        // Create document fragment for better performance
        const desktopFrag = document.createDocumentFragment();
        const mobileFrag = document.createDocumentFragment();

        links.forEach(link => {
            // Desktop menu
            desktopFrag.appendChild(createNavLink(link));
            
            // Mobile menu
            const li = document.createElement('li');
            li.appendChild(createNavLink(link));
            mobileFrag.appendChild(li);
        });

        this.navbar.appendChild(desktopFrag);
        this.navList.appendChild(mobileFrag);
    }

    handleNavError() {
        // Implement fallback navigation if needed
        const fallbackLinks = [
            { url: '/', text: 'Home' },
            { url: '/about', text: 'About' },
            { url: '/contact', text: 'Contact' }
        ];
        this.populateNav(fallbackLinks);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WebsiteUI();
});
