import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
    const siteTitle = 'Inferno Design';
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
}
