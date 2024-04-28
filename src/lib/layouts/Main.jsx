import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import MassWidth from "../parts/MassWidth/MassWidth";
import MainNav from "../../components/MainNav/MainNav";

const Main = ({}) => {
  const employee = useSelector((state) => state.auth.authState);
  const navigate = useNavigate();

  // console.log(employee)

  useEffect(() => {
    employee.email === "" && navigate("/login");
  }, [employee]);

  return (
    <React.Fragment>
      <Topbar />
      <MassWidth
        styles={{
          flexDirection: "column",
          minHeight: "94svh",
        }}
      >
        <MainNav />
        <Outlet />
      </MassWidth>
    </React.Fragment>
  );
};

export default Main;
