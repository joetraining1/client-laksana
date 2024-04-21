import React from "react";
import { Colors } from "../../constant/Colors";
import { FlexBasic, h4FontStyle } from "../../constant/Styles";
import { Typography } from "@mui/material";
import LoginForms from "../forms/LoginForms";

const LoginContainer = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "400px",
        ...FlexBasic,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          ...h4FontStyle,
          color: Colors.navbar,
        }}
      >
        Sign In
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        login untuk pegawai.
      </Typography>
      <LoginForms />
    </div>
  );
};

export default LoginContainer;
