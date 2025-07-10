document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '50px'
    };

    let delay = 100;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, delay);
                delay += 100; 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    newsItems.forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slideContainers = document.querySelectorAll('.slide-container');
    
    const observerOptions = {
        threshold: 0.7, 
        delay: 100,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const overlay = entry.target.querySelector('.overlay');
            if (entry.isIntersecting) {
                if (overlay) {
                    overlay.classList.add('visible');
                }
            } else {
                
                if (overlay) {
                    overlay.classList.remove('visible');
                }
            }
        });
    }, observerOptions);

    slideContainers.forEach(container => {
        observer.observe(container);
    });
});
