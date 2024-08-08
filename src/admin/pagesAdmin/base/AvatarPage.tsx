import React from "react";

type Props = {};

const AvatarPage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Avatars</h3>
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
              <a href="#">Avatars</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Sizing</h4>
              </div>
              <div className="card-body">
                <p className="demo"></p>
                <div className="avatar avatar-xxl">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-xl">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-lg">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-sm">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <p />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Status Indicator</h4>
              </div>
              <div className="card-body">
                <p className="demo"></p>
                <div className="avatar avatar-online">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-offline">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="avatar avatar-away">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <p />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Shape</h4>
              </div>
              <div className="card-body">
                <p className="demo"></p>
                <div className="avatar">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded"
                  />
                </div>
                <div className="avatar">
                  <img
                    src="../admin/img/jm_denis.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <p />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Group</h4>
              </div>
              <div className="card-body">
                <p className="demo"></p>
                <div className="avatar-group">
                  <div className="avatar">
                    <img
                      src="../admin/img/jm_denis.jpg"
                      alt="..."
                      className="avatar-img rounded-circle border border-white"
                    />
                  </div>
                  <div className="avatar">
                    <img
                      src="../admin/img/chadengle.jpg"
                      alt="..."
                      className="avatar-img rounded-circle border border-white"
                    />
                  </div>
                  <div className="avatar">
                    <img
                      src="../admin/img/mlane.jpg"
                      alt="..."
                      className="avatar-img rounded-circle border border-white"
                    />
                  </div>
                  <div className="avatar">
                    <span className="avatar-title rounded-circle border border-white">
                      CF
                    </span>
                  </div>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;
