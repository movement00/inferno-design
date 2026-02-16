import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', color: 'white', textAlign: 'center', background: '#111', minHeight: '100vh' }}>
                    <h1>Bir hata oluştu.</h1>
                    <p>Lütfen sayfayı yenileyin.</p>
                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px', color: '#ff3d3d' }}>
                        {this.state.error && this.state.error.toString()}
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '20px', padding: '10px 20px', background: 'white', color: 'black', border: 'none', cursor: 'pointer' }}
                    >
                        Sayfayı Yenile
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
