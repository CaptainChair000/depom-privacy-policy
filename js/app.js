/* ═══════════════════════════════════════════════════════════════
   HangarSoft Developer Portal — Shared JavaScript
   ═══════════════════════════════════════════════════════════════ */

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;

    const isOpen = nav.style.display === 'flex';

    if (isOpen) {
        nav.style.display = '';
        nav.style.position = '';
        nav.style.top = '';
        nav.style.left = '';
        nav.style.right = '';
        nav.style.flexDirection = '';
        nav.style.background = '';
        nav.style.padding = '';
        nav.style.boxShadow = '';
        nav.style.gap = '';
        nav.style.backdropFilter = '';
    } else {
        nav.style.display = 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(255,255,255,0.98)';
        nav.style.padding = '1.5rem';
        nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        nav.style.gap = '1rem';
        nav.style.backdropFilter = 'blur(20px)';
    }
}

/**
 * Initialize scroll-triggered fade-in animations
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length === 0) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
}

/**
 * Update active navigation link based on scroll position
 */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        navLinks.forEach(link => link.classList.remove('active'));

        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
                const id = section.getAttribute('id');
                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
}

/**
 * Close mobile menu when clicking outside
 */
function initMobileMenuClose() {
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('.nav-links');
        const btn = document.querySelector('.mobile-menu-btn');
        if (!nav || !btn) return;

        if (!nav.contains(e.target) && !btn.contains(e.target)) {
            nav.style.display = '';
        }
    });
}

/* ─── Initialize on DOM Ready ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initActiveNav();
    initMobileMenuClose();
});
