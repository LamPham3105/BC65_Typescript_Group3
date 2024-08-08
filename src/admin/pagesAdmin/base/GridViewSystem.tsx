import React from "react";

type Props = {};

const GridViewSystem = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Grid System</h3>
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
              <a href="#">Grid System</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mt-3">XL Grid</h4>
            <div className="row row-demo-grid">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-xl-4</code>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-xl-4</code>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-xl-4</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">LG Grid (Collapsed at 992px)</h4>
            <div className="row row-demo-grid">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-lg-4</code>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-lg-4</code>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-lg-4</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">MD Grid (Collapsed at 768px)</h4>
            <div className="row row-demo-grid">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-md-4</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-md-4</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-md-4</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">SM Grid (Collapsed at 576px)</h4>
            <div className="row row-demo-grid">
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-sm-4</code>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-sm-4</code>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-sm-4</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">XS Grid</h4>
            <div className="row row-demo-grid">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-4</code>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-4</code>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <code>.col-4</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">Equality Width</h4>
            <div className="row row-demo-grid">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-demo-grid">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">Setting one column width</h4>
            <div className="row row-demo-grid">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <code>col-6</code>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <code>col</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">
              Mix and Match (Showing different sizes on different screens)
            </h4>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div className="row row-demo-grid">
              <div className="col-12 col-md-8">
                <div className="card">
                  <div className="card-body">
                    <code>col-12 col-md-8</code>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <code>col-6 col-md-6</code>
                  </div>
                </div>
              </div>
            </div>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <div className="row row-demo-grid">
              <div className="col-sm-6 col-md-3">
                <div className="card">
                  <div className="card-body">
                    <code>col-sm-6 col-md-3</code>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card">
                  <div className="card-body">
                    <code>col-sm-6 col-md-3</code>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card">
                  <div className="card-body">
                    <code>col-sm-6 col-md-3</code>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card">
                  <div className="card-body">
                    <code>col-sm-6 col-md-3</code>
                  </div>
                </div>
              </div>
            </div>
            {/* Columns are always 50% wide, on mobile and desktop */}
            <div className="row row-demo-grid">
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <code>col-6</code>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <code>col-6</code>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="card-title">
              Offset Grid (Adding some space when needed)
            </h4>
            <div className="row row-demo-grid">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <code>col-md-4</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ms-auto">
                <div className="card">
                  <div className="card-body text-center">
                    <code>col-md-4 ms-auto</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-demo-grid">
              <div className="col-md-4 ms-auto me-auto">
                <div className="card">
                  <div className="card-body text-center">
                    <code>col-md-4 ms-auto me-auto</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ms-auto me-auto">
                <div className="card">
                  <div className="card-body text-center">
                    <code>col-md-4 ms-auto me-auto</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-demo-grid">
              <div className="col-md-6 ms-auto me-auto">
                <div className="card">
                  <div className="card-body text-center">
                    <code>col-md-6 ms-auto me-auto</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid d-flex justify-content-between">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="http://www.themekita.com">
                  ThemeKita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Help{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Licenses{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            2024, made with <i className="fa fa-heart heart text-danger" /> by
            <a href="http://www.themekita.com">ThemeKita</a>
          </div>
          <div>
            Distributed by
            <a target="_blank" href="https://themewagon.com/">
              ThemeWagon
            </a>
            .
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GridViewSystem;
