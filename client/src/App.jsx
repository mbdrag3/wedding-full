// src/App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import usePageAnalytics from './hooks/usePageAnalytics';
import './App.css';

const App = () => {
  const { pathname } = useLocation();
  usePageAnalytics();
  console.log('<App> rendered at', pathname);
  
  return (
    <div className="app-container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh' // Ensure the app takes the full viewport height
    }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: '1 0 auto' }}> {/* This makes main content expand to fill available space */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;