import React, { useState } from 'react';
import "./Contacts.css";

export default function Contacts() {
  const [email, setEmail] = useState('');

  const clearEmail = () => {
    setEmail('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contacts-wrapper" id="contacts">
         <div className="carousel-heading">Contact Me</div>
      <div className="contact-info">
        <p className="callMe"> Call Me: +380968323305</p>
        <p className="address">Kyiv, Nauky Avenue </p>
      </div>
      <form noValidate autoComplete="off" className='recieveEmail' onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button className="subscribe-btn" onClick={clearEmail}>
         <div className="subscribe-text" onClick={clearEmail}>Recieve Emails</div>
        </button>
      </form>
    </div>
  );
}