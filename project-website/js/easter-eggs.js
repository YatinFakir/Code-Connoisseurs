// Easter eggs and hidden features

document.addEventListener('DOMContentLoaded', function() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        
        // Keep only the last 10 keys
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        // Check if sequence matches
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateKonamiEgg();
            konamiCode = []; // Reset
        }
    });
    
    function activateKonamiEgg() {
        // Create floating elements
        for (let i = 0; i < 30; i++) {
            createFloatingElement();
        }
        
        // Change background color
        document.body.style.background = 'linear-gradient(135deg, #ff00cc 0%, #333399 100%)';
        
        // Add disco effect
        const elements = document.querySelectorAll('.section, .navbar, .footer');
        elements.forEach(el => {
            el.style.animation = 'colorShift 2s linear infinite';
        });
        
        // Show message
        const message = document.createElement('div');
        message.textContent = '🎉 You found the Konami Code! 🎉';
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.background = 'rgba(0, 0, 0, 0.8)';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '5px';
        message.style.zIndex = '10000';
        message.style.fontWeight = 'bold';
        document.body.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            document.body.removeChild(message);
        }, 5000);
    }
    
    function createFloatingElement() {
        const element = document.createElement('div');
        element.innerHTML = '✨';
        element.style.position = 'fixed';
        element.style.fontSize = '24px';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = '-50px';
        element.style.zIndex = '1000';
        element.style.pointerEvents = 'none';
        element.style.animation = `float ${3 + Math.random() * 5}s linear forwards`;
        document.body.appendChild(element);
        
        // Remove after animation
        setTimeout(() => {
            document.body.removeChild(element);
        }, 8000);
    }
    
    // Hidden feature: Click on team logo 5 times
    let clickCount = 0;
    let lastClickTime = 0;
    
    document.querySelectorAll('.nav-logo, .footer-logo').forEach(logo => {
        logo.addEventListener('click', (e) => {
            const currentTime = new Date().getTime();
            
            // Reset if too much time between clicks
            if (currentTime - lastClickTime > 1000) {
                clickCount = 0;
            }
            
            clickCount++;
            lastClickTime = currentTime;
            
            if (clickCount >= 5) {
                activateLogoEasterEgg();
                clickCount = 0;
            }
        });
    });
    
    function activateLogoEasterEgg() {
        // Make all tech icons dance
        const techIcons = document.querySelectorAll('.tech-icon img');
        techIcons.forEach(icon => {
            icon.style.animation = 'float 1s ease-in-out infinite';
        });
        
        // Show hidden message
        const message = document.createElement('div');
        message.textContent = 'Tech icons are dancing! 💃';
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.background = 'rgba(108, 99, 255, 0.9)';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '5px';
        message.style.zIndex = '10000';
        message.style.fontWeight = 'bold';
        document.body.appendChild(message);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            document.body.removeChild(message);
            
            // Stop dancing
            techIcons.forEach(icon => {
                icon.style.animation = '';
            });
        }, 3000);
    }
    
    // Easter egg: Secret key combination
    let secretKeys = [];
    document.addEventListener('keydown', (e) => {
        secretKeys.push(e.key.toLowerCase());
        
        // Keep only last 6 keys
        if (secretKeys.length > 6) {
            secretKeys.shift();
        }
        
        // Check for "secret" sequence
        if (secretKeys.join('') === 'secret') {
            activateSecretEgg();
            secretKeys = [];
        }
    });
    
    function activateSecretEgg() {
        // Add sparkle effect to all section titles
        const titles = document.querySelectorAll('.section-title');
        titles.forEach(title => {
            title.classList.add('gradient-text');
        });
        
        // Show notification
        const notification = document.createElement('div');
        notification.innerHTML = '🌈 Secret mode activated!';
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.transform = 'translate(-50%, -50%)';
        notification.style.background = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = 'white';
        notification.style.padding = '20px 40px';
        notification.style.borderRadius = '10px';
        notification.style.zIndex = '10000';
        notification.style.fontSize = '24px';
        notification.style.fontWeight = 'bold';
        notification.style.backdropFilter = 'blur(10px)';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }
    
    // Hidden feature: Click on copyright text
    const copyright = document.querySelector('.footer-copyright');
    if (copyright) {
        copyright.addEventListener('click', () => {
            // Create a fun fact popup
            const popup = document.createElement('div');
            popup.innerHTML = `
                <div style="background: rgba(26, 26, 46, 0.95); padding: 20px; border-radius: 10px; max-width: 300px; text-align: center; border: 1px solid #6c63ff; backdrop-filter: blur(10px);">
                    <h3 style="margin-bottom: 10px; color: #6c63ff;">Did You Know?</h3>
                    <p style="margin-bottom: 15px;">This project was developed by 4 computer science students over 12 weeks!</p>
                    <button id="closePopup" style="background: #6c63ff; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer;">Cool!</button>
                </div>
            `;
            
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.zIndex = '10000';
            
            document.body.appendChild(popup);
            
            document.getElementById('closePopup').addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        });
    }
    
    // Mouse trail effect (only when holding Shift)
    let mouseTrailActive = false;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
            mouseTrailActive = true;
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Shift') {
            mouseTrailActive = false;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!mouseTrailActive) return;
        
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '5px';
        trail.style.height = '5px';
        trail.style.background = '#6c63ff';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '1000';
        trail.style.opacity = '0.7';
        document.body.appendChild(trail);
        
        // Fade out and remove
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transition = 'opacity 0.5s ease';
        }, 100);
        
        setTimeout(() => {
            if (trail.parentNode) {
                document.body.removeChild(trail);
            }
        }, 600);
    });
});