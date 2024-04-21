import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reduces/authSlice";
import { h4FontStyle } from "../../../constant/Styles";
import { useNavigate } from "react-router-dom";

const Sides = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) => state.auth.authState);

  const LogSec = () => {
    dispatch(logout());
    navigate("/");
    return;
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "auto",
        gap: "1vw",
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          fontWeight: "500",
          fontSize: "16px",
        }}
      >{`Hi, ${employee.email}`}</Typography>
      <Divider orientation="vertical" sx={{
        width: '1px',
        height: '90%',
        backgroundColor: '#fff'
      }}/>
      <Button
        variant="text"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          color: "#fff",
        }}
        onClick={() => LogSec()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Sides;
