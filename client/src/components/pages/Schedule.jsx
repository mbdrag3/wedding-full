import "../../styles/Schedule.css";
import churchIMG from "../../assets/church.jpg";
import biltmoreIMG from "../../assets/biltmore.jpg";
import casinoIMG from "../../assets/optimized-more-photos/7246-75.JPEG";

const Schedule = () => {
    return (
        <div className="schedule-container">
            <div className="bg-wrapper-1">
                {/* Church Ceremony Section */}
                <div className="full-width">
                    <div className="content-container">
                        <div className="event-row">
                            <div className="event-content content-aside-1">
                                <h2>4:00 PM - 5:00 PM</h2>
                                <h3>Church Ceremony</h3>
                                <p>Watch them tie the knot!</p>
                            </div>
                            <div className="event-image">
                                <img src={churchIMG} alt="Church" className="fixed-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cocktail Reception Section with separate background wrapper */}
            <div className="bg-wrapper">
                <div className="full-width">
                    <div className="content-container">
                        <div className="event-row">
                            <div className="event-image">
                                <img src={biltmoreIMG} alt="Biltmore Hotel" className="fixed-img" />
                            </div>
                            <div className="event-content content-aside-2">
                                <h2>5:00 PM - 11:00 PM</h2>
                                <h3>Cocktail Hour + Reception</h3>
                                <p>Party time!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goodbye Section */}
            <div className="bg-wrapper-1">
                <div className="full-width">
                    <div className="content-container">
                        <div className="event-row">
                            <div className="event-content content-aside-1">
                                <h2>11:01 PM</h2>
                                <h3>Get Home Safely!!</h3>
                                <p>Thanks for coming. Get home safely! Thank you for sharing our special day. We love our friends and family.</p>
                            </div>
                            <div className="event-image">
                                <img src={casinoIMG} alt="Car Driving Away" className="fixed-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;