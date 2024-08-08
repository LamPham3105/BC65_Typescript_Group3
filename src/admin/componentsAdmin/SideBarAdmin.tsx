import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SideBarAdmin = (props: Props) => {
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right" />
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left" />
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt" />
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <a
                href="/admin/dashboard-admin"
                className="collapsed"
                aria-expanded="false"
              >
                <i className="fas fa-home" />
                <p>Dashboard</p>
                <span className="caret" />
              </a>
            </li>
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h" />
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#forms">
                <i className="fas fa-pen-square" />
                <p>Forms</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="forms">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="/admin/form">
                      <span className="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#tables">
                <i className="fas fa-table" />
                <p>Tables</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="tables">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="/admin/table">
                      <span className="sub-item">User</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/table-room">
                      <span className="sub-item">Room</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/table-location">
                      <span className="sub-item">Location</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/table-comment">
                      <span className="sub-item">Comment</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/table-booking-room">
                      <span className="sub-item">Booking Room</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#maps">
                <i className="fas fa-map-marker-alt" />
                <p>Maps</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="maps">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="/admin/map">
                      <span className="sub-item">Google Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="/admin/manage-admin">
                <i className="fas fa-desktop" />
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#submenu">
                <i className="fas fa-bars" />
                <p>Menu Levels</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav2">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="sub-item">Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
