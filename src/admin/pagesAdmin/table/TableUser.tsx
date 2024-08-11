import React, { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { userApi } from "../../../service/user/userApi";
import { UserData } from "../../../Model/Manage";
import {
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  notification,
} from "antd";
import { wordRegExp, emailRegExp, phoneRegExp } from "../../../util/utilMethod";

import dayjs, { Dayjs } from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import utc from "dayjs/plugin/utc";

import Loading from "../../../user/Components/Antd/Loading";

// Cấu hình dayjs
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(utc);

const TableUser: React.FC = () => {
  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserData>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true, // Đảm bảo gender là boolean
    role: "",
    password: "",
    avatar: "",
  });

  const [form] = Form.useForm();
  const pageSize = 6;

  const queryResult: UseQueryResult<
    {
      data: UserData[];
      keywords: string | null;
      pageIndex: number;
      pageSize: number;
      totalRow: number;
    },
    Error
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
          data: [],
          keywords: null,
          pageIndex: 0,
          pageSize: 0,
          totalRow: 0,
        };
      }
    },
    staleTime: 5 * 60 * 1000,
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
      queryClient.invalidateQueries({
        queryKey: ["listUsers", currentPage, pageSize],
      });
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

  const mutationDeleteUser = useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["listUsers", currentPage, pageSize],
      });
    },
    onError: () => {},
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
        gender: true,
        role: "",
        password: "",
        avatar: "",
      }
    );
    form.resetFields(); // Reset form trước khi mở modal
    form.setFieldsValue(
      user || {
        name: "",
        email: "",
        phone: "",
        birthday: "",
        gender: true,
        role: "",
        password: "",
        avatar: "",
      }
    ); // Cập nhật giá trị của form với currentUser
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
    form.resetFields(); // Xóa giá trị khi đóng modal
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

  const handleGenderChange = (value: boolean) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      gender: value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      role: value,
    }));
  };

  const handleDateChange = (
    date: Dayjs | null,
    dateString: string | string[]
  ) => {
    // Handle dateString based on its type
    const validDateString = Array.isArray(dateString)
      ? dateString[0]
      : dateString;

    if (date && date.isValid()) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        birthday: validDateString,
      }));
    } else {
      // Handle invalid date scenario if necessary
      console.log("Invalid date selected");
    }
  };

  if (queryResult.isLoading) {
    return <Loading />;
  }

  if (queryResult.isError) {
    return <div>Error: {queryResult.error?.message} </div>;
  }

  const totalRow = queryResult?.data?.totalRow;
  const data = queryResult?.data?.data || [];

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
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                if (user?.id !== undefined) {
                                  mutationDeleteUser.mutate(user.id.toString());
                                }
                              }}
                            >
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
                total={totalRow}
                pageSize={pageSize}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={currentUser.id === 0 ? "Add User" : "Edit User"}
        open={isModalVisible}
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
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Name"
            rules={[
              { required: true, message: "Please enter the name" },
              {
                pattern: wordRegExp,
                message: "Name should not contain special characters",
              },
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
              { required: true, message: "Please enter the email" },
              { pattern: emailRegExp, message: "Invalid email format" },
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
              { required: true, message: "Please enter the phone number" },
              { pattern: phoneRegExp, message: "Invalid phone number" },
            ]}
          >
            <Input
              value={currentUser.phone}
              onChange={(e) => handleInputChange(e, "phone")}
            />
          </Form.Item>
          <Form.Item
            label="Birthday"
            rules={[{ required: true, message: "Please select the birthday" }]}
          >
            <DatePicker
              format="YYYY-MM-DD"
              value={
                currentUser?.birthday ? dayjs(currentUser?.birthday) : null
              }
              onChange={handleDateChange}
            />
          </Form.Item>
          <Form.Item label="Gender">
            <Select
              value={currentUser.gender}
              onChange={handleGenderChange}
              options={[
                { value: true, label: "Male" },
                { value: false, label: "Female" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select
              value={currentUser.role}
              onChange={handleRoleChange}
              options={[
                { value: "admin", label: "Admin" },
                { value: "user", label: "User" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableUser;
