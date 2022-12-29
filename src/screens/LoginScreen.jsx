import React from "react";
import "./LoginScreen.css";
import { useState } from "react";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
      {SignIn ? (
        <SignupScreen/>
      ) : (
        <>
          <h1>UNLIMITED FILMS AND SHOWS</h1>
          <h2>Watch Anywhere, Cancel Anytime</h2>
          <h3>READY TO WATCH? ENTER YOUR EMAIL TO CREATE AN ACCOUNT</h3>
          <div className="loginScreen__input">
            <form>
              <input type="email"
                placeholder="Email Address" />
                <button className="loginScreen__getStarted"
                onClick={() => setSignIn(true)}>GET STARTED</button>
            </form>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default LoginScreen;
