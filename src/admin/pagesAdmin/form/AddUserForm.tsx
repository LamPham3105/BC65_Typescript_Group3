import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../../service/user/userApi";

const AddUserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
  });

  const mutation = useMutation({
    mutationFn: (user: typeof userData) => userApi.postUser(user),
    onSuccess: (data) => {
      console.log("User added:", data);
    },
    onError: (error) => {
      console.error("Error adding user:", error);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(userData);
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Forms</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Form Elements</div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
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
                              onChange={() =>
                                setUserData({ ...userData, gender: true })
                              }
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
                              onChange={() =>
                                setUserData({ ...userData, gender: false })
                              }
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

                    <button className="btn btn-danger" type="button">
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

export default AddUserForm;
