import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AllSize, FlexBasic } from "../../constant/Styles";
import { ReplyAllRounded } from "@mui/icons-material";
import { Colors } from "../../constant/Colors";

const PageContainer = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div
      id="sections"
      style={{
        ...FlexBasic,
        ...AllSize,
        minHeight: "39svh",
        gap: "10px",
        paddingBottom: "5svh",
      }}
    >
      <Button
        size="small"
        variant="outlined"
        sx={{
          color: Colors.navbar2,
          borderColor: Colors.navbar2,
          marginRight: "auto",
          "&:hover": {
            backgroundColor: Colors.navbar2,
            color: "#fff",
            border: `1px solid ${Colors.navbar2}`,
          },
        }}
        startIcon={<ReplyAllRounded />}
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      {children}
    </div>
  );
};

export default PageContainer;

export const Buttons = () => {
  return (
    <Button
      size="small"
      variant="outlined"
      sx={{
        color: Colors.navbar2,
        borderColor: Colors.navbar2,
        marginRight: "auto",
        "&:hover": {
          backgroundColor: Colors.navbar2,
          color: "#fff",
          border: `1px solid ${Colors.navbar2}`,
        },
      }}
      startIcon={<ReplyAllRounded />}
      onClick={() => navigate("/")}
    >
      Back
    </Button>
  );
};

export const Container = ({ children }) => {
  return (
    <div
      id="sections"
      style={{
        ...FlexBasic,
        ...AllSize,
        minHeight: "39svh",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
};
