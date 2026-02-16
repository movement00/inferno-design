import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (orb1Ref.current) {
                orb1Ref.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="ambient-glow">
                <div className="orb orb-1" ref={orb1Ref}></div>
                <div className="orb orb-2" ref={orb2Ref}></div>
            </div>
            <div className="particles"></div>
        </>
    );
}
