import React, { useState } from "react";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { userApi } from "../../../service/user/userApi";
import { UserData } from "../../../Model/Manage";
import { Form, Input, Modal, Pagination, Select, notification } from "antd";
import {
  wordRegExp,
  emailRegExp,
  phoneRegExp,
  birthRegExp,
  validatePassword,
} from "../../../util/utilMethod";
import Loading from "../../../user/Components/Antd/Loading";

const TableUser: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserData>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true, // boolean value
    role: "",
    password: "", // Initialize optional properties
    avatar: "",
  });

  const [form] = Form.useForm();
  const pageSize = 6;
  type UserQueryError = Error;

  const queryResult: UseQueryResult<
    {
      data: UserData[];
      keywords: string | null;
      pageIndex: number;
      pageSize: number;
      totalRow: number;
    },
    UserQueryError
  > = useQuery({
    queryKey: ["listUsers", currentPage, pageSize],
    queryFn: async () => {
      try {
        const response = await userApi.getUser(currentPage, pageSize);
        if (response && response.data) {
          return {
            data: response.data,
            keywords: response.keywords,
            pageIndex: response.pageIndex,
            pageSize: response.pageSize,
            totalRow: response.totalRow,
          };
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        return {
          data: [], // Return an empty array if there is an error
          keywords: null,
          pageIndex: 0,
          pageSize: 0,
          totalRow: 0,
        };
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });

  const mutation = useMutation({
    mutationFn: (user: UserData) => {
      if (user.id === 0) {
        return userApi.postUser(user);
      } else {
        return userApi.updateUser(user, user.id.toString());
      }
    },
    onSuccess: () => {
      setIsModalVisible(false);
      notification.success({
        message: currentUser.id === 0 ? "User Added" : "User Updated",
        description: "The user details have been successfully saved.",
      });
    },
    onError: (error) => {
      notification.error({
        message: "Error",
        description: error.message,
      });
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showModal = (user?: UserData) => {
    setCurrentUser(
      user || {
        id: 0,
        name: "",
        email: "",
        phone: "",
        birthday: "",
        gender: true, // default boolean value
        role: "",
        password: "", // default value for optional properties
        avatar: "",
      }
    );
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        mutation.mutate(currentUser);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [field]: e.target.value,
    }));
  };

  const handleGenderChange = (value: string) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      gender: value === "Male", // Convert string to boolean
    }));
  };

  if (queryResult.isLoading) {
    return <Loading />;
  }

  if (queryResult.isError) {
    return <div>Error: {queryResult.error?.message} </div>;
  }

  const totalRow = queryResult?.data?.totalRow;
  const data = queryResult?.data?.data || [];

  const total = totalRow; // Total number of rows

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">User Management</h3>
        </div>
        <button className="btn btn-primary mb-5" onClick={() => showModal()}>
          Add User
        </button>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user: UserData | undefined) => (
                      <tr key={user?.id}>
                        <th>{user?.id}</th>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.phone}</td>
                        <td>{user?.role}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ marginRight: "10px" }}
                              onClick={() => showModal(user)}
                            >
                              Edit
                            </button>
                            <button className="btn btn-danger btn-sm">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                align="center"
                current={currentPage}
                total={total} // Total count from the API
                pageSize={pageSize}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={currentUser.id === 0 ? "Add User" : "Edit User"}
        open={isModalVisible} // Use `open` instead of `visible` for Antd v5
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button
            key="submit"
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
            onClick={handleOk}
          >
            {currentUser.id === 0 ? "Add" : "Edit"}
          </button>,
          <button
            key="cancel"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>,
        ]}
      >
        <Form layout="vertical" form={form} initialValues={currentUser}>
          <Form.Item
            label="Name"
            rules={[
              { required: true, message: "Please input the name!" },
              { max: 50, message: "Name cannot be longer than 50 characters!" },
              { pattern: wordRegExp, message: "Invalid name format!" },
            ]}
          >
            <Input
              value={currentUser.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            rules={[
              { required: true, message: "Please input a valid email!" },
              { type: "email", message: "The input is not a valid email!" },
              { pattern: emailRegExp, message: "Invalid email format!" },
            ]}
          >
            <Input
              value={currentUser.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            rules={[
              {
                max: 15,
                message: "Phone number cannot be longer than 15 characters!",
              },
              { pattern: phoneRegExp, message: "Invalid phone number format!" },
            ]}
          >
            <Input
              value={currentUser.phone}
              onChange={(e) => handleInputChange(e, "phone")}
            />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="birthday"
            rules={[
              { type: "date", message: "Please input a valid date!" },
              { pattern: birthRegExp, message: "Invalid birth date format!" },
            ]}
          >
            <Input
              type="date"
              value={currentUser.birthday}
              onChange={(e) => handleInputChange(e, "birthday")}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            rules={[{ required: true, message: "Please select the gender!" }]}
          >
            <Select
              value={currentUser.gender ? "Male" : "Female"}
              onChange={handleGenderChange}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input the password!" },
              {
                validator: (_, value) =>
                  validatePassword(value)
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Password must contain 6 to 12 characters, including at least one letter and one number!"
                        )
                      ),
              },
            ]}
          >
            <Input.Password
              value={currentUser.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </Form.Item>
          <Form.Item
            label="Role"
            rules={[{ required: true, message: "Please select the role!" }]}
          >
            <Select
              value={currentUser.role}
              onChange={(value) =>
                setCurrentUser((prevUser) => ({
                  ...prevUser,
                  role: value,
                }))
              }
            >
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="User">User</Select.Option>
            </Select>
          </Form.Item>
          {currentUser.id !== 0 && (
            <Form.Item label="Avatar URL" name="avatar">
              {currentUser.avatar && (
                <div className="image-preview">
                  <img
                    src={currentUser.avatar}
                    alt="Preview"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                </div>
              )}
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default TableUser;
