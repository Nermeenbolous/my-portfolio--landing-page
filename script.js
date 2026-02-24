/**
 * Nermeen Bolous Portfolio Script
 * Handles Theme Persistence and UI Interactions
 */

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. Check for saved theme in localStorage
const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateToggleButton(savedTheme);

// 2. Toggle Theme Event Listener
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply theme to HTML
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Persist choice to localStorage
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Update button icon/text
    updateToggleButton(newTheme);
});

// 3. UI Helper Function
function updateToggleButton(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// 4. Simple Scroll Reveal (Bonus Animation)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
        }
    });
});
