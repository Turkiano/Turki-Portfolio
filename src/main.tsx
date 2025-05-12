import  { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ← import this
import './index.css';
import './i18n';                                     // make sure i18n is initialized
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading…</div>}>
      <BrowserRouter>    {/* ← wrap here */}
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
