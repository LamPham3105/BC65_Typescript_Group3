import React from "react";

type Props = {};

const FooterHomeAdmin = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container-fluid d-flex justify-content-between">
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                AIRBNB
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterHomeAdmin;
