import React from "react";
import './Contact.scss'
function Contactus() {
  return (

      <div className="parent-wrapper">
        <span className="close-btn glyphicon glyphicon-remove" />
        <div className="subscribe-wrapper">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input
            type="email"
            name="email"
            className="subscribe-input"
            placeholder="Your e-mail"
          />
          <div className="submit-btn">SUBMIT</div>
        </div>
      </div>
    
  );
}

export default Contactus;
