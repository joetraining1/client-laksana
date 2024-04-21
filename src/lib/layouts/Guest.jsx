import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Outlet } from "react-router-dom";

const Guest = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Guest;
