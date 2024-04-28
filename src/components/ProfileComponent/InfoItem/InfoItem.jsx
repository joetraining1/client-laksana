import { Typography } from "@mui/material";
import React from "react";
import { h4FontStyle } from "../../../constant/Styles";
import { Colors } from "../../../constant/Colors";

const InfoItem = ({ icon, title, value }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "225px",
        height: "100%",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      {icon}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: h4FontStyle.fontFamily,
            fontWeight: "500",
            color: Colors.darkGrey
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: h4FontStyle.fontFamily,
            fontWeight: "600",
            color: Colors.navbar2
          }}
        >
          {value}
        </Typography>
      </div>
    </div>
  );
};

export default InfoItem;
