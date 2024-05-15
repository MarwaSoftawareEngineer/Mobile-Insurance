import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <div id="blog">
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div class="img">
        <div class="containerblog">
          <div class="header"></div>
          <div class="start">
            <h1 class="title2">What is mobile insurance?</h1>
            <h3 class="introduce">
              Smartphones, tablets and other computers have quickly become
              indispensable elements of our daily lives. For many people, it
              would be almost unthinkable, if not impossible today, to live even
              a single day without a mobile phone. But then, given such use,
              what about the risks? Breakage, theft, breakdown… Our beloved
              smartphone is not immune to some problems. Hence the interest of
              taking out portable insurance.
            </h3>
            <br />
            <br />
            <h2 class="title1">
              {/* {" "} */}
              Mobile insurance, as its name suggests, will protect you
              financially from any incident affecting your smartphone, 
              as part of its use. It will therefore not concern the owner of the
              device, but the device itself.
            </h2>
            <br />
            {/* <button class="button">Get Started</button> */}
          </div>
        </div>
      </div>
      <div class="page2">
        <div class="containerblog">
          <h2 class="title3"> Why Choose Mobile Insurance</h2>
          <div class="icon-list">
            <div class="three-icon">
              <img
                src="https://img.freepik.com/free-vector/smartphone-repair-abstract-concept-illustration-cell-phone-repair-smartphone-urgent-mending-service-screen-replacement-data-recovery-electronic-device-fixing-shop_335657-465.jpg?t=st=1713714613~exp=1713718213~hmac=ca52699f21d529a86b1a5246a6de0ea15e52f8410658d6ab56d9b3c0a404cece&w=826"
                alt=""
                width="50%"
              />
              <h3 class="icon-title"> Coverage for accidents</h3>
              <div class="icon-description">
                Even if you're careful, accidents happen. Mobile insurance can
                cover the cost of repairs or replacements if your phone is
                dropped, cracked, or water damaged.
              </div>
            </div>
            <div class="three-icon">
              <img
                src="https://img.freepik.com/premium-vector/cyber-police-protect-mobile-data-from-thieves_539415-1.jpg?w=1380"
                alt=""
                width="75%"
              />
              <h3 class="icon-title"> Theft and loss protection</h3>
              <div class="icon-description">
                If your phone is stolen or lost, mobile insurance can reimburse
                you for the value of the device or provide a replacement.
              </div>
            </div>
            <div class="three-icon">
              <img
                src="https://img.freepik.com/premium-vector/concept-meditation-with-mobile-devices-with-young-man-meditating-holding-mobile-tablet_118813-27368.jpg?w=1380"
                alt=""
                width="75%"
              />
              <h3 class="icon-title"> Peace of mind</h3>
              <div class="icon-description">
                Smartphones are expensive, and replacing a broken or lost one
                can be a big financial hit. Mobile insurance can help you avoid
                that cost.
              </div>
            </div>
          </div>
          <div class="icon-list">
            <div class="three-icon">
              <img
                src="https://img.freepik.com/premium-vector/working-environment-concept-quality-work-workplace-safety-occupational-health-injury-prevention-flat-vector-modern-illustration_566886-8593.jpg?w=996"
                alt=""
                width="70%"
              />
              <h3 class="icon-title"> Manufacturer warranty limitations</h3>
              <div class="icon-description">
                Manufacturer warranties typically don't cover accidental damage
                or loss from theft. Mobile insurance can provide broader
                coverage.{" "}
              </div>
            </div>
            <div class="three-icon">
              <br></br>
              <img
                src="https://img.freepik.com/premium-vector/man-taking-payout-cryptocurrency_701961-2523.jpg?w=1380"
                alt=""
                width="70%"
              />
              <br></br>
              <h3 class="icon-title"> Cost Savings</h3>
              <div class="icon-description">
                While paying a monthly or yearly premium for insurance may seem
                like an added expense, it can save you money in the long run if
                you ever need to repair or replace your device, especially for
                high-end smartphones.{" "}
              </div>
            </div>
            <div class="three-icon">
              <br></br>
              <img
                src="https://img.freepik.com/premium-vector/guarantee-stamp-icon-vector-design_569027-90.jpg?w=826"
                alt=""
                width="50%"
              />
              <br></br>
              <h3 class="icon-title"> Extended Warranty</h3>
              <div class="icon-description">
                Some mobile insurance plans offer extended warranty coverage
                beyond the manufacturer's warranty period, providing you with
                continued protection for your device.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
