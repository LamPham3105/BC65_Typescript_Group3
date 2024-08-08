import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { userApi } from "../../../service/user/userApi";

// Định nghĩa kiểu dữ liệu cho userData
interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: "ADMIN" | "USER";
  avatar: string;
}

const EditUserForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
    avatar: "",
  });

  // Fetch user data
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => userApi.getUserById(id!),
    enabled: !!id, // Chỉ thực hiện truy vấn nếu id tồn tại
  });

  useEffect(() => {
    if (isSuccess && user) {
      setUserData({
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender,
        role: user.role,
        avatar: user.avatar,
      });
    }
  }, [isSuccess, user]);

  const mutation = useMutation({
    mutationFn: (userData: User) => userApi.updateUser(userData, id!),
    onSuccess: (data) => {
      console.log("User updated:", data);
      navigate("/admin/table"); // Redirect after success
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGenderChange = (gender: boolean) => {
    setUserData((prevData) => ({
      ...prevData,
      gender,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);
      userApi
        .postUserAvatar(formData)
        .then((res) => {
          setUserData((prevData) => ({
            ...prevData,
            avatar: res.avatar, // Cập nhật đường dẫn avatar từ API
          }));
        })
        .catch((error) => {
          console.error("Error uploading avatar:", error);
        });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(userData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Edit User</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">User Details</div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="id">ID</label>
                        <input
                          type="text"
                          className="form-control"
                          id="id"
                          value={id || ""}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={userData.password}
                          onChange={handleInputChange}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="birthday">Birthday</label>
                        <input
                          type="date"
                          className="form-control"
                          id="birthday"
                          value={userData.birthday}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <br />
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              checked={userData.gender === true}
                              onChange={() => handleGenderChange(true)}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              checked={userData.gender === false}
                              onChange={() => handleGenderChange(false)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                          className="form-select"
                          id="role"
                          value={userData.role}
                          onChange={handleInputChange}
                        >
                          <option value="ADMIN">Admin</option>
                          <option value="USER">User</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input
                          type="file"
                          className="form-control"
                          id="avatar"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {userData.avatar && (
                          <img
                            src={userData.avatar}
                            alt="Avatar Preview"
                            style={{ marginTop: "10px", maxWidth: "100px" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn btn-success"
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Submitting..." : "Submit"}
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => navigate("/admin/table")}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
