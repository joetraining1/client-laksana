import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import MassWidth from "../parts/MassWidth/MassWidth";
import { TypeAcc } from "../../constant/DummyData";
import { logout } from "../../redux/reduces/authSlice";
import AdminNav from "../../components/AdminNav/AdminNav";

const Admin = () => {
  const employee = useSelector((state) => state.auth.authState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(employee);

  useEffect(() => {
    if (
      !TypeAcc[employee.type] &&
      employee.for !== "administrator" &&
      employee.email === ""
    ) {
      dispatch(logout());
      navigate("/");
      return;
    }
  }, [employee]);

  return (
    <React.Fragment>
      <Topbar />
      <AdminNav />
      <MassWidth
        styles={{
          flexDirection: "column",
          minHeight: "87svh",
          padding: "1vw 0",
          gap: "1vw",
        }}
      >
        <Outlet />
      </MassWidth>
    </React.Fragment>
  );
};

export default Admin;
