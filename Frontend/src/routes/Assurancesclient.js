import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Assurancesclient.css";

// import Navclient from "../components/Navclient";

const Assurancesclient = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyInsuranceClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="start">
      <div className="dashboard">
        <div className="left-side-bar">
          <div className="menu">
            <h3>
              Mobile<span className="dot primary">Insurance</span>
            </h3>
            <ul>
              <li>
                <svg
                  width="30px"
                  height="30px"
                  fill="#000000"
                  viewBox="-1 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  class="cf-icon-svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM12.75 5.691a.318.318 0 0 0-.317-.317h-7.84a.318.318 0 0 0-.316.317v5.563c0 2.34 4.236 3.658 4.236 3.658s4.237-1.318 4.237-3.658zm-2.617 4.933a1.172 1.172 0 0 1-.586 1.005 1.938 1.938 0 0 1-.652.26v.46a.396.396 0 0 1-.792 0v-.456l-.033-.005a2.028 2.028 0 0 1-.415-.127 1.332 1.332 0 0 1-.512-.376.396.396 0 0 1 .599-.518.555.555 0 0 0 .207.159 1.333 1.333 0 0 0 .257.082 1.94 1.94 0 0 0 .275.033 1.229 1.229 0 0 0 .635-.176c.2-.13.225-.25.225-.341a.402.402 0 0 0-.099-.26.822.822 0 0 0-.218-.176 1.069 1.069 0 0 0-.263-.094 1.221 1.221 0 0 0-.256-.026 2.373 2.373 0 0 1-.395-.032 1.815 1.815 0 0 1-.504-.162 1.442 1.442 0 0 1-.474-.381 1.214 1.214 0 0 1-.28-.761 1.232 1.232 0 0 1 .615-1.041 1.905 1.905 0 0 1 .636-.248v-.444a.396.396 0 1 1 .792 0v.456l.005.001.026.006a2.132 2.132 0 0 1 .421.144 1.548 1.548 0 0 1 .452.31.396.396 0 0 1-.56.56.747.747 0 0 0-.217-.148 1.383 1.383 0 0 0-.264-.093l-.026-.005a1.254 1.254 0 0 0-.221-.037 1.21 1.21 0 0 0-.622.167.44.44 0 0 0-.245.371.435.435 0 0 0 .102.262.668.668 0 0 0 .215.173 1.019 1.019 0 0 0 .279.09 1.585 1.585 0 0 0 .265.02 2.018 2.018 0 0 1 .424.044 1.876 1.876 0 0 1 .464.168 1.607 1.607 0 0 1 .446.354 1.19 1.19 0 0 1 .294.782z"></path>
                  </g>
                </svg>
                <span>
                  <Link
                    to="/assurancesclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Insurances
                  </Link>
                </span>
              </li>
              <li>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.87617 3.75H19.1238L21 8.86683V10.5C21 11.2516 20.7177 11.9465 20.25 12.4667V21H3.75V12.4667C3.28234 11.9465 3 11.2516 3 10.5V8.86683L4.87617 3.75ZM18.1875 13.3929C18.3807 13.3929 18.5688 13.3731 18.75 13.3355V19.5H15V15H9L9 19.5H5.25V13.3355C5.43122 13.3731 5.61926 13.3929 5.8125 13.3929C6.63629 13.3929 7.36559 13.0334 7.875 12.4667C8.38441 13.0334 9.11371 13.3929 9.9375 13.3929C10.7613 13.3929 11.4906 13.0334 12 12.4667C12.5094 13.0334 13.2387 13.3929 14.0625 13.3929C14.8863 13.3929 15.6156 13.0334 16.125 12.4667C16.6344 13.0334 17.3637 13.3929 18.1875 13.3929ZM10.5 19.5H13.5V16.5H10.5L10.5 19.5ZM19.5 9.75V10.5C19.5 11.2965 18.8856 11.8929 18.1875 11.8929C17.4894 11.8929 16.875 11.2965 16.875 10.5V9.75H19.5ZM19.1762 8.25L18.0762 5.25H5.92383L4.82383 8.25H19.1762ZM4.5 9.75V10.5C4.5 11.2965 5.11439 11.8929 5.8125 11.8929C6.51061 11.8929 7.125 11.2965 7.125 10.5V9.75H4.5ZM8.625 9.75V10.5C8.625 11.2965 9.23939 11.8929 9.9375 11.8929C10.6356 11.8929 11.25 11.2965 11.25 10.5V9.75H8.625ZM12.75 9.75V10.5C12.75 11.2965 13.3644 11.8929 14.0625 11.8929C14.7606 11.8929 15.375 11.2965 15.375 10.5V9.75H12.75Z"
                      fill="#080808"
                    ></path>{" "}
                  </g>
                </svg>
                <span>
                  <Link
                    to="/storeclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Store
                  </Link>
                </span>
              </li>
              <li>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M182.52 146.2h585.14v402.28h73.15V73.06H109.38v877.71h402.28v-73.14H182.52z"
                      fill="#0d0d0d"
                    ></path>
                    <path
                      d="M255.67 219.34h438.86v73.14H255.67zM255.67 365.63h365.71v73.14H255.67zM255.67 511.91H475.1v73.14H255.67zM731.02 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86 182.86-81.87 182.86-182.86-81.87-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0 60.49-49.22 109.71-109.71 109.71z"
                      fill="#0d0d0d"
                    ></path>
                    <path
                      d="M717.88 777.65l-42.55-38.13-36.61 40.86 84.02 75.27 102.98-118.47-41.39-36z"
                      fill="#0d0d0d"
                    ></path>
                  </g>
                </svg>
                <span>
                  <Link
                    to="/contratsclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contracts
                  </Link>
                </span>
              </li>
              <li>
                <svg
                width="30px"
                height="30px"
                  viewBox="0 0 1024 1024"
                  fill="#000000"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="45.056"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                      fill=""
                    ></path>
                    <path
                      d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                      fill=""
                    ></path>
                    <path
                      d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                      fill=""
                    ></path>
                  </g>
                </svg>
                <span>
                  <Link
                    to="/claimsclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Claims
                  </Link>
                </span>
              </li>
              <li>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 1024 1024"
                  fill="#000000"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="18.432"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M110.4 923.2c-56.8 0-102.4-48-102.4-106.4V285.6c0-58.4 45.6-106.4 102.4-106.4h800.8c56.8 0 102.4 48 102.4 106.4V816c0 58.4-45.6 106.4-102.4 106.4H110.4z m0-701.6c-34.4 0-61.6 28.8-61.6 64V816c0 35.2 28 64 61.6 64h800.8c34.4 0 61.6-28.8 61.6-64V285.6c0-35.2-28-64-61.6-64H110.4z"
                      fill=""
                    ></path>
                    <path
                      d="M541.6 392c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 511.2c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 638.4c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h276.8c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24H541.6zM58.4 886.4c-2.4 0-4.8 0-7.2-0.8-12.8-4-20-18.4-16-32 23.2-78.4 77.6-142.4 148-176l16-8-13.6-12c-40-34.4-63.2-85.6-63.2-139.2 0-100 78.4-180.8 173.6-180.8 96 0 173.6 80.8 173.6 180.8 0 53.6-23.2 104.8-63.2 139.2l-13.6 12 16 8c68 32 132.8 112 157.6 194.4 16 52.8-16.8 36-1.6 16-3.2 4.8-16.8-5.6-32-5.6-12.8 0-19.2 24.8-19.2 22.4-31.2-104-120.8-203.2-217.6-203.2-99.2 0-186.4 67.2-216 166.4-1.6 11.2-11.2 18.4-21.6 18.4z m239.2-498.4c-69.6 0-126.4 58.4-126.4 130.4s56.8 130.4 126.4 130.4c69.6 0 126.4-58.4 126.4-130.4-0.8-72-56.8-130.4-126.4-130.4z"
                      fill=""
                    ></path>
                  </g>
                </svg>
                <span>
                  <Link
                    to="/storeclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <span> My Account</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-container">
          <div className="top-bar">
            <div className="search-input">
              <i className="fa fa-search"></i>
              <input placeholder="Search..." />
            </div>
            <div className="top-bar-btn">
              <i className="fa fa-bell"></i>
            </div>
            <div className="top-bar-profile">
              <div className="profile-avatar">
                <img src="https://th.bing.com/th/id/OIF.lDTQAk3Z0IjtFVa8RQk9DA?rs=1&pid=ImgDetMain" />
              </div>
              <p>User</p>
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="main-view">
            <div>
              <h1>Insurances List</h1>
            </div>
            <div>
              <button
                onClick={handleBuyInsuranceClick}
                className="btnassurance"
                style={{ cursor: "pointer" }}
              >
                Buy Insurance for My Smartphone
              </button>
            </div>
            <br />
            <div className="d-card blue">
              <div className="card-header">
                <div className="icon">
                  <i className="fa fa-tint"></i>
                </div>
                <p>Water Card</p>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div className="card-actions">
                <i className="fa fa-eye"></i>
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
            <div className="d-card green">
              <div className="card-header">
                <div className="icon">
                  <i className="fa fa-leaf"></i>
                </div>
                <p>Earth Card</p>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div className="card-actions">
                <i className="fa fa-eye"></i>
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
            <div className="d-card red">
              <div className="card-header">
                <div className="icon">
                  <i className="fa fa-fire"></i>
                </div>
                <p>Fire Card</p>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div className="card-actions">
                <i className="fa fa-eye"></i>
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Buy An Insurance For My Smartphone</h3>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="insuranceType">Contract:</label>
                <select id="insuranceType" name="insuranceType">
                  <option value="basic">Smartphone Insurance Contract</option>
                  <option value="premium">
                    Premium Smartphone Insurance Contract
                  </option>
                  <option value="gold">
                    Universal Smartphone Insurance Contract
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="coverageAmount">Price/Day:</label>
                <input
                  type="number"
                  id="coverageAmount"
                  name="coverageAmount"
                />
              </div>
              <div className="form-group">
                <div className="checkbox-wrapper">
                  <label htmlFor="theftProtection">Theft Protection:</label>

                  <input
                    id="terms-checkbox-37"
                    name="theftProtection"
                    type="checkbox"
                  />
                  <label
                    className="terms-label"
                    htmlFor="terms-checkbox-37"
                    checked="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 200 200"
                      className="checkbox-svg"
                    >
                      <mask fill="white" id="path-1-inside-1_476_5-37">
                        <rect height="200" width="200"></rect>
                      </mask>
                      <rect
                        mask="url(#path-1-inside-1_476_5-37)"
                        strokeWidth="40"
                        className="checkbox-box"
                        height="200"
                        width="200"
                      ></rect>
                      <path
                        strokeWidth="15"
                        d="M52 111.018L76.9867 136L149 64"
                        className="checkbox-tick"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contractTerms">Terms of the contract:</label>
                <input type="text" id="contractTerms" name="contractTerms" />
              </div>
              <div className="form-group">
                <label htmlFor="productOptions">Product Options:</label>
                <input type="text" id="productOptions" name="productOptions" />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="startdate">Start Date:</label>
                <input type="date" id="startdate" name="startdate" />
              </div>
              <div className="form-group">
                <label htmlFor="finishdate">Finish Date:</label>
                <input type="date" id="finishdate" name="finishdate" />
              </div>
              <button class="reward-btn">
                <span class="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 60 20"
                    class="box-top box"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-width="4"
                      stroke="#6A8EF6"
                      d="M2 18L58 18"
                    ></path>
                    <circle
                      stroke-width="5"
                      stroke="#6A8EF6"
                      fill="#101218"
                      r="7"
                      cy="9.5"
                      cx="20.5"
                    ></circle>
                    <circle
                      stroke-width="5"
                      stroke="#6A8EF6"
                      fill="#101218"
                      r="7"
                      cy="9.5"
                      cx="38.5"
                    ></circle>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 58 44"
                    class="box-body box"
                  >
                    <mask fill="white" id="path-1-inside-1_81_19">
                      <rect rx="3" height="44" width="58"></rect>
                    </mask>
                    <rect
                      mask="url(#path-1-inside-1_81_19)"
                      stroke-width="8"
                      stroke="#6A8EF6"
                      fill="#101218"
                      rx="3"
                      height="44"
                      width="58"
                    ></rect>
                    <line
                      stroke-width="6"
                      stroke="#6A8EF6"
                      y2="29"
                      x2="58"
                      y1="29"
                      x1="-3.61529e-09"
                    ></line>
                    <path
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke="#6A8EF6"
                      d="M45.0005 20L36 3"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke="#6A8EF6"
                      d="M21 3L13.0002 19.9992"
                    ></path>
                  </svg>

                  <span class="coin"></span>
                </span>
                <span class="text">Confirm</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assurancesclient;
