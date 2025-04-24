// Theme Switcher
const themeSwitcher = document.querySelector('.theme-switcher');
const themeStyle = document.getElementById('theme-style');

// Check for saved theme preference or use preferred color scheme
const currentTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the current theme
if (currentTheme === 'dark') {
    themeStyle.setAttribute('href', 'css/dark-theme.css');
    themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeStyle.setAttribute('href', '');
    themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
}

// Theme switch event
themeSwitcher.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === 'css/dark-theme.css') {
        themeStyle.setAttribute('href', '');
        localStorage.setItem('theme', 'light');
        themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeStyle.setAttribute('href', 'css/dark-theme.css');
        localStorage.setItem('theme', 'dark');
        themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
    }
});