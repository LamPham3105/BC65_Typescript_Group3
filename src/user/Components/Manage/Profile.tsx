import React, { useState } from "react";
import { ProfileProps } from "../../../Model/Model";
import "../../../css/UserProfilePage.css";

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className="profile card p-3">
        <div className="profile-header d-flex align-items-center">
          <div>
            <div
              className="profile-picture bg-secondary rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={user.avatar}
                alt="Profile Picture"
                className="rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span className="update-photo" onClick={handleShow}>
              Cập nhật ảnh
            </span>
          </div>
          <div className="profile-verification ml-auto d-flex flex-column align-items-start">
            <span className="badge badge-success mb-2">Xác minh danh tính</span>
            <span className="badge badge-primary">Địa chỉ email</span>
          </div>
        </div>
        <div className="profile-info mt-3">
          <h2>Xin chào, tôi là {user.name}</h2>
          <p>Bắt đầu tham gia vào 2024</p>
          <button className="btn btn-outline-primary">Chỉnh sửa hồ sơ</button>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <h2>Thay Đổi Ảnh Đại Diện</h2>
            <div className="text-center">
              <img
                src="/path/to/default-avatar.png"
                className="rounded-circle mb-3"
                alt="Avatar"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <input type="file" className="form-control mb-3" />
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleClose}>
                Upload Avatar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
