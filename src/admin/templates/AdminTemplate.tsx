//tsrafce
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHomeAdmin from "../componentsAdmin/HeaderHomeAdmin";
import FooterHomeAdmin from "../componentsAdmin/FooterHomeAdmin";
import SideBarAdmin from "../componentsAdmin/SideBarAdmin";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useRoute from "../../hook/useRoute";

type Props = {};

const AdminTemplate = (props: Props) => {
  const { navigate } = useRoute();

  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  if (userLogin?.user.role !== "ADMIN") {
    navigate("/");
  }

  return (
    <div className="wrapper">
      <SideBarAdmin />
      <div className="main-panel">
        <HeaderHomeAdmin />
        <Outlet />
        <FooterHomeAdmin />
      </div>
    </div>
  );
};

export default AdminTemplate;
