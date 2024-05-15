// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import login1 from '../assets/login1.png';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [usernameSignIn, setUsernameSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: usernameSignIn,
        password: passwordSignIn,
      });
      console.log("Sign-in response:", response.data);
      // Reset input fields
      setUsernameSignIn("");
      setPasswordSignIn("");
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: usernameSignUp,
        email: emailSignUp,
        password: passwordSignUp,
      });
      console.log("Sign-up response:", response.data);
      // Reset input fields
      setUsernameSignUp("");
      setEmailSignUp("");
      setPasswordSignUp("");
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h3 className="title">Mobile<span className="dot primary">Insurance</span></h3>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={usernameSignIn}
                onChange={(e) => setUsernameSignIn(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={passwordSignIn}
                onChange={(e) => setPasswordSignIn(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h3 className="title">Mobile<span className="dot primary">Insurance</span></h3>
            <h2 className="title" id="bouton">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={usernameSignUp}
                onChange={(e) => setUsernameSignUp(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={emailSignUp}
                onChange={(e) => setEmailSignUp(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={passwordSignUp}
                onChange={(e) => setPasswordSignUp(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Welcome! please SignUp to continue.</p>
            <center>
              <button className="btn transparent" id="sign-up-btn">Sign up</button>
            </center>
          </div>
          <img
            src={login1}
            className="image"
            alt="image for login page"
            height={600}
            width={500}
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>So, Enter Your Credentials To Access Your Account.</p>
            <center>
              <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </center>
          </div>
          <img
            src={login1}
            className="image"
            alt="image for login page"
            height={600}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
