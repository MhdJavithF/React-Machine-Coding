import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SearchProvider } from './Context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <App />
  </SearchProvider>
);