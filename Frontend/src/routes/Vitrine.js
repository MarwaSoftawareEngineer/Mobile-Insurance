import React from "react";
import "./Vitrine.css";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Store from "../components/Store";
import Assurances from "../components/Assurances";

const Vitrine = () => {
  return (
    <div>
      <header id="header" className="row">
      <div>
          <h3>
            Mobile<span className="dot primary">Insurance</span>
          </h3>
          {/* <div class="jotform-icon"></div> */}
        </div>
        <nav id="nav" className="row">
        <div className="nav-item">
            <button
              className="nav-button" // Add a class for recent styling
              style={{ cursor: "pointer" }} // Add cursor style
            >
              <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </Link>
            </button>
          </div>
          <div className="nav-item">
            <button
              onClick={() => {
                const blog = document.getElementById("blog");
                if (blog) {
                  blog.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="nav-button" // Add a class for recent styling
              style={{ cursor: "pointer" }} // Add cursor style
            >
              Blog
            </button>
          </div>
          <div className="nav-item">
            <button
              onClick={() => {
                const store = document.getElementById("store");
                if (store) {
                  store.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="nav-button" // Add a class for recent styling
              style={{ cursor: "pointer" }} // Add cursor style
            >
              Store
            </button>
          </div>
          <div className="nav-item">
            <button
              onClick={() => {
                const assurance = document.getElementById("assurance");
                if (assurance) {
                  assurance.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="nav-button" // Add a class for recent styling
              style={{ cursor: "pointer" }} // Add cursor style
            >
              Insurances
            </button>
          </div>
        </nav>
        <div>
          <button id="Your account btn" className="primary">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              Your Account
            </Link>
          </button>
        </div>
      </header>
      <br></br>
      <section className="row">
        <div id="main content" className="column">
          <h2>
            Secure Your Mobile,
            <span className="dot primary"> Simplify Your Peace of Mind.</span>
          </h2>
          <h3>
            We believe in safeguarding the heart of your digital life of your
            mobile device.
            <br />
            Our application is meticulously designed to streamline the
            management of mobile insurance,
            <br />
            offering you a seamless experience from policy purchase to claim
            processing.
            <br />
            With our user-friendly interface and robust features, you can
            effortlessly protect your device against unforeseen events,
            <br />
            ensuring uninterrupted connectivity and peace of mind. Trust us to
            be your companion in securing your mobile world,
            <br />
            so you can focus on what matters most.
          </h3>
          <div className="row cut">
            <button id="new_account_btn" className="zp">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
              >
                Start Now
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/personal-data-protection-gdpr-isometric-illustration_1284-57394.jpg?t=st=1713652413~exp=1713656013~hmac=d5b5e376a59c9a4686517be2480908a56cdf1a4cc472f354d18c299a740967f0&w=826"
            alt="Stunning Workplace Art"
            width="100%"
          />
        </div>
      </section>
      <Blog />
      <Store />
      <Assurances />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Vitrine;
