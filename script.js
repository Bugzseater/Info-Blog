// script.js

// GSAP Animation
window.onload = () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate the navbar
    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });

    // Animate landing section
    gsap.from(".landing-container", { duration: 1, y: 50, opacity: 0, ease: "power2.out", stagger: 0.2 });

    // Animate About Us section when it comes into view
    gsap.from(".about-container", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });



    // Animate footer when it comes into view
    gsap.from(".footer-content", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".footer-bottom", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
};
