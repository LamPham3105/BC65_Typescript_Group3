import React from "react";
import { NavLink } from "react-router-dom";

const CustomizeCardManage: React.FC = () => {
  return (
    <>
      <h3 className="fw-bold mb-3">Customized Card</h3>
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card card-profile">
              <div
                className="card-header"
                style={{ backgroundImage: "url(assets/img/blogpost.jpg)" }}
              >
                <div className="profile-picture">
                  <div className="avatar avatar-xl">
                    <img
                      src="assets/img/profile.jpg"
                      alt="Profile"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="user-profile text-center">
                  <div className="name">Hizrian, 19</div>
                  <div className="job">Frontend Developer</div>
                  <div className="desc">A man who hates loneliness</div>
                  <div className="social-media">
                    <NavLink
                      to="#"
                      className="btn btn-info btn-twitter btn-sm btn-link"
                    >
                      <span className="btn-label just-icon">
                        <i className="icon-social-twitter"></i>
                      </span>
                    </NavLink>
                    <NavLink
                      to="#"
                      className="btn btn-primary btn-sm btn-link"
                      rel="publisher"
                    >
                      <span className="btn-label just-icon">
                        <i className="icon-social-facebook"></i>
                      </span>
                    </NavLink>
                    <NavLink
                      to="#"
                      className="btn btn-danger btn-sm btn-link"
                      rel="publisher"
                    >
                      <span className="btn-label just-icon">
                        <i className="icon-social-instagram"></i>
                      </span>
                    </NavLink>
                  </div>
                  <div className="view-profile">
                    <NavLink to="#" className="btn btn-secondary w-100">
                      View Full Profile
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row user-stats text-center">
                  <div className="col">
                    <div className="number">125</div>
                    <div className="title">Post</div>
                  </div>
                  <div className="col">
                    <div className="number">25K</div>
                    <div className="title">Followers</div>
                  </div>
                  <div className="col">
                    <div className="number">134</div>
                    <div className="title">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeCardManage;
