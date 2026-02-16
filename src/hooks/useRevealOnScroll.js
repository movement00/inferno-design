import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useRevealOnScroll() {
    const { pathname } = useLocation();

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
                    observer.unobserve(entry.target); // Once revealed, stop observing
                }
            });
        }, observerOptions);

        // Small timeout to ensure DOM is ready after route change
        const timeoutId = setTimeout(() => {
            const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
            const elements = document.querySelectorAll(selectors);
            elements.forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [pathname]); // Re-run when path changes
}
