import React from "react";

type Props = {};

const JsvectormapPage = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-transparent">
            <div className="card-header">
              <h4 className="card-title text-center">Vector Maps</h4>
              <p className="card-category text-center">
                We use the
                <a
                  href="https://github.com/themustafaomar/jsvectormap"
                  target="_blank"
                >
                  Jsvectormap
                </a>
                plugin to create vector maps.
              </p>
            </div>
            <div className="card-body">
              <div className="col-md-10 ms-auto me-auto">
                <div className="mapcontainer">
                  <div
                    id="world-map"
                    className="w-100"
                    style={{ height: 450 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsvectormapPage;
