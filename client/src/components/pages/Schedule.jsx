import "../../styles/Schedule.css";
import churchIMG from "../../assets/church.jpg";
import biltmoreIMG from "../../assets/biltmore.jpg";
import carIMG from "../../assets/car-driving-away.jpg";

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
                                <p>Watch them tie the knot</p>
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
                                <h2>6:00 PM - 11:00 PM</h2>
                                <h3>Cocktail Hour + Reception</h3>
                                <p>Party time</p>
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
                                <p>Thanks for coming. Go home.</p>
                            </div>
                            <div className="event-image">
                                <img src={carIMG} alt="Car Driving Away" className="fixed-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;