import React, { useEffect, useState } from "react";
import { locateApi } from "../../../service/locate/locateApi";

type Location = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};

const TableLocation = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await locateApi.getLocate();
        setLocations(data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Tables</h3>
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
              <a href="#">Tables</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Basic Tables</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary mb-5">Add Location</button>
        <div className="row">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Responsive Table</div>
            </div>
            <div className="card-body">
              <div className="card-sub">
                Create responsive tables by wrapping any table with
                <code className="highlighter-rouge">.table-responsive</code>
                <code className="highlighter-rouge">DIV</code> to make them
                scroll horizontally on small devices
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "100px" }}>Id</th>
                      <th style={{ width: "150px" }}>Location</th>
                      <th style={{ width: "150px" }}>Province</th>
                      <th style={{ width: "150px" }}>Nation</th>
                      <th style={{ width: "200px" }}>Image</th>
                      <th style={{ width: "120px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locations.map((location) => (
                      <tr key={location.id}>
                        <td>{location.id}</td>
                        <td>{location.tenViTri}</td>
                        <td>{location.tinhThanh}</td>
                        <td>{location.quocGia}</td>
                        <td style={{ width: "200px" }}>
                          <img
                            src={location.hinhAnh}
                            alt={location.tenViTri}
                            style={{ width: "100%", height: "auto" }} // Đảm bảo hình ảnh vừa với cột
                          />
                        </td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default TableLocation;
