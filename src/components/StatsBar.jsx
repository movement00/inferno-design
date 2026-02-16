import useCountUp from '../hooks/useCountUp';

const stats = [
    { value: 127, suffix: '+', label: 'Tamamlanan Proje' },
    { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
    { value: 3, suffix: 'x', label: 'Ortalama ROI Artışı' },
    { value: 48, suffix: 'sa', label: 'Ortalama Teslim Süresi' },
];

function StatItem({ value, suffix, label }) {
    const [count, ref] = useCountUp(value, 2000);
    return (
        <div className="stat-item reveal" ref={ref}>
            <div className="stat-number">{count}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

export default function StatsBar() {
    return (
        <div className="container">
            <div className="stats-grid">
                {stats.map((stat) => (
                    <StatItem key={stat.label} {...stat} />
                ))}
            </div>
        </div>
    );
}
