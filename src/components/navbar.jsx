import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaHome } from 'react-icons/fa'; // Import the Home icon
import '../styles/Navbar.css';

function Navbar() {
  const navRef = useRef();

  const handleLinkClick = () => {
    const navbar = navRef.current;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Home Icon */}
        <Link className="navbar-brand" to="/">
          <FaHome size={22} />
        </Link>

        {/* Header text */}
        <Link className="navbar-brand" to="/">
            <span className="navbar-text text-white mx-auto">
            Michael and Yaimarys
            </span>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={handleLinkClick}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registry" onClick={handleLinkClick}>
                Registry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rsvp" onClick={handleLinkClick}>
                RSVP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule" onClick={handleLinkClick}>
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo" onClick={handleLinkClick}>
                To-Do
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/travel" onClick={handleLinkClick}>
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wedding-party" onClick={handleLinkClick}>
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
