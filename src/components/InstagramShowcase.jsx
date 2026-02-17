
import React from 'react';

const instagramPosts = [
    {
        id: 1,
        type: 'video',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
        likes: '1.2K',
        comments: '45',
        caption: 'Minimalist tasarımın gücü. #webdesign #uiux',
        link: 'https://instagram.com'
    },
    {
        id: 2,
        type: 'image',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
        likes: '856',
        comments: '23',
        caption: 'Marka kimliği çalışmamızdan detaylar. #branding',
        link: 'https://instagram.com'
    },
    {
        id: 3,
        type: 'image',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
        likes: '2.1K',
        comments: '112',
        caption: 'Geleceğin arayüzleri. #futuristic #design',
        link: 'https://instagram.com'
    },
    {
        id: 4,
        type: 'video',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
        likes: '1.5K',
        comments: '67',
        caption: 'Siber güvenlik ve tasarım. #cyberpunk',
        link: 'https://instagram.com'
    }
];

export default function InstagramShowcase() {
    return (
        <section className="insta-section">
            <div className="container">
                <div className="insta-header reveal">
                    <div className="insta-icon-wrapper">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.878 4.234 21.222 4.79 21.476 5.45C21.724 6.088 21.89 6.813 21.94 7.878C22.01 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.723 17.912 21.475 18.55C21.221 19.21 20.877 19.766 20.321 20.322C19.765 20.878 19.209 21.222 18.549 21.476C17.911 21.724 17.186 21.89 16.121 21.94C15.055 22.01 14.716 22 11.999 22C9.282 22 8.943 21.99 7.877 21.94C6.812 21.89 6.087 21.723 5.449 21.475C4.789 21.221 4.233 20.877 3.677 20.321C3.121 19.765 2.777 19.209 2.523 18.549C2.275 17.911 2.109 17.186 2.059 16.121C1.989 15.055 2 14.716 2 11.999C2 9.282 2.01 8.943 2.06 7.877C2.11 6.812 2.277 6.087 2.525 5.449C2.779 4.789 3.123 4.233 3.678 3.677C4.234 3.121 4.79 2.777 5.45 2.523C6.088 2.275 6.813 2.109 7.878 2.059C8.944 1.989 9.283 2 12 2ZM12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7ZM17.25 5.5C17.25 6.328 17.922 7 18.75 7C19.578 7 20.25 6.328 20.25 5.5C20.25 4.672 19.578 4 18.75 4C17.922 4 17.25 4.672 17.25 5.5ZM12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div>
                        <span className="insta-subtitle">TAKİPTE KALIN</span>
                        <h3>@INFERNODESIGN</h3>
                    </div>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta-button secondary insta-btn">
                        PROFİLE GİT
                    </a>
                </div>

                <div className="insta-grid">
                    {instagramPosts.map((post, i) => (
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="insta-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={post.id}>
                            <div className="insta-image-wrapper">
                                <img src={post.image} alt="Instagram Post" />
                                <div className="insta-overlay">
                                    <div className="insta-stats">
                                        <span>♥ {post.likes}</span>
                                        <span>💬 {post.comments}</span>
                                    </div>
                                    <p className="insta-caption">{post.caption}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
