import React from "react";
import { NavLink } from "react-router-dom";

const TimelineManage: React.FC = () => {
  return (
    <>
      <h3 className="fw-bold mb-3">Timeline</h3>
      <div className="row">
        <div className="col-md-12">
          <ul className="timeline">
            <li>
              <div className="timeline-badge">
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  <p>
                    <small className="text-muted">
                      <i className="far fa-paper-plane"></i> 11 hours ago via
                      Twitter
                    </small>
                  </p>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge warning">
                <i className="far fa-bell"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge danger">
                <i className="icon-close"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info">
                <i className="icon-tag"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <hr />
                  <div className="btn-group dropdown">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="btn-label">
                        <i className="fa fa-cog"></i>
                      </span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <NavLink className="dropdown-item" to="#">
                          Action
                        </NavLink>
                        <NavLink className="dropdown-item" to="#">
                          Another action
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="#">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge success">
                <i className="icon-credit-card"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TimelineManage;
