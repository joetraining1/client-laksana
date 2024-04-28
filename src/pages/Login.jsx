import React from "react";
import { Outlet } from "react-router-dom";
import MassWidth from "../lib/parts/MassWidth/MassWidth";
import { FlexColumn } from "../constant/Styles";
import LoginContainer from "../components/LoginContainer/LoginContainer";

const Login = ({ hero }) => {
  return (
    <React.Fragment>
      <MassWidth
        styles={{
          ...FlexColumn,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginContainer title={hero} />
      </MassWidth>
      <Outlet />
    </React.Fragment>
  );
};

export default Login;
