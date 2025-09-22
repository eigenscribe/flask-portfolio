// Dark mode functionality
class ThemeManager {
    constructor() {
        this.isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default to dark mode
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupToggleButton();
    }

    applyTheme() {
        if (this.isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        
        // Update toggle button icon
        this.updateToggleButton();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyTheme();
    }

    setupToggleButton() {
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }

    updateToggleButton() {
        const toggleButton = document.getElementById('dark-mode-toggle');
        const sunIcon = toggleButton?.querySelector('.sun-icon');
        const moonIcon = toggleButton?.querySelector('.moon-icon');
        
        if (sunIcon && moonIcon) {
            if (this.isDarkMode) {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    }
}

// Enhanced glass card interactions
function setupGlassCardInteractions() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth scrolling for internal links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for scroll animations
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Badge hover effects
function setupBadgeInteractions() {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Portfolio button interactions
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.portfolio-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme manager
    const themeManager = new ThemeManager();
    
    // Setup all interactive features
    setupGlassCardInteractions();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupBadgeInteractions();
    setupButtonInteractions();
    
    // Add a subtle parallax effect to the background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.body;
        const speed = scrolled * 0.5;
        parallax.style.backgroundPositionY = speed + 'px';
    });
    
    console.log('🚀 Portfolio loaded successfully!');
});

// Utility function for opening external links
function openExternalLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Toggle dark mode with Ctrl/Cmd + D
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const themeManager = window.themeManager || new ThemeManager();
        themeManager.toggleTheme();
    }
});