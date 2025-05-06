import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Rsvp.css'
// Import the Bootstrap JS bundle so we can manually hide the modal
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const RSVP = () => {
  // ---------------------------------------
  // YES Modal form state
  // ---------------------------------------
  const [yesFirstName, setYesFirstName] = useState('');
  const [yesLastName, setYesLastName] = useState('');
  const [yesOption, setYesOption] = useState('');
  const [yesAllergy, setYesAllergy] = useState('');
  const [yesError, setYesError] = useState('');

  // ---------------------------------------
  // NO Modal form state
  // ---------------------------------------
  const [noFirstName, setNoFirstName] = useState('');
  const [noLastName, setNoLastName] = useState('');
  const [noError, setNoError] = useState('');

  // Refs to each modal <div> so we can close them programmatically
  const yesModalRef = useRef(null);
  const noModalRef = useRef(null);

  // ---------------------------------------
  // Handle "Yes" form submission
  // ---------------------------------------
  const handleYesSubmit = async (e) => {
    e.preventDefault();

    if (!yesFirstName.trim() || !yesLastName.trim() || !yesOption.trim()) {
      setYesError('Please fill out all fields.');
    } else {
      setYesError('');
      const rsvpData = {
        firstName: yesFirstName,
        lastName: yesLastName,
        response: 'yes',
        foodOption: yesOption,
        allergyInfo: yesAllergy,
      };

      try {
        const response = await fetch('http://localhost:5000/rsvp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(rsvpData),
        });

        if (response.ok) {
          console.log('RSVP submitted successfully');

          // Close the modal
          const modal = bootstrap.Modal.getInstance(yesModalRef.current);
          if (modal) {
            modal.hide();
          }

          // Clear the form
          setYesFirstName('');
          setYesLastName('');
          setYesOption('');
          setYesAllergy('');
        } else {
          console.error('Failed to submit RSVP');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // ---------------------------------------
  // Handle "No" form submission
  // ---------------------------------------
  const handleNoSubmit = async (e) => {
    e.preventDefault();

    if (!noFirstName.trim() || !noLastName.trim()) {
      setNoError('Please fill out all fields.');
    } else {
      setNoError('');
      const rsvpData = {
        firstName: noFirstName,
        lastName: noLastName,
        response: 'no',
        foodOption: '',
        allergyInfo: '',
      };

      try {
        const response = await fetch('http://localhost:5000/rsvp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(rsvpData),
        });

        if (response.ok) {
          console.log('RSVP (No) submitted successfully');

          // Close the modal
          const modal = bootstrap.Modal.getInstance(noModalRef.current);
          if (modal) {
            modal.hide();
          }

          // Clear the form
          setNoFirstName('');
          setNoLastName('');
        } else {
          console.error('Failed to submit RSVP (No)');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };


  // ---------------------------------------
  // When the YES modal is fully hidden
  // ---------------------------------------
  const handleYesModalHidden = () => {
    setYesError('');
    // Optional: Clear fields when closed:
    // setYesFirstName('');
    // setYesLastName('');
    // setYesOption('');
    // setYesAllergy('');
  };

  // ---------------------------------------
  // When the NO modal is fully hidden
  // ---------------------------------------
  const handleNoModalHidden = () => {
    setNoError('');
    // Optional: Clear fields when closed:
    // setNoFirstName('');
    // setNoLastName('');
  };

  // ---------------------------------------
  // Attach "hidden.bs.modal" event listeners
  // ---------------------------------------
  useEffect(() => {
    const yesModalEl = yesModalRef.current;
    const noModalEl = noModalRef.current;

    if (yesModalEl) {
      yesModalEl.addEventListener('hidden.bs.modal', handleYesModalHidden);
    }
    if (noModalEl) {
      noModalEl.addEventListener('hidden.bs.modal', handleNoModalHidden);
    }

    // Cleanup: remove event listeners on unmount
    return () => {
      if (yesModalEl) {
        yesModalEl.removeEventListener('hidden.bs.modal', handleYesModalHidden);
      }
      if (noModalEl) {
        noModalEl.removeEventListener('hidden.bs.modal', handleNoModalHidden);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="outer-white-border">
        <div className='white-space-padding'>
          <div className='invitation-card-wrapper'>
            <div className="invitation-card">
              {/* <h2 className="invitation-title">
                Brandee Covit and Steven Friedmann
                <br />
                Adena Wisenthal and Ron Huberman
              </h2> */}
              <h3 className="invitation-subtitle">
                Mr. Jose Luis and Mrs. Silvia Acosta request the pleasure of your company at the marriage of their daughter
              </h3>
              <h1 className="invitation-couple">Yaimarys Mercedes Acosta</h1>
              <h1 className="invitation-couple">&</h1>
              <h1 className="invitation-couple">Michael Bordy Drag</h1>
              <h3 className="invitation-subtitle">
                Son of Mr. John and Mrs. Emily Drag
              </h3>
              <p className="invitation-details">
                Saturday, the twelfth of July
                <br />
                Two Thousand and Twenty Five
                <br />
                At Four O'Clock in the afternoon
                <br />
                Ceremony and celebration to follow
              </p>
              <p className="invitation-location">
              <span style={{ fontWeight: 'bold' }}>Coral Gables Congregational Church</span>

                <br />
                <a
                  href="https://www.google.com/maps?q=3010+De+Soto+Boulevard,+Coral+Gables,+FL+33134"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3010 De Soto Boulevard, Coral Gables, FL 33134
                </a>
              </p>
              <p className="invitation-location">
              <span style={{ fontWeight: 'bold' }}>The Biltmore</span>
                <br />
                <a
                  href="https://www.google.com/maps?q=1200+Anastasia+Avenue,+Coral+Gables,+FL+33134"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1200 Anastasia Avenue, Coral Gables, FL 33134
                </a>
              </p>
              <div className="invitation-footer">
                <p>Valet Parking | Black Tie Welcome</p>
              </div>

              {/* Buttons to open respective modals */}
              <div className="rsvp-buttons">
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#yesModal"
                >
                  RSVP Yes
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#noModal"
                >
                  RSVP No
                </button>
              </div>

              {/* Yes Modal */}
              <div
                className="modal fade"
                id="yesModal"
                tabIndex="-1"
                aria-labelledby="yesModalLabel"
                aria-hidden="true"
                ref={yesModalRef}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="yesModalLabel">
                        Thank you for confirming your attendance!
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      {yesError && (
                        <div className="alert alert-danger" role="alert">
                          {yesError}
                        </div>
                      )}
                      <form onSubmit={handleYesSubmit}>
                        <div className="mb-3">
                          <label htmlFor="yesFirstName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="yesFirstName"
                            placeholder="Enter your Full Name"
                            value={yesFirstName}
                            onChange={(e) => setYesFirstName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="yesLastName" className="form-label">
                            Guest(s) Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="yesLastName"
                            placeholder="Enter Guest First and Last Name"
                            value={yesLastName}
                            onChange={(e) => setYesLastName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="optionSelector" className="form-label">
                            Select your Dinner Choice
                          </label>
                          <select
                            className="form-select"
                            id="optionSelector"
                            value={yesOption}
                            onChange={(e) => setYesOption(e.target.value)}
                          >
                            <option value="chicken">Coq Au Vin Chicken Breast</option>
                            <option value="beef">Char Crusted Fillet of Beef</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="yesAllergy" className="form-label">
                            Do you have an allergy? Comment them below
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="yesAllergy"
                            placeholder="Tree Nut"
                            value={yesAllergy}
                            onChange={(e) => setYesAllergy(e.target.value)}
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* No Modal */}
            <div
              className="modal fade"
              id="noModal"
              tabIndex="-1"
              aria-labelledby="noModalLabel"
              aria-hidden="true"
              ref={noModalRef}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="noModalLabel">
                      We are sorry you can't make it!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    {noError && (
                      <div className="alert alert-danger" role="alert">
                        {noError}
                      </div>
                    )}
                    <form onSubmit={handleNoSubmit}>
                      <div className="mb-3">
                        <label htmlFor="noFirstName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="noFirstName"
                          placeholder="Enter your first name"
                          value={noFirstName}
                          onChange={(e) => setNoFirstName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="noLastName" className="form-label">
                          Guest(s) Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="noLastName"
                          placeholder="Enter your last name"
                          value={noLastName}
                          onChange={(e) => setNoLastName(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-danger">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;