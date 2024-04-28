import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../constant/Colors";
import { h4FontStyle } from "../../../constant/Styles";

const InfoSection = ({ title, children }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          ...h4FontStyle,
          color: Colors.navbar,
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1vw",
          justifyContent: "flex-start",
          flexWrap: 'wrap',
          alignItems: 'flex-start'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
