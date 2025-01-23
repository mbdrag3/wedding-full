import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Faq from './components/pages/Faq';
import Registry from './components/pages/Registry';
import RSVP from './components/pages/RSVP';
import Schedule from './components/pages/Schedule';
import ToDo from './components/pages/Things-to-do';
import Travel from './components/pages/Travel';
import WeddingParty from './components/pages/Party';
import PasswordPage from './components/pages/PasswordPage';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './components/pages/ErrorPage.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 1) Public route for entering the password */}
        <Route path="/password" element={<PasswordPage />} />

        {/* 2) Protected routes: user must be "authenticated" (auth flag in localStorage) */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        ></Route>
        {/* App serves as the layout */}
        <Route path="/" element={<App />}>
          {/* Child routes */}
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="registry" element={<Registry />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="travel" element={<Travel />} />
          <Route path="wedding-party" element={<WeddingParty />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
