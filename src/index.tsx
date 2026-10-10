import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';

import './i18n';
import App from '@/App';
import './index.module.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
