import React, { useState, useEffect } from 'react';
import engagement1 from '../../assets/engagement-1.jpg';
import engagement2 from '../../assets/engagement-2.jpg';
import engagement3 from '../../assets/engagement-3.jpg';
import engagement4 from '../../assets/engagement-4.jpg';
import '../../styles/Home.css'; // Link to the CSS file for styling
import flowerDivider from '../../assets/flower-divider.svg'

const Home = () => {
  const images = [engagement1, engagement2, engagement3, engagement4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, images.length]);

  return (
    <div className='home-page-container'>
      {isMobile ? (
        // Mobile view - Fade transition
        <div className="mobile-image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Engagement ${index + 1}`}
              className={`mobile-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      ) : (
        // Desktop view - Marquee
        <div className="marquee-container">
          <div className="marquee-track">
            {images.map((image, index) => (
              <img
                key={`original-${index}`}
                src={image}
                alt={`Engagement ${index + 1}`}
                className="marquee-image"
              />
            ))}
            {images.map((image, index) => (
              <img
                key={`duplicate-${index}`}
                src={image}
                alt={`Engagement duplicate ${index + 1}`}
                className="marquee-image"
              />
            ))}
          </div>
        </div>
      )}

      {/* Floral divider */}
      <div className="divider-container">
        <img
          src={flowerDivider}
          alt="Cute Floral Page Divider"
          className="flower-divider"
        />
      </div>
      
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome to Our Wedding Website</h2>
        <p>
          We are so excited to share our special day with you! This website is your one-stop destination for all the details about our wedding celebration. 
          From our story and wedding party to venue information and registry details, you'll find everything you need to know right here.
        </p>
        <p>
          Thank you for being a part of our journey. We can't wait to celebrate this beautiful moment with our loved ones!
        </p>
      </div>

    </div>
  );
};

export default Home;
