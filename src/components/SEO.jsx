import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage,
    article,
    noindex = false,
    structuredData,
}) {
    const siteTitle = 'Inferno Design';
    const siteUrl = 'https://inferno-design.com';
    const defaultImage = `${siteUrl}/og-image.jpg`;
    const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Web Tasarım Ajansı İstanbul`;
    const finalCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
    const finalImage = ogImage || defaultImage;

    return (
        <Helmet>
            {/* Primary Meta */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content="Inferno Design" />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
            {finalCanonical && <link rel="canonical" href={finalCanonical} />}

            {/* Geo & Language */}
            <meta name="geo.region" content="TR-34" />
            <meta name="geo.placename" content="İstanbul" />
            <meta name="language" content="Turkish" />
            <meta httpEquiv="content-language" content="tr" />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="tr_TR" />
            {finalCanonical && <meta property="og:url" content={finalCanonical} />}

            {/* Article-specific OG tags */}
            {article && <meta property="article:published_time" content={article.publishedTime} />}
            {article && <meta property="article:author" content={article.author || 'Inferno Design'} />}
            {article && article.tags && article.tags.map(tag => (
                <meta property="article:tag" content={tag} key={tag} />
            ))}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@infernodesign" />
            <meta name="twitter:creator" content="@infernodesign" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={finalImage} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}
