export default function TrustBar() {
    const brands = ['TECHVISTA', 'NOVAPAY', 'MODAVISTA', 'ALTINBAŞ', 'ZENITH'];

    return (
        <div className="container">
            <div className="trust-bar">
                {brands.map((brand) => (
                    <span key={brand}>{brand}</span>
                ))}
            </div>
        </div>
    );
}
