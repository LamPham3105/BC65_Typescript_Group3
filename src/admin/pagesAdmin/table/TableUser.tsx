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

import { parseISO, isValid, format } from "date-fns";

import Loading from "../../../user/Components/Antd/Loading";

import debounce from "lodash.debounce";

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

  const [searchTerm, setSearchTerm] = useState<string>(""); // Thêm state để quản lý từ khóa tìm kiếm

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
    queryKey: ["listUsers", currentPage, pageSize, searchTerm], // Thêm searchTerm vào queryKey
    queryFn: async () => {
      try {
        const response = await userApi.getUser(
          currentPage,
          pageSize,
          searchTerm
        ); // Truyền searchTerm vào API
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
        queryKey: ["listUsers", currentPage, pageSize, searchTerm],
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
        queryKey: ["listUsers", currentPage, pageSize, searchTerm],
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

  const handleDateChange = (date: any, dateString: string | string[]) => {
    const validDateString = Array.isArray(dateString)
      ? dateString[0]
      : dateString;

    if (date && isValid(date.toDate())) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        birthday: validDateString,
      }));
    } else {
      console.log("Invalid date selected");
    }
  };

  //tìm kiếm
  const debouncedSearch = debounce((value: string) => {
    setSearchTerm(value);
  }, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    queryClient.invalidateQueries({
      queryKey: ["listUsers", currentPage, pageSize, searchTerm],
    });
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
        <div className="input-group mb-5" style={{ width: "33.33%" }}>
          <input
            type="text"
            placeholder="Search ..."
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-secondary" onClick={handleSearch}>
            Search
          </button>
        </div>
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
                          <button
                            className="btn btn-warning me-2"
                            onClick={() => showModal(user)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              user?.id &&
                              mutationDeleteUser.mutate(user.id.toString())
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={totalRow}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={currentUser.id === 0 ? "Add User" : "Edit User"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="userForm"
          initialValues={currentUser}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input the user's name!",
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
            name="email"
            rules={[
              {
                required: true,
                message: "Please input the user's email!",
              },
              {
                pattern: emailRegExp,
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              value={currentUser.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input the user's phone number!",
              },
              {
                pattern: phoneRegExp,
                message: "Please enter a valid phone number!",
              },
            ]}
          >
            <Input
              value={currentUser.phone}
              onChange={(e) => handleInputChange(e, "phone")}
            />
          </Form.Item>
          <Form.Item label="Birthday" name="birthday">
            <DatePicker
              value={
                currentUser.birthday ? parseISO(currentUser.birthday) : null
              }
              format="yyyy-MM-dd"
              onChange={handleDateChange}
            />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select
              value={currentUser.gender}
              onChange={handleGenderChange}
              options={[
                { value: true, label: "Male" },
                { value: false, label: "Female" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select
              value={currentUser.role}
              onChange={handleRoleChange}
              options={[
                { value: "admin", label: "Admin" },
                { value: "user", label: "User" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              value={currentUser.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableUser;
