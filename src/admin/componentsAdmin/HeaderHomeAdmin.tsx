import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useRoute from "../../hook/useRoute";

const HeaderHomeAdmin: React.FC = () => {
  const { navigate } = useRoute();

  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  return (
    <div className="main-header">
      <div className="main-header-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt" />
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      {/* Navbar Header */}
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
            </div>
          </nav>
          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-user dropdown hidden-caret">
              <a
                className="dropdown-toggle profile-pic"
                data-bs-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <div className="avatar-sm">
                  <img
                    src={userLogin?.user.avatar}
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi,</span>
                  <span className="fw-bold">{userLogin?.user.name}</span>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img
                          src={userLogin?.user.avatar}
                          alt="image profile"
                          className="avatar-img rounded"
                        />
                      </div>
                      <div className="u-text">
                        <h4>{userLogin?.user.name}</h4>
                        <p className="text-muted">{userLogin?.user.email}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/info-user");
                      }}
                    >
                      My Profile
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
};

export default HeaderHomeAdmin;
