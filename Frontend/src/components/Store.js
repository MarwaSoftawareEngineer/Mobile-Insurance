import React from "react";
import "./Store.css";
import { Link } from "react-router-dom";


const Store = () => {
  return (
    <div className="page2" id="store">
      <div className="containerblog">
        <h2 className="title3">Top Products</h2>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button class="cta">
            <span class="hover-underline-animation"> <Link
            className="btnfooter"
            to="/login"
            // style={{ textDecoration: "none", color: "inherit" }}
          >
            Shop Now
          </Link> </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>

        <center>
          <div class="containerstore">
            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?t=st=1713904471~exp=1713908071~hmac=8e331e1babfa64daa2014f2d19927c14350081770fb7b9b4957bdacdf9af55bf&w=826"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 12 Pro</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>1950dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437109.jpg?t=st=1713904326~exp=1713907926~hmac=6ac81ac9aa162cfeecfce8d46cce25aa6f70bad25a725fe4fc2f73c3b22aee50&w=740"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 15 Pro Max</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>2999dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>

            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-vector/realistic-design-green-smartphone-with-three-cameras_23-2148380822.jpg?t=st=1713904954~exp=1713908554~hmac=854fd3507cb0a018cacd72ca1243f32a4ad9b33c8891659524e15d52c0e0b216&w=826"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 14 Pro</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>1550dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1713902731~exp=1713906331~hmac=a3eb629e7c0be333c0ba59baabef79e9ff15f06cebae7a742358c5169d2aa95b&w=740"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 12Pro</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>1500dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
            <br></br>
            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg?t=st=1713906441~exp=1713910041~hmac=c1c8a7ac996d8bdca859844104f9fa18bc41887d3cff5fab05943ce287fd4e55&w=1380"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 12 Pro</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>1500dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-psd/realistic-monitor-presentation_1310-18.jpg?t=st=1713907088~exp=1713910688~hmac=fc6e7cc0280a14ea5f426711b5696ca2238630c4cf562c0ec768f33e03c4784b&w=826"
                  alt=""
                />
              </div>
              <div class="content">
                <div class="product-name">
                  <h5>
                    <span class="product-bold">Iphone 12 Pro</span>
                  </h5>
                </div>
                <div class="product-price">
                  <h2>1500dt</h2>
                </div>
                <button class="button">
                  Buy Now
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Store;
