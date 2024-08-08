//tsrafce
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHomeAdmin from "../componentsAdmin/HeaderHomeAdmin";
import FooterHomeAdmin from "../componentsAdmin/FooterHomeAdmin";
import SideBarAdmin from "../componentsAdmin/SideBarAdmin";
import DashboardAdmin from "../pagesAdmin/DashboardAdmin";
import AvatarPage from "../pagesAdmin/base/AvatarPage";

type Props = {};

const AdminTemplate = (props: Props) => {
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
