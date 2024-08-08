import React from "react";
import RoomsNav from "../Components/Rooms/RoomsNav";
import Rooms from "../Components/Rooms/Rooms";

type Props = {};

const RoomPage = (props: Props) => {
  return (
    <>
      <RoomsNav />
      <Rooms />
    </>
  );
};

export default RoomPage;
