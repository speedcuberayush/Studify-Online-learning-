import React, { useState } from "react";
import "./styles/Authenticationpage.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Authenticationpage = () => {
  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="authpage">
      <div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1 className="Authh1">Create Account</h1>

              <div className="social-container">
                <a href="#" className="social">
                  <InstagramIcon />
                </a>
                <a href="#" className="social">
                  <LinkedInIcon />
                </a>
                <a href="#" className="social">
                  <GitHubIcon />
                </a>
              </div>
              <span className="Authspan">
                or use your email for registration
              </span>
              <input className="AuthInput" type="text" placeholder="Name" />
              <input className="AuthInput" type="email" placeholder="Email" />
              <input
                className="AuthInput"
                type="password"
                placeholder="Password"
              />
              <button className="Authbtn">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1 className="Authh1">Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <InstagramIcon />
                </a>
                <a href="#" className="social">
                  <LinkedInIcon />
                </a>
                <a href="#" className="social">
                  <GitHubIcon />
                </a>
              </div>
              <span className="Authspan">or use your account</span>
              <input className="AuthInput" type="email" placeholder="Email" />
              <input
                className="AuthInput"
                type="password"
                placeholder="Password"
              />
              <a className="social" href="#">
                Forgot your password?
              </a>
              <button className="Authbtn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="Authh1">Welcome Back!</h1>
                <p className="Authp">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="Authbtn ghost"
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="Authh1">Hello, Friend!</h1>
                <p className="Authp">
                  Enter your personal details and start the journey with us
                </p>
                <button
                  className="Authbtn ghost"
                  id="signUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticationpage;
