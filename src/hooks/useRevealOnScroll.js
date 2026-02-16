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
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

        // Function to find and observe elements
        const observeElements = () => {
            const elements = document.querySelectorAll(selectors);
            if (elements.length > 0) {
                elements.forEach((el) => observer.observe(el));
                return true; // Elements found
            }
            return false; // No elements found yet
        };

        // Attempt to observe immediately
        observeElements();

        // Retry a few times in case of delayed rendering (e.g. lazy load chunks)
        const timeouts = [];
        [100, 300, 500, 1000].forEach(delay => {
            timeouts.push(setTimeout(observeElements, delay));
        });

        // Cleanup
        return () => {
            timeouts.forEach(clearTimeout);
            observer.disconnect();
        };
    }, [pathname]);
}
