import React from "react";
import { Link } from "react-router-dom";
import './AccordianFaq.css'

const AAbutton = () => {
  return (
    <Link to="/learn">
      <button className="AAbutton">
        <span className="AAbutton_lg">
          <span className="AAbutton_sl" />
          <span className="AAbutton_text">Go back</span>
        </span>
      </button>
    </Link>
  );
};

export default AAbutton;
