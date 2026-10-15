// Main JavaScript for interactive features and animations

document.addEventListener('DOMContentLoaded', function() {
    // NEW: Initialize scroll animations
    initScrollAnimations();
    
    // NEW: Initialize team member contact functionality
    initTeamContacts();
    
    // Splash screen handling
    const splashScreen = document.getElementById('splash');
    
    // Auto-hide splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        
        // Auto scroll to home section after splash
        setTimeout(() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }, 3000);

    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // For staggered animations
                if (entry.target.classList.contains('tech-grid') || 
                    entry.target.classList.contains('team-members') ||
                    entry.target.classList.contains('project-features')) {
                    
                    const items = entry.target.querySelectorAll('.tech-item, .member-card, .feature-card');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.tech-item, .member-card, .feature-card, .tech-grid, .team-members, .project-features').forEach(el => {
        observer.observe(el);
    });

    // Button interactions
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const viewDemoBtn = document.getElementById('viewDemoBtn');
    
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
    });
    
    viewDemoBtn.addEventListener('click', () => {
        // Open YouTube video in a new tab
        window.open('https://www.youtube.com/watch?v=9pqQpdAjGls', '_blank');
    });

    // Parallax effect for background video
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.background-video');
        if (parallax) {
            const rate = scrolled * -0.5;
            parallax.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        }
    });

    // Interactive tech icons
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('animate')) return;
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Color inversion effect on cards
    const cards = document.querySelectorAll('.member-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.filter = 'invert(0.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.filter = 'invert(0)';
        });
    });

    // Dynamic background color shift based on scroll
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const hue = (scrollPercentage * 3.6) % 360;
        
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 100%, 65%)`);
    });

    // Auto-type effect for team name (optional)
    const teamName = document.querySelector('.team-name');
    if (teamName) {
        const originalText = teamName.textContent;
        teamName.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                teamName.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after splash screen
        setTimeout(typeWriter, 3500);
    }
});

// NEW: Scroll-triggered animations function
function initScrollAnimations() {
    // Select all elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.fade-in-element, .slide-in-left, .slide-in-right, .scale-in, ' +
        '.tech-item, .member-card, .feature-card, .project-content, .sponsor-content'
    );
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // For staggered animations in grids
                if (entry.target.classList.contains('tech-grid') || 
                    entry.target.classList.contains('team-members') ||
                    entry.target.classList.contains('project-features')) {
                    
                    const items = entry.target.querySelectorAll('.tech-item, .member-card, .feature-card');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation classes to specific sections for better control
    document.querySelectorAll('.tech-item, .member-card, .feature-card').forEach(el => {
        if (!el.classList.contains('fade-in-element') && 
            !el.classList.contains('slide-in-left') && 
            !el.classList.contains('slide-in-right') && 
            !el.classList.contains('scale-in')) {
            el.classList.add('fade-in-element');
        }
    });
    
    // Add specific animation classes based on position
    const projectMedia = document.querySelector('.project-content .project-media');
    const projectDetails = document.querySelector('.project-content .project-details');
    const sponsorLogo = document.querySelector('.sponsor-content .sponsor-logo');
    const sponsorDetails = document.querySelector('.sponsor-content .sponsor-details');
    
    if (projectMedia) projectMedia.classList.add('slide-in-left');
    if (projectDetails) projectDetails.classList.add('slide-in-right');
    if (sponsorLogo) sponsorLogo.classList.add('scale-in');
    if (sponsorDetails) sponsorDetails.classList.add('slide-in-right');
}

// NEW: Team member contact functionality
function initTeamContacts() {
    // Email icon functionality
    document.querySelectorAll('.email-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            
            // Create a temporary input to copy email to clipboard
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show confirmation message
            showNotification(`Email address ${email} copied to clipboard!`);
        });
    });
    
    // LinkedIn icon functionality
    document.querySelectorAll('.linkedin-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
}

// NEW: Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.background = 'rgba(26, 26, 46, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = '500';
    notification.style.backdropFilter = 'blur(10px)';
    notification.style.border = '1px solid rgba(108, 99, 255, 0.3)';
    notification.style.fontSize = '14px';
    notification.style.textAlign = 'center';
    notification.style.maxWidth = '90%';
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 3000);
}