import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../i18n.js';
import { I18nextProvider } from 'react-i18next';
import i18next from '../i18n.js';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </I18nextProvider>
  </StrictMode>,
)
