import React from "react";
import { NavLink } from "react-router-dom";

const PricingManage: React.FC = () => {
  return (
    <>
      <h3 className="fw-bold mb-3">Pricing</h3>
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-md-3 ps-md-0">
          <div className="card-pricing2 card-success">
            <div className="pricing-header">
              <h3 className="fw-bold mb-3">Standard</h3>
              <span className="sub-title">Lorem ipsum</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">
                  10.<span>99</span>
                </span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>50GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50GB Monthly Bandwidth</li>
              <li className="disable">10 Subdomains</li>
              <li className="disable">15 Domains</li>
            </ul>
            <NavLink
              to="#"
              className="btn btn-success btn-border btn-lg w-75 fw-bold mb-3"
            >
              Sign up
            </NavLink>
          </div>
        </div>
        <div className="col-md-3 ps-md-0 pe-md-0">
          <div className="card-pricing2 card-primary">
            <div className="pricing-header">
              <h3 className="fw-bold mb-3">Business</h3>
              <span className="sub-title">Lorem ipsum</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">
                  20.<span>99</span>
                </span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>60GB Disk Space</li>
              <li>60 Email Accounts</li>
              <li>60GB Monthly Bandwidth</li>
              <li>15 Subdomains</li>
              <li className="disable">20 Domains</li>
            </ul>
            <NavLink
              to="#"
              className="btn btn-primary btn-border btn-lg w-75 fw-bold mb-3"
            >
              Sign up
            </NavLink>
          </div>
        </div>
        <div className="col-md-3 pe-md-0">
          <div className="card-pricing2 card-secondary">
            <div className="pricing-header">
              <h3 className="fw-bold mb-3">Premium</h3>
              <span className="sub-title">Lorem ipsum</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">
                  30.<span>99</span>
                </span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <NavLink
              to="#"
              className="btn btn-secondary btn-border btn-lg w-75 fw-bold mb-3"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingManage;
