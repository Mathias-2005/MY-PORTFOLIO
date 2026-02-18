import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './routes/Routing.jsx';
import './i18n/index.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
