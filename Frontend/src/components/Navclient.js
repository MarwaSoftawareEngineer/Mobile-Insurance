import React from "react";
import "./Navclient.css";
import { Link } from "react-router-dom";

const Navclient = () => {
  return (
    <div className="start">
      <div class="dashboard">
        <div class="left-side-bar">
          <div class="menu">
            <h3>
              Mobile<span className="dot primary">Insurance</span>
            </h3>
            <ul>
              <li>
                <i class="fa fa-edit"></i>
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
                <i class="fa fa-edit"></i>
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
                <i class="fa fa-edit"></i>
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
                <i class="fa fa-edit"></i>
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
                <i class="fa fa-edit"></i>
                <span><Link
                    to="/storeclient"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    My Account
                  </Link></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-container">
          <div class="top-bar">
            <div class="search-input">
              <i class="fa fa-search"></i>
              <input placeholder="Search..." />
            </div>
            <div class="top-bar-btn">
              <i class="fa fa-bell"></i>
            </div>
            <div class="top-bar-profile">
              <div class="profile-avatar">
                <img src="https://th.bing.com/th/id/OIF.lDTQAk3Z0IjtFVa8RQk9DA?rs=1&pid=ImgDetMain" />
              </div>
              <p>User</p>
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
          {/* <div class="main-view">
          <button className="btnassurance">Buy Insurance for My Smartphone</button>
          <br />
            <div class="d-card blue">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-tint"></i>
                </div>
                <p>Water Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card green">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-leaf"></i>
                </div>
                <p>Earth Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card red">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-fire"></i>
                </div>
                <p>Fire Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card blue">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-tint"></i>
                </div>
                <p>Water Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card green">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-leaf"></i>
                </div>
                <p>Earth Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card red">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-fire"></i>
                </div>
                <p>Fire Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card blue">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-tint"></i>
                </div>
                <p>Water Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card green">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-leaf"></i>
                </div>
                <p>Earth Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-card red">
              <div class="card-header">
                <div class="icon">
                  <i class="fa fa-fire"></i>
                </div>
                <p>Fire Card</p>
              </div>
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus
                </p>
              </div>
              <div class="card-actions">
                <i class="fa fa-eye"></i>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navclient;
