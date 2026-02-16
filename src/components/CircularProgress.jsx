import { useState, useEffect, useRef } from 'react';

export default function CircularProgress({ value, label, description }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className={`circular-stat ${inView ? 'in-view' : ''}`} ref={ref}>
            <svg viewBox="0 0 120 120">
                <circle className="track" cx="60" cy="60" r="50" />
                <circle
                    className="fill"
                    cx="60" cy="60" r="50"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: inView ? offset : circumference,
                    }}
                />
            </svg>
            <div className="circle-label">{label}</div>
            <div className="circle-desc">{description}</div>
        </div>
    );
}
