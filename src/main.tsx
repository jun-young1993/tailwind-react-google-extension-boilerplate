import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import Popup from './pages/Popup';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Popup />
  </StrictMode>
);
