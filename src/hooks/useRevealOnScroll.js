import { useEffect } from 'react';

export default function useRevealOnScroll() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
        const elements = document.querySelectorAll(selectors);
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    });
}
