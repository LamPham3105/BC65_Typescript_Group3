import React, { useState, useEffect } from "react";
import { roomApi } from "../../../service/room/roomApi";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

type BookingRoom = {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
};

const TableBookingRoom = () => {
  const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<BookingRoom | null>(
    null
  );

  // Tải dữ liệu khi component được render
  useEffect(() => {
    const fetchBookingRooms = async () => {
      try {
        const data = await roomApi.getBookingRoom();
        setBookingRooms(data);
      } catch (error) {
        console.error("Failed to fetch booking rooms:", error);
      }
    };

    fetchBookingRooms();
  }, []);

  const handleDetailClick = async (id: number) => {
    try {
      const booking = await roomApi.getBookingRoomByID(id.toString());
      setSelectedBooking(booking);
      // Hiển thị modal
      const modalElement = document.getElementById("detailModal");
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    } catch (error) {
      console.error("Lấy chi tiết đặt phòng không thành công:", error);
    }
  };

  const closeModal = () => {
    setSelectedBooking(null);
  };

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
                      <th>Check-in Date</th>
                      <th>Capacity</th>
                      <th>Customer's Code</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingRooms.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.ngayDen}</td>
                        <td>{booking.soLuongKhach}</td>
                        <td>{booking.maNguoiDung}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleDetailClick(booking.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#detailModal"
                          >
                            Detail
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

      {/* Modal */}
      <div
        className="modal fade"
        id="detailModal"
        tabIndex={-1}
        aria-labelledby="detailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailModalLabel">
                Booking Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="modal-body">
              {selectedBooking && (
                <div>
                  <p>
                    <strong>Id:</strong> {selectedBooking.id}
                  </p>
                  <p>
                    <strong>Room code:</strong> {selectedBooking.maPhong}
                  </p>
                  <p>
                    <strong>Check-in Date:</strong> {selectedBooking.ngayDen}
                  </p>
                  <p>
                    <strong>Check-out Date:</strong> {selectedBooking.ngayDi}
                  </p>
                  <p>
                    <strong>Capacity:</strong> {selectedBooking.soLuongKhach}
                  </p>
                  <p>
                    <strong>Customer's Code:</strong>{" "}
                    {selectedBooking.maNguoiDung}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBookingRoom;
