import React from 'react';
import engagement1 from '../../assets/engagement-1.jpg';
import engagement2 from '../../assets/engagement-2.jpg';
import engagement3 from '../../assets/engagement-3.jpg';
import engagement4 from '../../assets/engagement-4.jpg';
import '../../styles/Home.css'; // Link to the CSS file for styling
import flowerDivider from '../../assets/flower-divider.svg'

const Home = () => {
  const images = [engagement1, engagement2, engagement3, engagement4];

  return (
    <div className='home-page-container'>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Map through the images twice to create a seamless loop */}
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
        {/* Floral divider */}
      <div className="divider-container">
        <img
          src={flowerDivider}
          alt="Cute Floral Page Divider"
          className="flower-divider"
        />
  </div>

    </div>
  );
};

export default Home;
