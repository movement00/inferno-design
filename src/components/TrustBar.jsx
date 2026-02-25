const brands = [
    {
        name: 'TECHVISTA',
        svg: (
            <svg viewBox="0 0 140 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8h18v4H14v16h-4V12H4V8z" />
                <path d="M24 8h16v4H28v4h10v4H28v4h12v4H24V8z" />
                <path d="M58 24h-8V12h-4V8h16v4h-4v12z" />
                <circle cx="72" cy="8" r="3" opacity="0.6" />
                <rect x="70" y="14" width="6" height="14" rx="1" opacity="0.6" />
            </svg>
        ),
    },
    {
        name: 'NOVAPAY',
        svg: (
            <svg viewBox="0 0 140 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8h4l8 12V8h4v20h-4L8 16v12H4V8z" />
                <path d="M28 18c0-6 4.5-11 10.5-11S49 12 49 18s-4.5 11-10.5 11S28 24 28 18zm4 0c0 4 2.9 7 6.5 7s6.5-3 6.5-7-2.9-7-6.5-7S32 14 32 18z" />
                <path d="M52 8h4l4 14 4-14h4l-6 20h-4L52 8z" />
            </svg>
        ),
    },
    {
        name: 'MODAVISTA',
        svg: (
            <svg viewBox="0 0 160 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8h4l6 10 6-10h4v20h-4V15l-6 10-6-10v13H4V8z" />
                <path d="M32 18c0-6 4.5-11 10-11s10 5 10 11-4.5 11-10 11-10-5-10-11zm4 0c0 4 2.7 7 6 7s6-3 6-7-2.7-7-6-7-6 3-6 7z" />
                <path d="M56 8h8c6 0 10 4 10 10s-4 10-10 10h-8V8zm4 4v12h4c3.3 0 6-2.7 6-6s-2.7-6-6-6h-4z" />
            </svg>
        ),
    },
    {
        name: 'ALTINBAS',
        svg: (
            <svg viewBox="0 0 140 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 28L12 8l8 20h-4l-2-5H10l-2 5H4zm8-16l-3 8h6l-3-8z" />
                <path d="M26 8h4v16h10v4H26V8z" />
                <path d="M42 8h18v4H52v16h-4V12h-6V8z" />
                <rect x="62" y="8" width="4" height="20" rx="1" />
                <path d="M70 8h4l8 12V8h4v20h-4L74 16v12h-4V8z" />
            </svg>
        ),
    },
    {
        name: 'ZENITH',
        svg: (
            <svg viewBox="0 0 120 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8h16v4L8 24h12v4H4v-4l12-12H4V8z" />
                <path d="M24 8h14v4H28v4h8v4h-8v4h10v4H24V8z" />
                <path d="M42 8h4l8 12V8h4v20h-4L46 16v12h-4V8z" />
                <rect x="62" y="8" width="4" height="20" rx="1" />
                <path d="M70 8h18v4h-7v16h-4V12h-7V8z" />
            </svg>
        ),
    },
];

export default function TrustBar() {
    return (
        <div className="container">
            <div className="trust-bar">
                {brands.map((brand) => (
                    <div className="trust-brand" key={brand.name} title={brand.name}>
                        {brand.svg}
                    </div>
                ))}
            </div>
        </div>
    );
}
