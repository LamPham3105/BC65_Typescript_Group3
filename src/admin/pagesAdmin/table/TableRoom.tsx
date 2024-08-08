import React, { useEffect, useState } from "react";
import { roomApi } from "../../../service/room/roomApi";

type Room = {
  id: number;
  tenPhong: string;
  khach: number;
  giaTien: number;
  hinhAnh: string;
};

const TableRoom = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await roomApi.getRoom();
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
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
        <button className="btn btn-primary mb-5">Add Room</button>
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
                      <th>Id</th>
                      <th>Name</th>
                      <th>Capacity</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room.id}>
                        <th>{room.id}</th>
                        <td>{room.tenPhong}</td>
                        <td>{room.khach}</td>
                        <td>${room.giaTien}</td>
                        <td>
                          <img
                            src={room.hinhAnh}
                            alt={room.tenPhong}
                            width={100}
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

export default TableRoom;
