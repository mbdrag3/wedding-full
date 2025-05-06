import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjust path as needed

function Navbar() {
  const [daysLeft, setDaysLeft] = useState(0);
  const navbarCollapseRef = useRef(null);
  
  useEffect(() => {
    const weddingDate = new Date("2025-07-12T00:00:00"); // Wedding date (July 12, 2025)
    
    const updateCountdown = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Remove time to compare only dates
      
      const timeDiff = weddingDate - today;
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days
      setDaysLeft(daysRemaining);
    };
    
    updateCountdown(); // Initial update
    
    // Check every midnight and update the countdown
    const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to close the hamburger menu
  const closeMenu = () => {
    // Use data-bs-toggle attribute instead of JS bootstrap instance
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click();
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid d-flex flex-row justify-content-between align-items-center w-100 flex-lg-column align-items-lg-center">
        
        {/* Title, Date, Countdown in One Container */}
        <div className="navbar-info">
          <Link
            className="navbar-brand"
            to="/"
            onClick={closeMenu}
          >
            <span className="navbar-text-custom">
              Michael and Yaimarys
            </span>
          </Link>
          
          <div className="navbar-date">
            July 12th, 2025
          </div>
          
          <div className="navbar-countdown">
            {daysLeft} days away
          </div>
        </div>
        
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler order-1 order-lg-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Collapsible Nav Links */}
        <div 
          className="collapse navbar-collapse order-3 justify-content-center"
          id="navbarNav"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={closeMenu}>
                FAQ'S
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registry" onClick={closeMenu}>
                Registry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rsvp" onClick={closeMenu}>
                RSVP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule" onClick={closeMenu}>
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotel" onClick={closeMenu}>
                Hotel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wedding-party" onClick={closeMenu}>
                Wedding Party
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;