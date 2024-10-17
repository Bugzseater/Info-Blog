// GSAP Animation for Blog Cards
gsap.from('.blog-card', {
    duration: 0.5,
    opacity: 0,
    y: 30,
    stagger: 0.1, // stagger the animations for each card
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.trending-grid',
        start: 'top 80%', // Start the animation when the section is in view
    }
});

// GSAP Hover Effect
const cards = document.querySelectorAll('.blog-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});
