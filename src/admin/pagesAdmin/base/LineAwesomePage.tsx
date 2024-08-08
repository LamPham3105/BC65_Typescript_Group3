import React from "react";

type Props = {};

const LineAwesomePage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Icons</h3>
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
              <a href="#">Line Awesome</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Font Awesome Icons</div>
                <div className="card-category">
                  Modern Font Icon from
                  <a className="link" href="https://fontawesome.com">
                    Font Awesome
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div id="row-demo-icon" className="row" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineAwesomePage;
