import React from "react";
import { NavLink } from "react-router-dom";
import CardManage from "./CardManage";
import TimelineManage from "./TimelineManage";
import PricingManage from "./PricingManage";
import CustomizeCardManage from "./CustomizeCardManage";

const ManageAdmin = () => {
  return (
    <div className="container">
      <div className="page-inner">
        {/* card */}
        <CardManage />
        {/* end card */}

        {/* timeline */}
        <TimelineManage />
        {/* end timeline */}

        {/* pricing */}
        <PricingManage />
        {/* end pricing */}

        {/* customize card */}
        <CustomizeCardManage />
        {/* end customize card */}
      </div>
    </div>
  );
};

export default ManageAdmin;
