import React, { useRef } from "react";
import { FlexBasic, h4FontStyle } from "../../constant/Styles";
import { Button, TextField } from "@mui/material";
import { Colors } from "../../constant/Colors";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { login } from "../../redux/reduces/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForms = ({ prefix }) => {
  const inputWidthSize = "60%";
  const emailRef = useRef();
  const passRef = useRef();

  const employee = useSelector((state) => state.auth.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSequence = async () => {
    if (!emailRef.current.value || !passRef.current.value) {
      return;
    }
    dispatch(
      login({
        email: emailRef.current.value,
      })
    );
    prefix === "administrator" ? navigate("/dashboard") : navigate("/");
    return;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        ...FlexBasic,
        gap: "10px",
      }}
    >
      <TextField
        sx={{
          width: inputWidthSize,
        }}
        variant="standard"
        type="email"
        label="email"
        inputRef={emailRef}
      />
      <TextField
        sx={{
          width: inputWidthSize,
          marginBottom: "10px",
        }}
        variant="standard"
        label="password"
        type="password"
        inputRef={passRef}
      />
      <Button
        variant="contained"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          width: inputWidthSize,
          backgroundColor: Colors.navbar2,
          "&:hover": {
            backgroundColor: Colors.navbar,
          },
        }}
        onClick={() => LoginSequence()}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForms;
