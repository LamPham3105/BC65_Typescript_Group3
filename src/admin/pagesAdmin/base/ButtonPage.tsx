import React from "react";

type Props = {};

const ButtonPage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Buttons</h3>
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
              <a href="#">Buttons</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button Original</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button className="btn btn-black">Default</button>
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                  <button className="btn btn-info">Info</button>
                  <button className="btn btn-success">Success</button>
                  <button className="btn btn-warning">Warning</button>
                  <button className="btn btn-danger">Danger</button>
                  <button className="btn btn-link">Link</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button with Label</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button className="btn btn-black">
                    <span className="btn-label">
                      <i className="fa fa-archive" />
                    </span>
                    Default
                  </button>
                  <button className="btn btn-primary">
                    <span className="btn-label">
                      <i className="fa fa-bookmark" />
                    </span>
                    Primary
                  </button>
                  <button className="btn btn-secondary">
                    <span className="btn-label">
                      <i className="fa fa-plus" />
                    </span>
                    Secondary
                  </button>
                  <button className="btn btn-info">
                    <span className="btn-label">
                      <i className="fa fa-info" />
                    </span>
                    Info
                  </button>
                  <button className="btn btn-success">
                    <span className="btn-label">
                      <i className="fa fa-check" />
                    </span>
                    Success
                  </button>
                  <button className="btn btn-warning">
                    <span className="btn-label">
                      <i className="fa fa-exclamation-circle" />
                    </span>
                    Warning
                  </button>
                  <button className="btn btn-danger">
                    <span className="btn-label">
                      <i className="fa fa-heart" />
                    </span>
                    Danger
                  </button>
                  <button className="btn btn-link">
                    <span className="btn-label">
                      <i className="fa fa-link" />
                    </span>
                    Link
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button Icon</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-black"
                  >
                    <i className="fa fa-align-left" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-primary"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-secondary"
                  >
                    <i className="fa fa-bookmark" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-info"
                  >
                    <i className="fa fa-info" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-success"
                  >
                    <i className="fa fa-check" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-warning"
                  >
                    <i className="fa fa-exclamation-circle" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-round btn-danger"
                  >
                    <i className="fa fa-heart" />
                  </button>
                  <button type="button" className="btn btn-icon btn-link">
                    <i className="fa fa-link" />
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Disabled Button</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button className="btn btn-black" disabled>
                    Default
                  </button>
                  <button className="btn btn-primary" disabled>
                    Primary
                  </button>
                  <button className="btn btn-secondary" disabled>
                    Secondary
                  </button>
                  <button className="btn btn-info" disabled>
                    Info
                  </button>
                  <button className="btn btn-success" disabled>
                    Success
                  </button>
                  <button className="btn btn-warning" disabled>
                    Warning
                  </button>
                  <button className="btn btn-danger" disabled>
                    Danger
                  </button>
                  <button className="btn btn-link" disabled>
                    Link
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button Size</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button className="btn btn-primary btn-lg">Large</button>
                  <button className="btn btn-primary">Normal</button>
                  <button className="btn btn-primary btn-sm">Small</button>
                  <button className="btn btn-primary btn-xs">
                    Extra Small
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button Type</h4>
              </div>
              <div className="card-body">
                <p className="demo">
                  <button className="btn btn-primary">Normal</button>
                  <button className="btn btn-primary btn-border">Border</button>
                  <button className="btn btn-primary btn-round">Round</button>
                  <button className="btn btn-primary btn-border btn-round">
                    Round
                  </button>
                  <button className="btn btn-primary btn-link">Link</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bootstrap Dropdown</h4>
              </div>
              <div className="card-body">
                <div className="demo">
                  <div className="btn-group dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      DropDown
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group dropup">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      DropUp
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group dropend">
                    <button
                      type="button"
                      className="btn btn-success btn-round dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      DropRight
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="btn btn-black btn-border dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      DropLeft
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Badge</h4>
              </div>
              <div className="card-body">
                <span className="badge badge-count">Count</span>
                <span className="badge badge-black">Default</span>
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-danger">Danger</span>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Nav Pills</h4>
              </div>
              <div className="card-body">
                <ul className="nav nav-pills nav-primary">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Pagination</h4>
              </div>
              <div className="card-body">
                <div className="demo">
                  <ul className="pagination pg-primary">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
