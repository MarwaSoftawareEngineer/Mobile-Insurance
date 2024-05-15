import React from "react";
import "./Assurances.css";
import { Link } from "react-router-dom";


const Assurances = () => {
  return (
    <div>
      <div
        className="containerblog"
        style={{ marginTop: "551px", marginBottom: "300px" }}
        id="assurance"
      >
        <h2 className="title3">Insurances</h2>

        <section class="light">
          <div class="containerassurance py-2">

            <article class="postcard light blue">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://th.bing.com/th/id/OIP.ssQlhG2fDUSBP_dgBrqPiwHaDf?pid=ImgDet&w=474&h=223&rs=1"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title blue">
                  <a href="#">STAR Assurances</a>
                </h1>
                <div class="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, 
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Buy Now
                  </li>
                </ul>
              </div>
            </article>
            <article class="postcard light red">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://th.bing.com/th/id/OIP.cpmSpqLMgG91nRHE67UDbgHaEh?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title red">
                  <a href="#">Podcast Title</a>
                </h1>
                <div class="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                 
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Buy Now
                  </li>
                </ul>
              </div>
            </article>
            <article class="postcard light blue">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://th.bing.com/th/id/OIP.ssQlhG2fDUSBP_dgBrqPiwHaDf?pid=ImgDet&w=474&h=223&rs=1"
                  alt="Image Title"
                  
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title blue">
                  <a href="#">STAR Assurances</a>
                </h1>
                <div class="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, 
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Buy Now
                  </li>
                </ul>
              </div>
            </article>
            <button class="cssbuttons-io-button"
            style={{ display: "flex", justifyContent: "flex-end" }}>
              See More
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Assurances;
