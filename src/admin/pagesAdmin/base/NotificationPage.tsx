import React from "react";

type Props = {};

const NotificationPage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Notifications</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Base</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Notifications</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Bootstrap Notify</div>
                <div className="card-category">
                  Turn standard bootstrap alerts into "growl" like notifications
                  from
                  <a
                    className="link"
                    href="http://bootstrap-notify.remabledesigns.com/"
                  >
                    Bootstrap Notify
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="form">
                  <div className="form-group form-show-notify row">
                    <div className="col-lg-3 col-md-3 col-sm-4 text-end">
                      <label>Placement :</label>
                    </div>
                    <div className="col-lg-4 col-md-9 col-sm-8">
                      <select
                        className="form-select input-fixed"
                        id="notify_placement_from"
                      >
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                      </select>
                      <select
                        className="form-select input-fixed"
                        id="notify_placement_align"
                      >
                        <option value="left">Left</option>
                        <option value="right" selected>
                          Right
                        </option>
                        <option value="center">Center</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-show-notify row">
                    <div className="col-lg-3 col-md-3 col-sm-4 text-end">
                      <label>State :</label>
                    </div>
                    <div className="col-lg-4 col-md-9 col-sm-8">
                      <select
                        className="form-select input-fixed"
                        id="notify_state"
                      >
                        <option value="default">Default</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="info">Info</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="danger">Danger</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-show-notify row">
                    <div className="col-lg-3 col-md-3 col-sm-4 text-end">
                      <label>Style :</label>
                    </div>
                    <div className="col-lg-4 col-md-9 col-sm-8">
                      <select
                        className="form-select input-fixed"
                        id="notify_style"
                      >
                        <option value="plain">Plain</option>
                        <option value="withicon">With Icon</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="form">
                  <div className="form-group from-show-notify row">
                    <div className="col-lg-3 col-md-3 col-sm-12" />
                    <div className="col-lg-4 col-md-9 col-sm-12">
                      <button id="displayNotif" className="btn btn-success">
                        Display
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
