import React from "react";

type Props = {};

const SweetAlertPage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Alert</h3>
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
              <a href="#">Sweet Alert</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Sweet Alert</div>
                <div className="card-category">
                  <a href="https://sweetalert.js.org/">SweetAlert</a> makes
                  popup messages easy and pretty.
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Basic alert
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          id="alert_demo_1"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Alert title and text
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-focus"
                          id="alert_demo_2"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Enable <code>warning</code>, <code>error</code>,
                        <code>success</code>, and <code>info</code> state icons
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          id="alert_demo_3_1"
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          id="alert_demo_3_2"
                        >
                          Error
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          id="alert_demo_3_3"
                        >
                          Success
                        </button>
                        <button
                          type="button"
                          className="btn btn-info"
                          id="alert_demo_3_4"
                        >
                          Info
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Change confirm button text and class
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          id="alert_demo_4"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Modal window with input field
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          id="alert_demo_5"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        Closes the modal after a certain amount of time
                        (specified in ms)
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="alert_demo_6"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        A warning message, with a function attached to the
                        "Confirm" Button
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          id="alert_demo_7"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%", verticalAlign: "middle" }}>
                        By passing a parameter, you can execute something else
                        for cancel
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          id="alert_demo_8"
                        >
                          Show me
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetAlertPage;
