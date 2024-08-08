import React from "react";

type Props = {};

const TypographyPage = (props: Props) => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Typography</h3>
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
              <a href="#">Typography</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Card Title</div>
                <div className="card-category">Card Category</div>
              </div>
              <div className="card-body">
                <table className="table table-typo">
                  <tbody>
                    <tr>
                      <td>
                        <p>Header 1</p>
                      </td>
                      <td>
                        <span className="h1">h1. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Header 2</p>
                      </td>
                      <td>
                        <span className="h2">h2. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Header 3</p>
                      </td>
                      <td>
                        <span className="h3">h3. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Header 4</p>
                      </td>
                      <td>
                        <span className="h4">h4. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Header 5</p>
                      </td>
                      <td>
                        <span className="h5">h5. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Header 5</p>
                      </td>
                      <td>
                        <span className="h6">h6. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Paragraph</p>
                      </td>
                      <td>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Paragraph Lead</p>
                      </td>
                      <td>
                        <p className="lead">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Quote</p>
                      </td>
                      <td>
                        <blockquote>
                          <p className="blockquote blockquote-primary">
                            "Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book."
                            <br />
                            <br />
                            <small> - Noaa </small>
                          </p>
                        </blockquote>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Primary Text</p>
                      </td>
                      <td>
                        <p className="text-primary">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Info Text</p>
                      </td>
                      <td>
                        <p className="text-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Success Text</p>
                      </td>
                      <td>
                        <p className="text-success">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Warning Text</p>
                      </td>
                      <td>
                        <p className="text-warning">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Danger Text</p>
                      </td>
                      <td>
                        <p className="text-danger">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Muted Text</p>
                      </td>
                      <td>
                        <p className="text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <hr />
                Card Footer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;
