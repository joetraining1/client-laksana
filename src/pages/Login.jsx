import React from "react";
import { Outlet } from "react-router-dom";
import MassWidth from "../lib/parts/MassWidth/MassWidth";
import { FlexColumn } from "../constant/Styles";
import LoginContainer from "../components/LoginContainer/LoginContainer";

const Login = () => {
  return (
    <React.Fragment>
      <MassWidth
        styles={{
          ...FlexColumn,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginContainer />
      </MassWidth>
      <Outlet />
    </React.Fragment>
  );
};

export default Login;
