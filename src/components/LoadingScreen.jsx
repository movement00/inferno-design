import { useState, useEffect } from 'react';

export default function LoadingScreen({ autoHide = true }) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (!autoHide) return;

        const timer = setTimeout(() => {
            setHidden(true);
        }, 2200);

        return () => clearTimeout(timer);
    }, [autoHide]);

    return (
        <div
            className={`loading-screen ${hidden ? 'hidden' : ''}`}
            style={{
                opacity: hidden ? 0 : 1,
                visibility: hidden ? 'hidden' : 'visible',
                pointerEvents: hidden ? 'none' : 'auto'
            }}
        >
            <div className="loading-logo">
                INFERNO<span>.</span>DESIGN
            </div>
            <div className="loading-bar">
                <div className="loading-bar-fill" />
            </div>
        </div>
    );
}
