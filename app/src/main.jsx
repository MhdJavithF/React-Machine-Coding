import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SearchProvider } from './Context/SearchContext.jsx'
import ErrorBoundary from './Errorboundary/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <SearchProvider>
      <App />
    </SearchProvider>
  </ErrorBoundary>
);