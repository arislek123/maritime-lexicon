import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './lib/AuthContext';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;

const Main = () => (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/maritime-lexicon">
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <Main />);
} else {
  ReactDOM.createRoot(rootElement).render(<Main />);
}
