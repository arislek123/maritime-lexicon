import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './lib/AuthContext';
import App from './App';

export function render(url: string, helmetContext: any) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url} basename="/">
          <AuthProvider>
            <App />
          </AuthProvider>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
