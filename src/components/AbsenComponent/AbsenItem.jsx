import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import { AllSize, ButtonStyleBasic, h4FontStyle } from "../../constant/Styles";

const AbsenItem = ({ title, icon, waktu }) => {
  return (
    <div
      style={{
        height: "150px",
        border: `2px dashed rgba(0,0,0,0.2)`,
        borderRadius: "4px",
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography
          sx={{
            fontFamily: h4FontStyle.fontFamily,
            color: "rgba(0,0,0,0.65)",
          }}
          variant="h6"
        >
          {title}
        </Typography>
      </div>
      <div
        style={{
          ...AllSize,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {waktu ? (
          <Typography variant="h4" sx={h4FontStyle}>
            {waktu}
          </Typography>
        ) : (
          <Button disableElevation variant="contained" sx={ButtonStyleBasic}>
            Absen Sekarang
          </Button>
        )}
      </div>
    </div>
  );
};

export default AbsenItem;
