import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/pages/Home.jsx';
import Gallery from './components/pages/Gallery.jsx';
import Faq from './components/pages/Faq.jsx';
import Registry from './components/pages/Registry.jsx';
import RSVP from './components/pages/RSVP.jsx';
import Schedule from './components/pages/Schedule.jsx';
import ToDo from './components/pages/Things-to-do.jsx';
import Hotel from './components/pages/Hotel.jsx';
import WeddingParty from './components/pages/Party.jsx';
import PasswordPage from './components/pages/PasswordPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Public page */}
        <Route path="/password" element={<PasswordPage />} />

        {/* Protected Route wrapping each page */}
        <Route path="/" element={<App />}>
          <Route 
            index 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="gallery" 
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="faq" 
            element={
              <ProtectedRoute>
                <Faq />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="registry" 
            element={
              <ProtectedRoute>
                <Registry />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="rsvp" 
            element={
              <ProtectedRoute>
                <RSVP />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="schedule" 
            element={
              <ProtectedRoute>
                <Schedule />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="hotel" 
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="wedding-party" 
            element={
              <ProtectedRoute>
                <WeddingParty />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
