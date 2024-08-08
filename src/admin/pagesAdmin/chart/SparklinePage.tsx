import React from "react";

type Props = {};

const SparklinePage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <h3 className="fw-bold mb-3">jQuery Sparkline</h3>
        <div className="page-category pe-md-5">
          This jQuery plugin generates sparklines (small inline charts) directly
          in the browser using data supplied either inline in the HTML, or via
          javascript. Please checkout their
          <a
            href="https://omnipotent.net/jquery.sparkline/#s-docs"
            target="_blank"
          >
            full documentation
          </a>
          .
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center p-3">
                  <div id="lineChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Bar Chart</div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center p-3">
                  <div id="barChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Tristate Chart</div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center p-3">
                  <div id="sparktristateChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Discrete Chart</div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center p-3">
                  <div id="discreteChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Pie Chart</div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center p-3">
                  <div id="pieChart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparklinePage;
