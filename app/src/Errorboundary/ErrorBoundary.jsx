import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Errorboundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>
                <h2>Oops!</h2>
                <button onClick={() => window.location.reload()}>Reload</button>
            </div>

        }
        return this.props.children;
    }
}

export default ErrorBoundary;