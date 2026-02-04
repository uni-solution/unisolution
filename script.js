// Call Now Popup
function showCallPopup() {
    const popup = document.getElementById('callPopup');
    popup.classList.add('show');
}

function hideCallPopup() {
    const popup = document.getElementById('callPopup');
    popup.classList.remove('show');
}

// Show popup on page load
window.addEventListener('load', () => {
    showCallPopup();
});

// Close popup on button click
document.getElementById('closePopup').addEventListener('click', hideCallPopup);

// Close popup when clicking outside the content
document.getElementById('callPopup').addEventListener('click', (e) => {
    if (e.target.id === 'callPopup') {
        hideCallPopup();
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Contact form submission
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    // Create a message for the phone call
    const phoneMessage = `Hello, I'm ${name}. I'm interested in ${service} services. Phone: ${phone}. ${message ? 'Additional info: ' + message : ''}`;

    // Show success message
    alert('Thank you for your interest! We will contact you shortly. You can also call us directly at +1(888) 327-1017');

    // Reset form
    this.reset();

    // Optionally, you can make a phone call directly
    window.open(`tel:+18883271017`);
});

// Intersection Observer for animations
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

// Add animation styles to elements
document.querySelectorAll('.service-card, .provider-card, .plan-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(102, 126, 234, 0.95)';
//         header.style.backdropFilter = 'blur(10px)';
//     } else {
//         header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
//         header.style.backdropFilter = 'none';
//     }
// });

// Add click tracking for phone numbers
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track phone call clicks (you can integrate with analytics here)
        console.log('Phone number clicked:', link.href);
    });
});

// Add hover effects for service cards
document.querySelectorAll('.service-card, .provider-card, .plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Load more providers functionality (if needed)
function loadMoreProviders() {
    // This function can be used to load more providers dynamically
    console.log('Loading more providers...');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML =
        `&copy; ${currentYear} Universal Solution. All rights reserved. | Certified JNA Dealer`;

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});