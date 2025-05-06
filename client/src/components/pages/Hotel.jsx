import '../../styles/Hotel.css';
import hotelImg from '../../assets/biltmore-hotel-2.jpg';
import { useState } from 'react'; // Importing useState hook
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

const Hotel = () => {
  // Function to copy the group code to the clipboard
  const copyGroupCode = () => {
    const groupCode = "11633";  // This is the text you want to copy to the clipboard
    navigator.clipboard.writeText(groupCode).then(() => {
      toast.success("Group Code copied to clipboard!"); // Show success toast
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy group code."); // Show error toast
    });
  };

  return (
    <div className='hotel-div-container'>
      <div className="hotel-info-container">
        <div className="hotel-image">
          <img src={hotelImg} className='hotel-biltmore-img' alt="Biltmore Hotel" />
        </div>
        <div className="hotel-details">
          <h2>Hotel Information</h2>
          <p>We have reserved a room block at The Biltmore Hotel Miami Coral Gables. Please click the button below to secure your room.</p>
          <div className='buttons-container'>
            <button className="button-17" role="button">
              <a
                href="https://gettaroom.b4checkin.com/biltmore#groupSignIn"
                target="_blank"
                rel="noopener noreferrer"
                className="book-now-link"
                style={{
                  color: 'inherit', /* Inherit the color from the button */
                  textDecoration: 'none', /* Remove the underline */
                }}
              >
                Book Now
              </a>
            </button>

            <button className="button-17" onClick={copyGroupCode}>Copy Group Code -- # 11633</button>
          </div>
          <p>or call: <a href="tel:+18553116903">855-311-6903</a> for additional help.</p>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Hotel;
