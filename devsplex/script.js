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

