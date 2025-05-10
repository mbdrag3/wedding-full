import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Rsvp.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const RSVP = () => {
  /* ───────── YES modal state ─────────────────────────────────────────── */
  const [yesFirstName, setYesFirstName] = useState('');
  const [yesLastName,  setYesLastName]  = useState('');
  const [yesOption,    setYesOption]    = useState('');
  const [guestOptions, setGuestOptions] = useState([]);   // up to 3 extra guests
  const [yesAllergy,   setYesAllergy]   = useState('');
  const [yesError,     setYesError]     = useState('');

  /* ───────── NO modal state ──────────────────────────────────────────── */
  const [noFirstName,  setNoFirstName]  = useState('');
  const [noLastName,   setNoLastName]   = useState('');
  const [noError,      setNoError]      = useState('');

  /* ───────── Modal refs ──────────────────────────────────────────────── */
  const yesModalRef = useRef(null);
  const noModalRef  = useRef(null);

  /* ───────── Helper to add another guest option ─────────────────────── */
  const addGuestOption = () => {
    if (guestOptions.length < 3) setGuestOptions([...guestOptions, '']);
  };

  /* ───────── YES submit ──────────────────────────────────────────────── */
  const handleYesSubmit = async (e) => {
    e.preventDefault();
    if (!yesFirstName.trim() || !yesOption.trim()) {
      setYesError('Please fill out Name & first Dinner Choice.');
      return;
    }
    setYesError('');

    const rsvpData = {
      firstName:        yesFirstName,
      lastName:         yesLastName,     // optional guest name field
      response:         'yes',
      foodOption:       yesOption,
      allergyInfo:      yesAllergy,
      guestFoodOptions: guestOptions     // array for guest 2-4
    };

    try {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/rsvp`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(rsvpData)
      });

      if (res.ok) {
        /* success → close modal & clear form */
        const modal = bootstrap.Modal.getInstance(yesModalRef.current);
        modal?.hide();
        setYesFirstName('');
        setYesLastName('');
        setYesOption('');
        setGuestOptions([]);
        setYesAllergy('');
      } else {
        console.error('Failed to submit RSVP');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  /* ───────── NO submit ───────────────────────────────────────────────── */
  const handleNoSubmit = async (e) => {
    e.preventDefault();
    if (!noFirstName.trim()) {
      setNoError('Please fill out Name.');
      return;
    }
    setNoError('');

    const rsvpData = {
      firstName: noFirstName,
      lastName:  noLastName,
      response:  'no',
      foodOption: '',
      allergyInfo: ''
    };

    try {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/rsvp`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(rsvpData)
      });

      if (res.ok) {
        const modal = bootstrap.Modal.getInstance(noModalRef.current);
        modal?.hide();
        setNoFirstName('');
        setNoLastName('');
      } else {
        console.error('Failed to submit RSVP (No)');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  /* ───────── modal hidden cleanup ────────────────────────────────────── */
  useEffect(() => {
    const yesEl = yesModalRef.current;
    const noEl  = noModalRef.current;
    const clearYes = () => setYesError('');
    const clearNo  = () => setNoError('');

    yesEl?.addEventListener('hidden.bs.modal', clearYes);
    noEl ?.addEventListener('hidden.bs.modal', clearNo);

    return () => {
      yesEl?.removeEventListener('hidden.bs.modal', clearYes);
      noEl ?.removeEventListener('hidden.bs.modal', clearNo);
    };
  }, []);

  /* ───────── JSX ─────────────────────────────────────────────────────── */
  return (
    <div className="container">
      {/* … invitation card markup unchanged … */}

      {/* YES Modal */}
      <div className="modal fade" id="yesModal" tabIndex="-1"
           aria-labelledby="yesModalLabel" aria-hidden="true" ref={yesModalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="yesModalLabel">
                Thank you for confirming your attendance!
              </h5>
              <button type="button" className="btn-close"
                      data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body">
              {yesError && <div className="alert alert-danger">{yesError}</div>}

              <form onSubmit={handleYesSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" value={yesFirstName}
                         onChange={(e) => setYesFirstName(e.target.value)}
                         placeholder="Enter your Full Name" />
                </div>

                {/* Guest Name (optional) */}
                <div className="mb-3">
                  <label className="form-label">Guest(s) Name (Optional)</label>
                  <input className="form-control" value={yesLastName}
                         onChange={(e) => setYesLastName(e.target.value)}
                         placeholder="Enter Guest First & Last Name" />
                </div>

                {/* Primary dinner choice */}
                <div className="mb-3">
                  <label className="form-label">Select your Dinner Choice</label>
                  <select className="form-select" value={yesOption}
                          onChange={(e) => setYesOption(e.target.value)}>
                    <option value="">-- Select dinner choice --</option>
                    <option value="chicken">Coq Au Vin Chicken Breast</option>
                    <option value="beef">Char Crusted Fillet of Beef</option>
                  </select>
                </div>

                {/* Extra guest dinner choices */}
                {guestOptions.map((opt, idx) => (
                  <div className="mb-3" key={idx}>
                    <label className="form-label">
                      Guest {idx + 2} Dinner Choice
                    </label>
                    <select className="form-select" value={opt}
                            onChange={(e) => {
                              const updated = [...guestOptions];
                              updated[idx] = e.target.value;
                              setGuestOptions(updated);
                            }}>
                      <option value="">-- Select dinner choice --</option>
                      <option value="chicken">Coq Au Vin Chicken Breast</option>
                      <option value="beef">Char Crusted Fillet of Beef</option>
                    </select>
                  </div>
                ))}

                {/* “+ Add Guest” button */}
                {guestOptions.length < 3 && (
                  <button type="button"
                          className="btn btn-outline-primary mb-3"
                          onClick={addGuestOption}>
                    + Add Guest
                  </button>
                )}

                {/* Allergy */}
                <div className="mb-3">
                  <label className="form-label">
                    Do you have an allergy? Comment below
                  </label>
                  <input className="form-control" value={yesAllergy}
                         onChange={(e) => setYesAllergy(e.target.value)}
                         placeholder="Tree Nut" />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary"
                          data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* NO modal unchanged … */}
    </div>
  );
};

export default RSVP;
