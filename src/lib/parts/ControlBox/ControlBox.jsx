import React from "react";
import { AllSize, ButtonStyleBasic } from "../../../constant/Styles";
import { Button } from "@mui/material";

const ControlBox = ({ children }) => {
  return (
    <div
      id="control-box"
      style={{
        display: "flex",
        gap: "10px",
        ...AllSize,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ControlBox;

export const ActionPress = ({ title, action, style }) => {
  return (
    <Button
      disableElevation
      sx={{
        ...ButtonStyleBasic,
        ...style,
      }}
      variant="contained"
      size="small"
      onClick={() => action()}
    >
      {title}
    </Button>
  );
};
