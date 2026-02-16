import { useState, useEffect, useRef } from 'react';

const words = [
    'Sessizce Ölmesin.',
    'Rakipleri Kıskandırsın.',
    'Müşteri Çeksin.',
    'Akıllarda Kalsın.',
];

export default function TypewriterText() {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const speed = isDeleting ? 40 : 80;

        timerRef.current = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, speed);

        return () => clearTimeout(timerRef.current);
    }, [text, wordIndex, isDeleting]);

    return (
        <span className="typewriter-wrapper">
            {text}
            <span className="typewriter-cursor" />
        </span>
    );
}
