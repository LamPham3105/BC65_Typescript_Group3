import React, { useState } from "react";
import {
  emailRegExp,
  passRegExp,
  setDataTextStorage,
  USER_LOGIN,
} from "../../util/utilMethod";
import { adminApi } from "../../service/admin/adminApi";
import useCustomFormik from "../../hook/useCustomFormik";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

type Props = {};

const LoginAdmin = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const mutation = useMutation({
    mutationFn: adminApi.postLoginAdmin,
    onSuccess: (data) => {
      // Lưu thông tin người dùng vào localStorage
      setDataTextStorage(USER_LOGIN, data.accessToken);
      // Điều hướng người dùng đến trang khác sau khi đăng nhập thành công, nếu cần
    },
    onError: (error) => {
      console.error("Đăng nhập thất bại", error);
    },
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegExp, "Email không hợp lệ")
      .required("Vui lòng nhập email!"),
    password: Yup.string()
      .matches(
        passRegExp,
        "Mật khẩu phải có 6-10 ký tự (bao gồm ít nhất 1 ký tự số, 1 ký tự viết hoa, 1 ký tự đặc biệt)"
      )
      .required("Vui lòng nhập mật khẩu!"),
  });

  const formik = useCustomFormik<LoginFormValues>(
    {
      email: "",
      password: "",
    },
    validationSchema,
    (values) => {
      mutation.mutate(values);
    }
  );

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 mt-5">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              className="form-control rounded-input"
              id="loginEmail"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="loginPassword">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control rounded-input"
                id="loginPassword"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                  ></i>
                </button>
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
