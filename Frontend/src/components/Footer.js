import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="rowfooter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <div className="columnfooter">
          <h2>25,356</h2>
          <p>projects Done</p>
        </div>
        <div className="columnfooter">
          <h2>1M+</h2>
          <p>projects done</p>
        </div>
        <div className="columnfooter">
          <h2>95%</h2>
          <p>Happy customers</p>
        </div> */}

          <h3>Want to Start an Insurance with Us?</h3>
          <p>
          The invitation to start an insurance venture presents an exciting opportunity.<br />
          Let's embark on this journey together to build a successful and resilient business.
          </p>
          <Link
            className="btnfooter"
            to="/login"
            // style={{ textDecoration: "none", color: "inherit" }}
          >
            Get Started
          </Link>
        </div>
      
    </section>
  );
}
