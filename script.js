// ==========================
// ULTRA-PREMIUM WEDDING WEBSITE
// Modern Interactive JavaScript
// ==========================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 100,
});

// ==========================
// NAVIGATION
// ==========================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================
// COUNTDOWN TIMER
// ==========================
const weddingDate = new Date('2026-02-20T09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; font-size: 2rem; color: var(--primary-gold); font-family: var(--font-elegant);">
                🎉 The Wedding Day Has Arrived! 💍
            </div>
        `;
    }
}

// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================
// ANIMATED FLOWERS
// ==========================
const flowersContainer = document.getElementById('flowersContainer');
const flowerCount = 20;

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';

    // Random properties
    const startX = Math.random() * 100;
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 5;
    const size = 15 + Math.random() * 10;

    flower.style.left = `${startX}%`;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    flowersContainer.appendChild(flower);

    // Remove and recreate after animation
    setTimeout(() => {
        flower.remove();
        createFlower();
    }, (duration + delay) * 1000);
}

// Initialize flowers
for (let i = 0; i < flowerCount; i++) {
    setTimeout(() => createFlower(), i * 300);
}

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================
// PARALLAX EFFECT
// ==========================
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const hero = document.querySelector('.hero-content');

    if (hero) {
        const speed = 0.3;
        hero.style.transform = `translateY(${scrollTop * speed}px)`;
    }

    lastScrollTop = scrollTop;
});

// ==========================
// RSVP FORM
// ==========================
const rsvpForm = document.getElementById('rsvpForm');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(rsvpForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        guests: formData.get('guests'),
        attendance: formData.get('attendance'),
        events: formData.getAll('events'),
        meal: formData.get('meal'),
        message: formData.get('message')
    };

    console.log('RSVP Data:', data);

    // Show success message with animation
    showSuccessMessage();

    // Reset form
    rsvpForm.reset();

    // In production, send data to backend:
    // fetch('/api/rsvp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
});

function showSuccessMessage() {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 249, 240, 0.98);
        backdrop-filter: blur(15px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    const message = document.createElement('div');
    message.style.cssText = `
        text-align: center;
        padding: 60px;
        background: white;
        border: 3px solid #C41E3A;
        border-radius: 25px;
        max-width: 550px;
        animation: scaleIn 0.5s ease;
        box-shadow: 0 20px 80px rgba(196, 30, 58, 0.2);
    `;

    message.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">✓</div>
        <h2 style="font-family: var(--font-elegant); font-size: 2.5rem; 
            background: linear-gradient(135deg, #C41E3A 0%, #FF6B9D 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; margin-bottom: 20px;">
            Thank You!
        </h2>
        <p style="font-size: 1.1rem; color: #3F3F3F; margin-bottom: 15px;">
            Your RSVP has been received successfully.
        </p>
        <p style="font-size: 1rem; color: #007B8A;">
            நன்றி! உங்கள் பதிலுக்கு!
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            margin-top: 30px;
            padding: 14px 45px;
            background: linear-gradient(135deg, #FF9933 0%, #FF6B9D 50%, #C41E3A 100%);
            border: none;
            border-radius: 35px;
            color: white;
            font-weight: 700;
            cursor: pointer;
            font-size: 1.05rem;
            box-shadow: 0 8px 25px rgba(196, 30, 58, 0.3);
        ">Close</button>
    `;

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }, 5000);
}

// ==========================
// GOOGLE MAPS INTEGRATION
// ==========================
const eventLocations = {
    mehendi: {
        name: 'Mehendi Venue',
        address: 'Grand Kalyana Mandapam, Thrissur, Kerala',
        lat: 10.5276,
        lng: 76.2144
    },
    sangeet: {
        name: 'Sangeet Venue',
        address: 'Hotel Taj Gateway, Kochi, Kerala',
        lat: 9.9312,
        lng: 76.2673
    },
    wedding: {
        name: 'Wedding Ceremony',
        address: 'Guruvayur Temple Hall, Kerala',
        lat: 10.5937,
        lng: 76.0407
    },
    reception: {
        name: 'Reception Venue',
        address: 'Le Meridien Convention Center, Coimbatore, Tamil Nadu',
        lat: 11.0168,
        lng: 76.9558
    }
};

function openMap(eventType) {
    const location = eventLocations[eventType];

    if (!location) {
        console.error('Location not found:', eventType);
        return;
    }

    // Use coordinates if available, otherwise search by address
    if (location.lat && location.lng) {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`,
            '_blank'
        );
    } else {
        const searchQuery = encodeURIComponent(location.address);
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${searchQuery}`,
            '_blank'
        );
    }
}

// Make openMap globally available
window.openMap = openMap;

// ==========================
// GALLERY LIGHTBOX (Simple)
// ==========================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // Simple alert for now - can be replaced with proper lightbox
        alert('Gallery lightbox feature! In production, this would open a full-screen image viewer.');
        // You can integrate libraries like Lightbox2, GLightbox, or PhotoSwipe here
    });
});

// ==========================
// CURSOR EFFECT (Optional Premium Feature)
// ==========================
let cursor = null;
let cursorFollower = null;

function initCustomCursor() {
    // Only on desktop
    if (window.innerWidth > 968) {
        cursor = document.createElement('div');
        cursor.style.cssText = `
            width: 10px;
            height: 10px;
            background: var(--primary-gold);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10001;
            transition: all 0.1s ease;
        `;

        cursorFollower = document.createElement('div');
        cursorFollower.style.cssText = `
            width: 40px;
            height: 40px;
            border: 2px solid var(--primary-gold);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transition: all 0.3s ease;
            opacity: 0.6;
        `;

        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorFollower.style.left = (e.clientX - 20) + 'px';
            cursorFollower.style.top = (e.clientY - 20) + 'px';
        });

        // Grow on hover over clickable elements
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.3)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
}

// Initialize custom cursor (optional - uncomment to enable)
// initCustomCursor();

// ==========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.couple-card, .event-card, .story-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ==========================
// PRELOADER (Optional)
// ==========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }
});

// ==========================
// CONSOLE EASTER EGG
// ==========================
const styles = [
    'font-size: 20px',
    'color: #C9A86A',
    'font-weight: bold',
    'text-shadow: 2px 2px 4px rgba(0,0,0,0.5)'
].join(';');

console.log('%c💕 Welcome to Our Wedding Website! 💕', styles);
console.log('%c🎉 Made with love and modern web technology 🎉', 'font-size: 14px; color: #E5B299;');
console.log('%cஎங்கள் திருமண வலைதளத்திற்கு வரவேற்கிறோம்!', 'font-size: 14px; color: #6B1C23;');

// ==========================
// PERFORMANCE MONITORING
// ==========================
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
        }, 0);
    });
}

// ==========================
// UTILITY FUNCTIONS
// ==========================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll-heavy operations
window.addEventListener('scroll', throttle(() => {
    // Optimized scroll operations
}, 100));

// ==========================
// ACCESSIBILITY ENHANCEMENTS
// ==========================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-gold);
    color: var(--black);
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

console.log('Wedding website fully loaded and interactive! 🎊');
