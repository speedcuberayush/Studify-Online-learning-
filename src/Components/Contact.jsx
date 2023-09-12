import "./styles/contactus.css";
import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleReset = () => {
    this.setState({ submitted: false });
    document.querySelector(".sign-up-form").reset();
  };

  render() {
    const { submitted } = this.state;

    return (
      <div className={`sign-up-container ${submitted ? "submitted" : ""}`}>
        <div className="envelope">
          <div className="paper">
            <h1>Subscribe to our Newsletter</h1>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Email" className="text-input" />
              <button type="submit" className="button">
                Sign up
              </button>
            </form>
          </div>
          <div className="bottom-flap"></div>
        </div>
        <div className="thanks-text">
          <span>Thanks for subscribing</span>
          {submitted && (
            <button className="reset-button" onClick={this.handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
