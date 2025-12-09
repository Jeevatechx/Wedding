// ==========================================
// ULTRA-MODERN WEDDING WEBSITE - JavaScript
// Advanced Animations & Interactions
// ==========================================

// Configuration
const CONFIG = {
    weddingDate: new Date('2026-02-20T09:00:00'),
    particleCount: 30,
    loadingDuration: 2500,
};

// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';

        // Initialize animations after loading
        setTimeout(() => {
            initScrollAnimations();
        }, 500);
    }, CONFIG.loadingDuration);
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

// Only on desktop with hover capability
if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';

        cursorRing.style.left = (e.clientX - 20) + 'px';
        cursorRing.style.top = (e.clientY - 20) + 'px';
    });

    // Expand cursor on clickable elements
    const clickableElements = document.querySelectorAll('a, button, input, textarea, select, .gallery-item-modern');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(2)';
            cursorRing.style.transform = 'scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorRing.style.transform = 'scale(1)';
        });
    });
}

// ==========================================
// FLOATING PARTICLES
// ==========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');

    for (let i = 0; i < CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random properties
        const size = Math.random() * 6 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        particle.style.left = `${startX}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ==========================================
// NAVIGATION
// ==========================================
const modernNav = document.getElementById('modernNav');
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        modernNav.classList.add('scrolled');
    } else {
        modernNav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu on link click
[...mobileLinks, ...navLinks].forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            navBurger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';

            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') &&
        !mobileMenu.contains(e.target) &&
        !navBurger.contains(e.target)) {
        navBurger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('daysCount').textContent = String(days).padStart(3, '0');
        document.getElementById('hoursCount').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutesCount').textContent = String(minutes).padStart(2, '0');
        document.getElementById('secondsCount').textContent = String(seconds).padStart(2, '0');
    } else {
        document.querySelector('.countdown-modern').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; font-family: var(--font-display); font-size: 2rem;">
                🎉 The Wedding Day Has Arrived! 💍
            </div>
        `;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-scroll]');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// RSVP FORM
// ==========================================
const rsvpForm = document.getElementById('rsvpFormModern');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();

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
    showSuccessMessage();
    rsvpForm.reset();

    // In production, send to backend:
    // fetch('/api/rsvp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
});

function showSuccessMessage() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 249, 240, 0.98);
        backdrop-filter: blur(20px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    const message = document.createElement('div');
    message.style.cssText = `
        text-align: center;
        padding: 3rem;
        background: white;
        border: 3px solid #C41E3A;
        border-radius: 30px;
        max-width: 500px;
        width: 90%;
        animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        box-shadow: 0 30px 80px rgba(196, 30, 58, 0.2);
    `;

    message.innerHTML = `
        <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: checkPop 0.6s ease;">✓</div>
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; 
            background: linear-gradient(135deg, #FF6B9D 0%, #C41E3A 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; margin-bottom: 1rem;">
            Thank You!
        </h2>
        <p style="font-size: 1.1rem; color: #333; margin-bottom: 1rem; line-height: 1.6;">
            Your RSVP has been received successfully.<br>
            We can't wait to celebrate with you!
        </p>
        <p style="font-size: 1rem; color: #006B7D; margin-bottom: 2rem;">
            நன்றி! | നന്ദി!
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            padding: 1rem 3rem;
            background: linear-gradient(135deg, #FF6B9D 0%, #C41E3A 100%);
            border: none;
            border-radius: 30px;
            color: white;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            font-size: 1rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            box-shadow: 0 10px 30px rgba(196, 30, 58, 0.3);
            transition: all 0.3s ease;
        " onmouseover="this.style.transform='translateY(-3px)'" 
           onmouseout="this.style.transform='translateY(0)'">
            Close
        </button>
    `;

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    @keyframes checkPop {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
`;
document.head.appendChild(style);

// ==========================================
// GOOGLE MAPS INTEGRATION
// ==========================================
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

window.openMap = openMap;

// ==========================================
// SMOOTH SCROLLING FOR ANCHORS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// PARALLAX EFFECT ON SCROLL
// ==========================================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;

            // Parallax layers
            const layers = document.querySelectorAll('.bg-layer');
            layers.forEach((layer, index) => {
                const speed = (index + 1) * 0.1;
                layer.style.transform = `translateY(${scrolled * speed}px)`;
            });

            ticking = false;
        });
        ticking = true;
    }
});

// ==========================================
// GALLERY INTERACTION
// ==========================================
document.querySelectorAll('.gallery-item-modern').forEach(item => {
    item.addEventListener('click', () => {
        // Simple placeholder alert - replace with lightbox library in production
        const label = item.querySelector('.gallery-label').textContent;
        showGalleryMessage(label);
    });
});

function showGalleryMessage(label) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;

    overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <p style="font-size: 3rem; margin-bottom: 1rem;">📸</p>
            <p style="font-size: 2rem; font-family: 'Playfair Display', serif;">
                ${label}
            </p>
            <p style="margin-top: 2rem; opacity: 0.7;">Click anywhere to close</p>
        </div>
    `;

    overlay.addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    });

    document.body.appendChild(overlay);
}

// ==========================================
// ACCESSIBILITY - Escape key support
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        navBurger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Close any overlays
        document.querySelectorAll('[style*="z-index: 10000"]').forEach(el => {
            el.remove();
        });
    }
});

// ==========================================
// CONSOLE EASTER EGG
// ==========================================
console.log(
    '%c💕 Welcome to Our Wedding Website! 💕',
    'font-size: 20px; font-weight: bold; color: #C41E3A; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);
console.log(
    '%c🎉 Made with love and modern web technology 🎉',
    'font-size: 14px; color: #D4A574;'
);
console.log(
    '%c#JeevaWedsMalathi2026',
    'font-size: 16px; font-weight: bold; background: linear-gradient(135deg, #FF6B9D, #C41E3A); color: white; padding: 5px 10px; border-radius: 5px;'
);

// ==========================================
// READY MESSAGE
// ==========================================
console.log('%cWebsite fully loaded and interactive! 🎊', 'font-size: 12px; color: #006B7D;');
