import React from "react";
import { NavLink } from "react-router-dom";

const CardManage = () => {
  return (
    <>
      <h3 className="fw-bold mb-3">Card</h3>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-primary card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Visitors</p>
                    <h4 className="card-title">1,294</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-info card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-user-check"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Subscribers</p>
                    <h4 className="card-title">1303</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-success card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Sales</p>
                    <h4 className="card-title">$ 1,345</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-secondary card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="far fa-check-circle"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Order</p>
                    <h4 className="card-title">576</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card card-secondary">
            <div className="card-body skew-shadow">
              <h1>3,072</h1>
              <h5 className="op-8">Total conversations</h5>
              <div className="pull-right">
                <h3 className="fw-bold op-8">88%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-secondary bg-secondary-gradient">
            <div className="card-body bubble-shadow">
              <h1>188</h1>
              <h5 className="op-8">Total Sales</h5>
              <div className="pull-right">
                <h3 className="fw-bold op-8">25%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-secondary bg-secondary-gradient">
            <div className="card-body curves-shadow">
              <h1>12</h1>
              <h5 className="op-8">New Users</h5>
              <div className="pull-right">
                <h3 className="fw-bold op-8">70%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body pb-0">
              <div className="h1 fw-bold float-end text-primary">+5%</div>
              <h2 className="mb-2">17</h2>
              <p className="text-muted">Users online</p>
              <div className="pull-in sparkline-fix">
                <div id="lineChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body pb-0">
              <div className="h1 fw-bold float-end text-danger">-3%</div>
              <h2 className="mb-2">27</h2>
              <p className="text-muted">New Users</p>
              <div className="pull-in sparkline-fix">
                <div id="lineChart2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body pb-0">
              <div className="h1 fw-bold float-end text-warning">+7%</div>
              <h2 className="mb-2">213</h2>
              <p className="text-muted">Transactions</p>
              <div className="pull-in sparkline-fix">
                <div id="lineChart3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-success">
                6%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-3">New Tickets</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-danger">
                -3%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">17</div>
              <div className="text-muted mb-3">Closed Today</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-success">
                9%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">7</div>
              <div className="text-muted mb-3">New Replies</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-success">
                3%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">27.3K</div>
              <div className="text-muted mb-3">Followers</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-danger">
                -2%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">$95</div>
              <div className="text-muted mb-3">Daily Earnings</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-end text-danger">
                -1%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">621</div>
              <div className="text-muted mb-3">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManage;
