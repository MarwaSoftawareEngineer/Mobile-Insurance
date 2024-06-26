import React from "react";
import "./Dashboard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Campanies() {
  useEffect(() => {
    const navItems = document.querySelectorAll(".side-nav__item");
    const removeClasses = () => {
      navItems.forEach((eachItem) => {
        eachItem.classList.remove("side-nav__item-active");
      });
    };

    navItems.forEach((eachItem) => {
      eachItem.addEventListener("click", function () {
        removeClasses();
        eachItem.classList.add("side-nav__item-active");
      });
    });
  }, []);

  return (
    <div>
      <div class="containerdashboard">
        <nav class="sidebar">
          <div>
            <div class="sidebar__logo">
              <h2 class="sidebar__logo-header">Admin System</h2>
            </div>
            <ul class="side-nav">
              <span class="side-nav__header">Main Menu</span>
              <li class="side-nav__item">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23201 3.4202L9.23239 3.41989C10.2108 2.63408 11.7843 2.63834 12.7781 3.42994C12.7783 3.43005 12.7784 3.43015 12.7785 3.43025L18.7784 8.2301C18.7789 8.23054 18.7795 8.23099 18.78 8.23143C19.1189 8.50835 19.4146 8.94381 19.6058 9.44415C19.7968 9.94409 19.8672 10.4662 19.8014 10.8985L18.6475 17.8037C18.6474 17.8042 18.6473 17.8047 18.6472 17.8052C18.4217 19.0989 17.1608 20.1667 15.8585 20.1667H6.1418C4.81982 20.1667 3.58766 19.1252 3.36227 17.8148C3.36221 17.8145 3.36215 17.8142 3.36209 17.8138L2.20746 10.9043L2.20726 10.9032C2.13345 10.4677 2.19947 9.94466 2.39002 9.44498C2.58055 8.94535 2.87982 8.51038 3.22697 8.2334L3.22784 8.2327L9.23201 3.4202ZM11.0001 18.1876C11.6521 18.1876 12.1876 17.652 12.1876 17.0001V14.2501C12.1876 13.5981 11.6521 13.0626 11.0001 13.0626C10.3482 13.0626 9.81263 13.5981 9.81263 14.2501V17.0001C9.81263 17.652 10.3482 18.1876 11.0001 18.1876Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                  <span>Dashboard</span>
                </Link>
              </li>
              {/* Insurane Campanies */}
              <li class="side-nav__item  side-nav__item-active">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.30664 17.1375V15.24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 17.1375V13.3425"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.6934 17.1375V11.4358"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.6933 5.86255L15.2716 6.35755C12.9341 9.08922 9.79914 11.0234 6.30664 11.8942"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.0073 5.86255H15.6932V8.53922"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25016 20.6667H13.7502C18.3335 20.6667 20.1668 18.8334 20.1668 14.25V8.75004C20.1668 4.16671 18.3335 2.33337 13.7502 2.33337H8.25016C3.66683 2.33337 1.8335 4.16671 1.8335 8.75004V14.25C1.8335 18.8334 3.66683 20.6667 8.25016 20.6667Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Insurane Campanies</span>
              </li>
              {/* Sales Shops */}
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1668 9.66671V14.25C20.1668 18.8334 18.3335 20.6667 13.7502 20.6667H8.25016C3.66683 20.6667 1.8335 18.8334 1.8335 14.25V8.75004C1.8335 4.16671 3.66683 2.33337 8.25016 2.33337H12.8335"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.1668 9.66671H16.5002C13.7502 9.66671 12.8335 8.75004 12.8335 6.00004V2.33337L20.1668 9.66671Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.4165 12.4166H11.9165"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.4165 16.0834H10.0832"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Sales Shops</span>
              </li>
              {/* the repair shops */}
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.90576 7.32001L10.9999 12.0042L19.0391 7.34748"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 20.3092V11.995"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.10256 2.77331L4.20757 5.49584C3.0984 6.11001 2.19092 7.64999 2.19092 8.91499V14.0942C2.19092 15.3592 3.0984 16.8992 4.20757 17.5133L9.10256 20.2359C10.1476 20.8134 11.8617 20.8134 12.9067 20.2359L17.8017 17.5133C18.9109 16.8992 19.8184 15.3592 19.8184 14.0942V8.91499C19.8184 7.64999 18.9109 6.11001 17.8017 5.49584L12.9067 2.77331C11.8526 2.18665 10.1476 2.18665 9.10256 2.77331Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5834 12.6366V9.28167L6.88428 4.2583"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Repair Shops</span>
              </li>
              {/* insurance policies */}
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2915 12.6367V11.0509C2.2915 9.15336 3.84067 7.60419 5.73817 7.60419H16.2615C18.159 7.60419 19.7082 9.15336 19.7082 11.0509V12.3709H17.8565C17.3432 12.3709 16.8757 12.5725 16.5365 12.9208C16.1515 13.2967 15.9315 13.8375 15.9865 14.415C16.069 15.405 16.9765 16.1292 17.9665 16.1292H19.7082V17.22C19.7082 19.1175 18.159 20.6667 16.2615 20.6667H11.2382"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.2915 11.8758V7.6867C2.2915 6.59587 2.96067 5.62416 3.97817 5.23916L11.2565 2.48916C12.3932 2.05833 13.6123 2.90169 13.6123 4.12085V7.60418"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.6787 13.306V15.1944C20.6787 15.6985 20.2754 16.111 19.7621 16.1293H17.9654C16.9754 16.1293 16.0679 15.4052 15.9854 14.4152C15.9304 13.8377 16.1504 13.2968 16.5354 12.921C16.8746 12.5727 17.3421 12.371 17.8554 12.371H19.7621C20.2754 12.3894 20.6787 12.8018 20.6787 13.306Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.4165 11.5H12.8332"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.75 15.625H7.645C8.23166 15.625 8.70833 16.1016 8.70833 16.6883V17.8617"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.86833 14.5067L2.75 15.625L3.86833 16.7433"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.70833 20.4651H3.81334C3.22667 20.4651 2.75 19.9884 2.75 19.4017V18.2284"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.59131 21.5837L8.70964 20.4653L7.59131 19.347"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Insurane Policies</span>
              </li>
              {/* Manage Users */}
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79183 17.9166H7.3335C3.66683 17.9166 1.8335 17 1.8335 12.4166V7.83331C1.8335 4.16665 3.66683 2.33331 7.3335 2.33331H14.6668C18.3335 2.33331 20.1668 4.16665 20.1668 7.83331V12.4166C20.1668 16.0833 18.3335 17.9166 14.6668 17.9166H14.2085C13.9243 17.9166 13.6493 18.0541 13.4752 18.2833L12.1002 20.1166C11.4952 20.9233 10.5052 20.9233 9.90016 20.1166L8.52516 18.2833C8.3785 18.0816 8.03933 17.9166 7.79183 17.9166Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6633 10.5833H14.6715"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9958 10.5833H11.004"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.3283 10.5833H7.33653"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Manage Users</span>
              </li>
            </ul>
            <br />

            <ul class="side-nav">
              <span class="side-nav__header">Preferences</span>
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.75 8.85081V14.14C2.75 16.0833 2.75 16.0833 4.58333 17.3208L9.625 20.2358C10.3858 20.6758 11.6233 20.6758 12.375 20.2358L17.4167 17.3208C19.25 16.0833 19.25 16.0833 19.25 14.1491V8.85081C19.25 6.91664 19.25 6.91664 17.4167 5.67914L12.375 2.76414C11.6233 2.32414 10.3858 2.32414 9.625 2.76414L4.58333 5.67914C2.75 6.91664 2.75 6.91664 2.75 8.85081Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5C13.75 9.98122 12.5188 8.75 11 8.75C9.48122 8.75 8.25 9.98122 8.25 11.5C8.25 13.0188 9.48122 14.25 11 14.25Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Settings</span>
              </li>
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0002 20.6666C16.0418 20.6666 20.1668 16.5416 20.1668 11.5C20.1668 6.45831 16.0418 2.33331 11.0002 2.33331C5.9585 2.33331 1.8335 6.45831 1.8335 11.5C1.8335 16.5416 5.9585 20.6666 11.0002 20.6666Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 7.83331V12.4166"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9951 15.1667H11.0034"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Help &amp; Center</span>
              </li>
              <li class="side-nav__item">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33309 20.1667H14.6664C18.3514 20.1667 19.0114 18.6908 19.2039 16.8942L19.8914 9.56083C20.1389 7.32417 19.4973 5.5 15.5831 5.5H6.41643C2.50226 5.5 1.86059 7.32417 2.10809 9.56083L2.79559 16.8942C2.98809 18.6908 3.64809 20.1667 7.33309 20.1667Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.3335 5.49998V4.76665C7.3335 3.14415 7.3335 1.83331 10.2668 1.83331H11.7335C14.6668 1.83331 14.6668 3.14415 14.6668 4.76665V5.49998"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8332 11.9167V12.8333C12.8332 12.8425 12.8332 12.8425 12.8332 12.8517C12.8332 13.8508 12.824 14.6667 10.9998 14.6667C9.18484 14.6667 9.1665 13.86 9.1665 12.8608V11.9167C9.1665 11 9.1665 11 10.0832 11H11.9165C12.8332 11 12.8332 11 12.8332 11.9167Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.846 10.0833C17.7285 11.6233 15.3085 12.54 12.8335 12.8516"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.40186 10.3308C4.46436 11.7425 6.79269 12.595 9.16686 12.8608"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Dark Mode</span>
              </li>
            </ul>
          </div>

          <ul class="side-nav">
            <li class="side-nav__item last-item">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.8999 8.05999C9.2099 4.45999 11.0599 2.98999 15.1099 2.98999H15.2399C19.7099 2.98999 21.4999 4.77999 21.4999 9.24999V15.77C21.4999 20.24 19.7099 22.03 15.2399 22.03H15.1099C11.0899 22.03 9.2399 20.58 8.9099 17.04"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0001 12.5H3.62012"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.85 9.14999L2.5 12.5L5.85 15.85"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Log Out</span>
            </li>
          </ul>
        </nav>

        <main class="main-content">
          <div class="top-container">
            <div action="#" class="search">
              <svg
                class="search__icon"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5418 19.25C15.3513 19.25 19.2502 15.3512 19.2502 10.5417C19.2502 5.73223 15.3513 1.83337 10.5418 1.83337C5.73235 1.83337 1.8335 5.73223 1.8335 10.5417C1.8335 15.3512 5.73235 19.25 10.5418 19.25Z"
                  stroke="#596780"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.1668 20.1667L18.3335 18.3334"
                  stroke="#596780"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="text"
                class="search__input"
                placeholder="Search something here"
              />
            </div>
            <div class="user-nav">
              <button class="notification">
                <svg
                  class="notification__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </button>
              <div class="user-info">
                <svg
                  class="user-image"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0321 19C8.67459 19 6.80643 17.2316 6.80643 14V13H17.1158L17.1434 13.9715C17.2358 17.2145 15.4003 19 12.0321 19ZM15.0875 15C14.8526 16.3955 13.9089 17 12.0321 17C10.1563 17 9.18179 16.3902 8.89677 15H15.0875ZM14 8H17V10H14V8ZM10 8H7V10H10V8Z"
                    fill="black"
                  />
                </svg>
                <span class="user-name">Admin</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837"
                  stroke="#596780"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Insurance Campanies */}
          <div class="box transaction-box">
            <div class="header-container">
              <h3 class="section-header">Transaction History</h3>
              <div class="date-selector">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1.5V3.75"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 1.5V3.75"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.625 6.8175H15.375"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.7713 10.275H11.778"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.7713 12.525H11.778"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99686 10.275H9.00359"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99686 12.525H9.00359"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.22049 10.275H6.22723"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.22049 12.525H6.22723"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>1 Jan - 1 Feb 2022</span>
              </div>
            </div>
            <table class="transaction-history">
              <tr>
                <th>Transactions</th>
                <th>
                  Date
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                      stroke="#90A3BF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </th>
                <th>
                  Amount
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                      stroke="#90A3BF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </th>
                <th>
                  Status
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                      stroke="#90A3BF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </th>
              </tr>
              <tr>
                <td>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="18"
                      fill="#33B938"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M24.875 21.8125V23.875H11.125V21.8125C11.125 21.4344 11.4344 21.125 11.8125 21.125H24.1875C24.5656 21.125 24.875 21.4344 24.875 21.8125Z"
                      fill="#33B938"
                      stroke="#33B938"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.6875 20.625V16.8125H14.0625V20.625H13.6875Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                    <path
                      d="M16.4375 20.625V16.8125H16.8125V20.625H16.4375Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                    <path
                      d="M19.1875 20.625V16.8125H19.5625V20.625H19.1875Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                    <path
                      d="M21.9375 20.625V16.8125H22.3125V20.625H21.9375Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                    <path
                      d="M25.5625 23.8906H10.4375C10.4367 23.8906 10.436 23.8905 10.4346 23.89C10.4328 23.8892 10.4302 23.8876 10.4275 23.885C10.4249 23.8823 10.4233 23.8797 10.4225 23.8779C10.422 23.8765 10.4219 23.8758 10.4219 23.875C10.4219 23.8742 10.422 23.8735 10.4225 23.8721C10.4233 23.8703 10.4249 23.8677 10.4275 23.865C10.4302 23.8624 10.4328 23.8608 10.4346 23.86C10.436 23.8595 10.4367 23.8594 10.4375 23.8594H25.5625C25.5633 23.8594 25.564 23.8595 25.5654 23.86C25.5672 23.8608 25.5698 23.8624 25.5725 23.865C25.5751 23.8677 25.5767 23.8703 25.5775 23.8721C25.578 23.8735 25.5781 23.8742 25.5781 23.875C25.5781 23.8758 25.578 23.8765 25.5775 23.8779C25.5767 23.8797 25.5751 23.8823 25.5725 23.885C25.5698 23.8876 25.5672 23.8892 25.5654 23.89C25.564 23.8905 25.5633 23.8906 25.5625 23.8906Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                    <path
                      d="M18.058 10.691C18.0659 10.6923 18.0707 10.6934 18.0725 10.6939L24.2562 13.1674C24.2675 13.1719 24.302 13.1932 24.335 13.2419C24.368 13.2904 24.375 13.33 24.375 13.3425V15.625C24.375 15.727 24.2895 15.8125 24.1875 15.8125H11.8125C11.7105 15.8125 11.625 15.727 11.625 15.625V13.3425C11.625 13.33 11.632 13.2904 11.665 13.2419C11.698 13.1932 11.7325 13.1719 11.7438 13.1674L17.9275 10.6939C17.9293 10.6934 17.9341 10.6923 17.942 10.691C17.9573 10.6886 17.9775 10.6869 18 10.6869C18.0225 10.6869 18.0427 10.6886 18.058 10.691ZM16.4688 13.5625C16.4688 14.4093 17.1532 15.0938 18 15.0938C18.8468 15.0938 19.5312 14.4093 19.5312 13.5625C19.5312 12.7157 18.8468 12.0313 18 12.0313C17.1532 12.0313 16.4688 12.7157 16.4688 13.5625Z"
                      fill="#33B938"
                      stroke="#33B938"
                    />
                  </svg>
                  Bank Transfer
                </td>
                <td>Jan 01,2022</td>
                <td>$2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#BCE455"
                      fill-opacity="0.3"
                    />
                    <circle cx="8" cy="8" r="4" fill="#7FB519" />
                  </svg>
                  Completed
                </td>
              </tr>
              <tr>
                <td>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#EBF4FF" />
                    <g clip-path="url(#clip0_129_9482)">
                      <path
                        d="M23.9945 10.0539C23.0966 9.03042 21.4735 8.59164 19.3971 8.59164H13.3706C13.1652 8.59165 12.9665 8.66495 12.8102 8.79835C12.654 8.93176 12.5505 9.11653 12.5183 9.31943L10.009 25.234C9.95908 25.5479 10.2021 25.832 10.5202 25.832H14.2407L15.1751 19.9054L15.1461 20.091C15.2126 19.6721 15.5709 19.3631 15.9952 19.3631H17.7632C21.2364 19.3631 23.9559 17.9524 24.7504 13.8714C24.7739 13.7507 24.7944 13.6333 24.812 13.5185C24.7118 13.4654 24.7118 13.4654 24.812 13.5185C25.0486 12.0101 24.8104 10.9834 23.9945 10.0539Z"
                        fill="#27346A"
                      />
                      <path
                        d="M16.5987 12.9751C16.7004 12.9267 16.8116 12.9016 16.9243 12.9017H21.6489C22.2084 12.9017 22.7302 12.9381 23.2071 13.0148C23.3405 13.0361 23.4733 13.0615 23.6051 13.091C23.792 13.1322 23.9768 13.1827 24.1587 13.2422C24.3931 13.3205 24.6114 13.4117 24.8121 13.5185C25.0486 12.0096 24.8104 10.9834 23.9945 10.0539C23.0961 9.03042 21.4735 8.59164 19.3971 8.59164H13.3701C12.9458 8.59164 12.5848 8.90057 12.5183 9.31943L10.009 25.2335C9.95908 25.5478 10.2021 25.8316 10.5196 25.8316H14.2407L16.1792 13.5383C16.1983 13.4175 16.2464 13.3031 16.3195 13.205C16.3926 13.1069 16.4884 13.028 16.5987 12.9751Z"
                        fill="#27346A"
                      />
                      <path
                        d="M24.7503 13.8714C23.9559 17.9518 21.2364 19.3631 17.7632 19.3631H15.9947C15.5704 19.3631 15.212 19.6721 15.1461 20.091L13.9837 27.4601C13.9402 27.7347 14.1526 27.9836 14.4305 27.9836H17.5668C17.7465 27.9835 17.9202 27.9194 18.0568 27.8027C18.1934 27.686 18.2839 27.5244 18.3119 27.3469L18.3425 27.1871L18.9336 23.4408L18.9717 23.2338C18.9997 23.0563 19.0902 22.8947 19.2268 22.778C19.3634 22.6613 19.5371 22.5971 19.7167 22.5971H20.1861C23.2243 22.5971 25.6032 21.3628 26.2984 17.7931C26.5886 16.3013 26.4384 15.0558 25.6708 14.1809C25.438 13.916 25.1488 13.6971 24.812 13.5185C24.7938 13.6338 24.774 13.7507 24.7503 13.8714Z"
                        fill="#2790C3"
                      />
                      <path
                        d="M23.98 13.187C23.8562 13.1508 23.7311 13.1188 23.6051 13.091C23.4732 13.062 23.3405 13.0368 23.2071 13.0154C22.7297 12.9381 22.2083 12.9016 21.6483 12.9016H16.9242C16.8115 12.9014 16.7002 12.9267 16.5986 12.9757C16.4882 13.0284 16.3923 13.1072 16.3192 13.2053C16.2461 13.3035 16.198 13.418 16.1791 13.5389L15.175 19.9054L15.146 20.091C15.212 19.6721 15.5703 19.3631 15.9947 19.3631H17.7632C21.2364 19.3631 23.9559 17.9524 24.7503 13.8714C24.7739 13.7507 24.7938 13.6338 24.812 13.5185C24.6108 13.4123 24.3931 13.3205 24.1586 13.2428C24.0994 13.2231 24.0399 13.2046 23.9801 13.187"
                        fill="#1F264F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_9482">
                        <rect
                          width="16.4967"
                          height="19.4609"
                          fill="white"
                          transform="translate(10 8.53906)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Paypal Account
                </td>
                <td>Jan 04,2022</td>
                <td>$2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#DBA32A"
                      fill-opacity="0.14"
                    />
                    <circle cx="8" cy="8" r="4" fill="#DBA32A" />
                  </svg>
                  Pending
                </td>
              </tr>
              <tr>
                <td>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#EAECF1" />
                    <g clip-path="url(#clip0_129_9497)">
                      <path
                        d="M14.6667 30C16.6907 30 18.3333 28.3573 18.3333 26.3333V22.6667H14.6667C12.6427 22.6667 11 24.3093 11 26.3333C11 28.3573 12.6427 30 14.6667 30Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M11 19C11 16.976 12.6427 15.3333 14.6667 15.3333H18.3333V22.6667H14.6667C12.6427 22.6667 11 21.024 11 19Z"
                        fill="#A259FF"
                      />
                      <path
                        d="M11 11.6667C11 9.64267 12.6427 8 14.6667 8H18.3333V15.3333H14.6667C12.6427 15.3333 11 13.6907 11 11.6667Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M18.3335 8H22.0002C24.0242 8 25.6668 9.64267 25.6668 11.6667C25.6668 13.6907 24.0242 15.3333 22.0002 15.3333H18.3335V8Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M25.6668 19C25.6668 21.024 24.0242 22.6667 22.0002 22.6667C19.9762 22.6667 18.3335 21.024 18.3335 19C18.3335 16.976 19.9762 15.3333 22.0002 15.3333C24.0242 15.3333 25.6668 16.976 25.6668 19Z"
                        fill="#1ABCFE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_9497">
                        <rect
                          width="14.6667"
                          height="22"
                          fill="white"
                          transform="translate(11 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Bank Transfer
                </td>
                <td>Jan 06,2022</td>
                <td>$2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#DB2719"
                      fill-opacity="0.3"
                    />
                    <circle cx="8" cy="8" r="4" fill="#DB2719" />
                  </svg>
                  On Hold
                </td>
              </tr>
            </table>
          </div>
        </main>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </div>
  );
}

export default Campanies;
