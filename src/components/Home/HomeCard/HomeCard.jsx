import { Card, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../constant/Colors";
import { h4FontStyle } from "../../../constant/Styles";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ icon, title, nav, shift, page }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "250px",
        height: "225px",
        overflow: "hidden",
        position: 'relative',
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.1s ease-out",
        borderRadius: '10px',
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 8px 50px rgba(0,0,0,0.3)",
          '& #overlay': {
            transform: 'scale(8)',
            backgroundColor: Colors.navbar2
          },
          "& svg": {
            color: "#fff",
            transform: "translateY(0%)",
          },
          "& h6": {
            transform: "translateY(0%)",
          },
        },
      }}
      onClick={() => navigate(nav)}
    >
      <div id="overlay"/>
      {icon}
      <Typography
        variant="h6"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          fontSize: "24px",
          transform: "translateY(200%)",
          zIndex: 1,
          color: "#fff",
          transition: "all 0.2s ease-out",
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default HomeCard;
