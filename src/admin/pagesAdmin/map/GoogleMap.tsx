import React from "react";
import { NavLink } from "react-router-dom";

const GoogleMap: React.FC = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header mb-0">
          <h3 className="fw-bold mb-3">Google Maps</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <NavLink to="#">
                <i className="icon-home"></i>
              </NavLink>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <NavLink to="#">Maps</NavLink>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <NavLink to="#">Google Maps</NavLink>
            </li>
          </ul>
        </div>
        <div className="page-category">Help users find your address.</div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Our Location</div>
              </div>
              <div className="card-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.389453262238!2d106.75361861134449!3d10.857954357638508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270cb59e61b5%3A0x2921e07100a71953!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggQ3liZXJTb2Z0IC0gQ8ahIFPhu58gUXXhuq1uIFRo4bunIMSQ4bupYywgVFAuSENN!5e0!3m2!1svi!2s!4v1720960648076!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
