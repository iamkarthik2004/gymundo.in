import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css'; // Load unified Gymundo CSS rules & third-party styles
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
