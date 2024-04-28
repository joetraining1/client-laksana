import { Typography } from "@mui/material";
import React from "react";
import { h4FontStyle } from "../../../constant/Styles";
import { Colors } from "../../../constant/Colors";

const SectionHeader = ({ title, value, children, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        ...styles,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          ...h4FontStyle,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          fontWeight: "400",
          color: Colors.navbar,
        }}
      >
        {value}
      </Typography>
    </div>
  );
};

export default SectionHeader;
