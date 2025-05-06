import React from "react";
import "../../styles/Party.css";
import jackIMG from "../../assets/DSC_5570.jpg";
import ryanIMG from "../../assets/DSC_6659.jpg";
import valeriaIMG from "../../assets/valeria-1.png";
import ellaIMG from "../../assets/ella-1.png";
import priscillaIMG from "../../assets/priscilla-1.jpg";
import jessica1IMG from "../../assets/jessica-a.jpg";
import jessica2IMG from "../../assets/jessica-r.jpg";
import karlaIMG from "../../assets/karla.png";
import oliverIMG from "../../assets/oliver.png";
import codiIMG from "../../assets/codi-1.jpeg";
import noahIMG from "../../assets/noah.jpg";
import alyssaIMG from "../../assets/alyssa-new-2.jpg";
import aaronIMG from "../../assets/aaron.jpg";
import brittnieIMG from "../../assets/optimized-britt&raysa/brittnie.JPEG";
import raysaIMG from "../../assets/optimized-britt&raysa/raysa.JPEG";
import alecIMG from "../../assets/groomsmen/alec.JPG";
import henryIMG from "../../assets/groomsmen/henry.png"
import dylanIMG from "../../assets/groomsmen/dylan.JPG"
import flowerDivider from '../../assets/flower-divider.svg';

const WeddingParty = () => {
  const groomsSide = [
    {
      role: "Best man",
      img: jackIMG,
      name: "Jack Drag",
      description:
      {
        intro: "My 1st brother and my snowboarding buddy. Keep grinding at CU. I'm a proud big brother."
      }
    },
    {
      role: "Best man",
      img: ryanIMG,
      name: "Ryan Drag",
      description:
      {
        intro: "My youngest brother and the best baseball player in the family. Proud of you. Keep working hard!"
      }
    },
    {
      role: "Groomsman",
      img: dylanIMG,
      name: "Dylan Arnett",
      description:
      {
        intro: "My favorite golf buddy. Guaranteed breakfast ball on 1 at Oaks."
      }
    },
    {
      role: "Groomsman",
      img: henryIMG,
      name: "Henry Colombi",
      description:
      {
        intro: "Most likely to be watching a bet unfold at our wedding. O/U on the first kiss?"
      }
    },{
      role: "Groomsman",
      img: alecIMG,
      name: "Alec French",
      description:
      {
        intro: "Most athletic PO of all time.. Needs some golfing lessons."
      }
    },
    {
      role: "Junior Groomsman",
      img: aaronIMG,
      name: "Aaron Fernandez",
      description:
      {
        intro: "My favorite switch buddy.. Saving the day one Goomba at a time!"
      }
    },
    {
      role: "Junior Groomsman",
      img: noahIMG,
      name: "Noah Lane",
      description:
      {
        intro: "My favorite cousin. Never seen a bird or flag that he doesn't know."
      }
    },
    {
      role: "Best Dog",
      img: oliverIMG,
      name: "Oliver Drag",
      description:
      {
        intro: "The best Craigslist purchase of all time. Our best friend."
      }
    }
  ];

  const bridesSide = [
    {
      role: "Maid of Honor",
      img: priscillaIMG,
      name: "Priscilla Gonzalez",
      description:
      {
        intro: "Met in 9th grade and never looked back. 💞"
      }
    },
    {
      role: "Maid of Honor",
      img: karlaIMG,
      name: "Karla Gil",
      description:
      {
        intro: "My partner in crime since 2011. 👯‍♀️"
      }
    },
    {
      role: "Bridesmaid",
      img: jessica2IMG,
      name: "Jessica Reyes",
      description:
      {
        intro: "The little sister I always wanted. 🤸‍♀️",
        
      }
    },
    { role: "Bridesmaid", 
      img: jessica1IMG, 
      name: "Jessica Arduengo", 
      description: 
      { 
        intro: "Sweet, sassy, and always late (but worth the wait).", 
         
      } 
    },
    { 
      role: "Bridesmaid", 
      img: codiIMG, 
      name: "Codi Scogin",
      description: 
      { 
        intro: "Bonus sister and travel buddy. ✈️", 
         
      } 
    },
    { 
      role: "Bridesmaid", 
      img: raysaIMG, 
      name: "Raysa Lizardo",
      description: 
      { 
        intro: "My bestie for the restie.", 
         
      } 
    },
    { 
      role: "Bridesmaid", 
      img: brittnieIMG, 
      name: "Brittnie Roberts",
      description: 
      { 
        intro: "The sunshine of our friendship group. ☀️", 
         
      } 
    },
    { role: "Junior Bridesmaid", 
      img: valeriaIMG, 
      name: "Valeria Alfonso", 
      description: 
      { 
        intro: "My first mini-me and bestfriend. 🌮", 
         
      } 
    }
  ];

  const flowerGirls = [
    { 
      role: "Flower Girl", 
      img: alyssaIMG, 
      name: "Alyssa Fernandez", 
      description:
      {
        intro: "Our little princess, sassy queen, and mustachio."
      }
    },
    { 
      role: "Flower Girl", 
      img: ellaIMG, 
      name: "Ella Alfonso", 
      description:
      {
        intro: "The families' biggest blessing. Never a dull moment with Ella Bella aka Chupy."
      }
    }
  ];

  return (
    <div className="wedding-party-div">
      <h1 className="title">Wedding Party</h1>

      <div className="wedding-party-container">
        <div className="groom-side">
          <h2>Groom's Side</h2>
          {groomsSide.map((person, index) => (
            <div key={index} className="person">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={person.img} alt={person.name} className="wedding-party-img" />
                  </div>
                  <div className="flip-card-back">
                    <div className="flip-card-back-img">
                      <img src={person.img} alt={person.name} className="wedding-party-img" />
                    </div>
                    <div className="flip-card-description">
                    <p>
                        {person.description.intro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h5>{person.role}</h5>
              <h3>{person.name}</h3>
            </div>
          ))}
        </div>

        <div className="bride-side">
          <h2>Bride's Side</h2>
          {bridesSide.map((person, index) => (
            <div key={index} className="person">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={person.img} alt={person.name} className="wedding-party-img" />
                  </div>
                  <div className="flip-card-back">
                    <div className="flip-card-back-img">
                      <img src={person.img} alt={person.name} className="wedding-party-img" />
                    </div>
                    <div className="flip-card-description">
                      <p>
                        {person.description.intro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h5>{person.role}</h5>
              <h3>{person.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Flower divider */}
      
      <div style={{ textAlign: "center" }}>
        <img src={flowerDivider} alt="Cute Floral Page Divider" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Flower Girls Section */}
      <div className="flower-girls-div">
        <h1 className="title">Flower Girls</h1>
        <div className="flower-girls-container">
          {flowerGirls.map((girl, index) => (
            <div key={index} className="person">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front side (image) */}
                  <div className="flip-card-front">
                    <img
                      src={girl.img}
                      alt={girl.name}
                      className="wedding-party-img"
                    />
                  </div>
                  {/* Back side (description inside image) */}
                  <div className="flip-card-back">
                    <div className="flip-card-back-img">
                      <img
                        src={girl.img}
                        alt={girl.name}
                        className="wedding-party-img"
                      />
                    </div>
                    <div className="flip-card-description">
                    <p>
                        {girl.description.intro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static name and role */}
              <h5>{girl.role}</h5>
              <h3>{girl.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Flower divider */}

      <div style={{ textAlign: "center" }}>
        <img src={flowerDivider} alt="Cute Floral Page Divider" style={{ width: "100%", height: "auto" }} />
      </div>

    </div>
  );
};

export default WeddingParty;
