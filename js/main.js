document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Language Selector
    const languageButtons = document.querySelectorAll('.language-selector button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically implement language switching logic
            const language = this.textContent.trim();
            console.log(`Switching to ${language}`);
            
            // For a real implementation, you would redirect to language-specific pages
            // or use a translation library
        });
    });
    
    // Location Selector
    const locationButtons = document.querySelectorAll('.location-selector button');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            console.log(`Switching to ${location} location`);
            
            // Update content based on selected location
            // This would typically involve showing/hiding region-specific content
            // or redirecting to location-specific pages
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});