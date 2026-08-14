// Carousel functionality
const carousel = document.getElementById('moviesCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel) {
    const getImageWidth = () => {
        const img = carousel.querySelector('img');
        if (!img) return 0;
        const styles = window.getComputedStyle(img);
        const gap = parseInt(styles.gap) || 32;
        return img.offsetWidth + gap;
    };

    prevBtn.addEventListener('click', () => {
        carousel.scrollLeft -= getImageWidth();
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollLeft += getImageWidth();
    });
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Email signup functionality
async function handleEmailSignup(e) {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter a valid email address');
        return;
    }

    try {
        const response = await fetch('/api/signups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Thank you for signing up! Check your email to start watching.');
            emailInput.value = '';
        } else if (response.status === 400) {
            alert(data.message || 'Email already signed up or invalid');
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error signing up. Please try again.');
    }
}

// Attach signup handlers
const heroForm = document.getElementById('heroForm');
const bottomForm = document.getElementById('bottomForm');

if (heroForm) {
    heroForm.addEventListener('submit', handleEmailSignup);
}

if (bottomForm) {
    bottomForm.addEventListener('submit', handleEmailSignup);
}

// Language selector functionality
const languageSelect = document.getElementById('language');
if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        // Add language switching logic here if needed
        console.log('Language changed to:', lang);
    });
}
