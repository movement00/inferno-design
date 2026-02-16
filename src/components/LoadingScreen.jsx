import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
            <div className="loading-logo">
                INFERNO<span>.</span>DESIGN
            </div>
            <div className="loading-bar">
                <div className="loading-bar-fill" />
            </div>
        </div>
    );
}
