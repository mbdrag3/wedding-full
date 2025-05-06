import React, { useState, useRef } from 'react';
import '../../styles/Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  // We'll store DOM elements directly in the ref array.
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "When and where is the wedding??",
      answer: "Our wedding will take place on Saturday, July 12, 2025. The ceremony will be held at Coral Gables Congregational Church at 4:00 PM, followed by a reception at The Biltmore Hotel Miami Coral Gables, starting at 6:00 PM."
    },
    {
      question: "What is the dress code?",
      answer: <>Formal attire is required. We kindly ask that all guests wear <strong>black</strong>. This is <strong>NOT</strong> a suggestion—please dress accordingly to honor our vision for the day.</>
    },
    {
      question: "Can I bring a plus-one or my children?",
      answer: "We love your little ones and your loved ones, but our wedding is adults-only. Only those listed on your invitation are invited. Thank you for understanding!"
    },
    {
      question: "Is there a hotel block for guests?",
      answer: (
        <>
          Yes! We have reserved a room block at The Biltmore Hotel Miami Coral Gables. Please book your stay early to secure the best rate by clicking{' '}
          <a
            href="https://gettaroom.b4checkin.com/biltmore#groupSignIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . -- Group Code # 11633 or call: 855-311-6903.
        </>
      )
    }
    ,
    {
      question: "How do I get to the venues?",
      answer: "Ceremony: Coral Gables Congregational Church is located at 3010 De Soto Blvd, Coral Gables, FL 33134. There is parking available on-site. Reception: The Biltmore Hotel is a short drive from the church. Valet and self-parking options are available."
    },
    {
      question: "What kind of food will be served?",
      answer: "A delicious meal will be provided, along with cocktails and refreshments throughout the evening. Please make sure to select your dinner option with doing your RSVP."
    },
    {
      question: "Can I take pictures during the ceremony?",
      answer: "We kindly ask that all guests refrain from using phones or cameras during the ceremony so we can fully be present in the moment. Our photographer will capture everything beautifully!"
    },
    {
      question: "What happens if it rains?",
      answer: "Both venues are indoors, so no need to worry about the weather!"
    },
    {
      question: "Additional questions?",
      answer: (
        <span>
          Feel free to reach out to us directly if you have any last-minute questions. You can contact us via
          <a href="mailto:yacos1120@gmail.com"> Email</a> or <a href="tel:+3059518621">Text (305-951-8621)</a>.
        </span>
      )
    }    
    
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">We created the FAQ section to provide users with quick, clear answers to common questions about our services.</h1>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'open' : ''}`}
            key={index}
          >
            <button
              className="accordion-button"
              onClick={() => handleToggle(index)}
            >
              <span className="accordion-question">{faq.question}</span>
              <span className="accordion-icon">
                <svg
                  className="chevron-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.708l3.71-3.48a.75.75 0 011.04 1.08l-4.23 3.96a.75.75 0 01-1.04 0l-4.23-3.96a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="accordion-content"
              style={{
                maxHeight:
                  activeIndex === index && contentRefs.current[index]
                    ? `${contentRefs.current[index].scrollHeight}px`
                    : '0px'
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
