import React from "react";
import Detail from "../Components/Detail/Detail";
import DetailNav from "../Components/Detail/DetailNav";

type Props = {};

const DetailPage = (props: Props) => {
  return (
    <>
      <DetailNav />
      <Detail />
    </>
  );
};

export default DetailPage;
