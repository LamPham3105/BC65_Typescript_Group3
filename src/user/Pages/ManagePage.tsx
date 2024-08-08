import React from "react";
import ManageNav from "../Components/Manage/ManageNav";
import UserProfilePage from "../Components/Manage/UserProfilePage";

type Props = {};

const ManagePage = (props: Props) => {
  return (
    <>
      <ManageNav />
      <UserProfilePage />
    </>
  );
};

export default ManagePage;
